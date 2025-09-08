const Listing = require("../models/listing");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
  if(!listing) {
    req.flash("error", "Requested listing does not exist");
    return res.redirect("/listings");
  }
  if (req.query.payment === "success") {
      req.flash("success", "Payment successful! Booking confirmed.");
      return res.redirect(`/listings/${id}`);
  } else if (req.query.payment === "failed") {
      req.flash("error", "Payment failed. Please try again.");
      return res.redirect(`/listings/${id}`);
  }
  res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async (req, res, next) => {
    let url  = req.file.path;
    let filename = req.file.filename; 
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("success", "New Listing Created And Saved");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  if(!listing) {
    req.flash("error", "Requested listing does not exist");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", {listing});
};

module.exports.updateListing = async (req, res) => {
  let {id} = req.params;
  let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
  if(typeof req.file !== "undefined") {
    let url  = req.file.path;
    let filename = req.file.filename; 
    listing.image = {url, filename};
    await listing.save();
  }
  
  req.flash ("success", "Listing Updated Successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash ("success", "Listing Deleted Successfully!");
  res.redirect("/listings");
};

module.exports.bookListing = async (req, res) => {
  const { id } = req.params;
  const { months } = req.body;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  const quantity = parseInt(months) || 1; // fallback to 1 if invalid
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: listing.title,
            description: listing.description
          },
          unit_amount: Math.round((listing.price * 100) * 1.18) // price + 18% GST
        },
        quantity: quantity,
      }],
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/listings/${listing._id}?payment=success`,
      cancel_url: `${req.protocol}://${req.get('host')}/listings/${listing._id}?payment=failed`,
    });

    res.redirect(303, session.url);
  } catch (err) {
    console.error("Stripe error:", err);
    req.flash("error", "Payment failed. Please try again.");
    res.redirect(`/listings/${id}`);
  }
};