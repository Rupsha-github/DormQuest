const sampleListings = [
  {
    title: "Bright Single Dorm",
    description:
      "Sunlit corner room with a single bed beside a large window, a tidy desk, and floating shelves above.",
    image: "https://unsplash.com/photos/l_fc-lfMlX0",
    price: 1600,
    location: "Campus A1",
    country: "United States"
  },
  {
    title: "Shared Bunk Beds Room",
    description:
      "Room with bunk beds and two study desks side by side, simple storage underneath.",
    image: "https://unsplash.com/photos/wD3dur3v9aE",
    price: 1450,
    location: "Hall B2",
    country: "Canada"
  },
  {
    title: "Studio Graduate Unit",
    description:
      "Compact studio with a full-size bed, small desk, lamp, and bookshelf near the doorway.",
    image: "https://unsplash.com/photos/R9e-yPN14Uo",
    price: 3900,
    location: "Grad Flats",
    country: "Germany"
  },
  {
    title: "Library Annex Single",
    description:
      "Cozy single setup with bed, soft rug, small desk by the wall and framed print above.",
    image: "https://unsplash.com/photos/bpFuHFy-wVY",
    price: 2650,
    location: "Annex Wing",
    country: "Japan"
  },
  {
    title: "International Student Room",
    description:
      "Bright room with personalized décor, wooden desk, chair, and a comfortable twin bed.",
    image: "https://unsplash.com/photos/1myptMyQtRQ",
    price: 1750,
    location: "Intl Dorm",
    country: "United Kingdom"
  },
  {
    title: "Freshmen Quad Room",
    description:
      "Shared four-bed layout with corner desks and elevated clothing racks visible.",
    image: "https://unsplash.com/photos/V_QflKS4V7o",
    price: 1100,
    location: "Quad Hall",
    country: "South Korea"
  },
  {
    title: "Lofted Bed Single",
    description:
      "Lofted bed with study space beneath, featuring minimalist wood shelving and lamp.",
    image: "https://unsplash.com/photos/aG5a5xJCzNg",
    price: 3700,
    location: "Loft Wing",
    country: "France"
  },
  {
    title: "Accessible Ground‑Floor",
    description:
      "Spacious layout with wide floor clearance, a simple desk setup, and uncluttered space.",
    image: "https://images.unsplash.com/photo-1605410369466-3254a9375ef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvcm0lMjB3aXRoJTIwYmVkc2lkZSUyMHRhYmxlfGVufDB8fDB8fHww",
    price: 1550,
    location: "Accessible Block",
    country: "India"
  },
  {
    title: "Summer Twin Studio",
    description:
      "Twin bed arrangement with natural light, matching nightstand and open shelving.",
    image: "https://unsplash.com/photos/pI3xSWs2oBU",
    price: 2550,
    location: "Summer Hall",
    country: "Australia"
  },
  {
    title: "Shared Suite for Two",
    description:
      "Suite featuring two beds and two desks separated by a small reading nook.",
    image: "https://plus.unsplash.com/premium_photo-1724061886867-614ed364e703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9ybSUyMHdpdGglMjAyJTIwYmVkcyUyMGFuZCUyMHR3byUyMGRlc2tzfGVufDB8fDB8fHww",
    price: 1480,
    location: "Suite D",
    country: "Brazil"
  },
  {
    title: "Premium Window Single",
    description:
      "Single room with a large window overlooking greenery, a couch, and study desk.",
    image: "https://unsplash.com/photos/5Ncrcn-KdKM",
    price: 1850,
    location: "Sky View Res.",
    country: "Mexico"
  },
  {
    title: "Corridor Single Room",
    description:
      "Quiet single off a hallway, featuring a decorative lamp, bed‑side table, and art frame.",
    image: "https://plus.unsplash.com/premium_photo-1684164601278-3063c81f17dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvcm0lMjB3aXRoJTIwYmVkc2lkZSUyMHRhYmxlfGVufDB8fDB8fHww",
    price: 2630,
    location: "Hall E",
    country: "Netherlands"
  },
  {
    title: "Female‑Only Suite",
    description:
      "Two‑bed suite styled in pastel tones, desk corner, cozy bedding and wardrobe visible.",
    image: "https://images.unsplash.com/photo-1681187636275-666cb92e1e38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2ltaWxhciUyMGxheW91dCUyMHRvJTIwZmVtYWxlJTIwc3VpdGUlMkMlMjBkYXJrZXIlMjB0b25lcyUyQyUyMHN0dXJkeSUyMGRlc2tzJTIwYW5kJTIwY29tcGFjdCUyMHN0b3JhZ2UufGVufDB8fDB8fHww",
    price: 3650,
    location: "Women’s Hall",
    country: "Sweden"
  },
  {
    title: "Male‑Only Suite",
    description:
      "Dorm room with darker tones, sturdy desks and compact storage.",
    image: "https://unsplash.com/photos/a-desk-with-a-computer-monitor-keyboard-and-mouse-S4WldLOIlMQ",
    price: 1645,
    location: "Men’s Annex",
    country: "Italy"
  },
  {
    title: "Graduate Deluxe Studio",
    description:
      "Studio with plush bed, standing bookshelf, desk lamp, and ambient overhead lighting.",
    image: "https://unsplash.com/photos/a-person-sitting-on-a-bed-with-a-laptop-gceC9ixembA",
    price: 2920,
    location: "Grad Suites",
    country: "South Africa"
  },
  {
    title: "Budget Twin Shared",
    description:
      "Twin beds in tight space, small desks and basic open shelving above each bed.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFR3aW4lMjBiZWRzJTIwaW4lMjB0aWdodCUyMHNwYWNlJTJDJTIwc21hbGwlMjBkZXNrcyUyMGFuZCUyMGJhc2ljJTIwb3BlbiUyMHNoZWx2aW5nJTIwYWJvdmUlMjBlYWNoJTIwYmVkfGVufDB8fDB8fHww",
    price: 2390,
    location: "Hall E Econ",
    country: "Portugal"
  },
  {
    title: "Study Annex Suite",
    description:
      "Desk-facing bed next to vertical shelving, soft rug and framed prints overhead.",
    image: "https://unsplash.com/photos/a-bed-with-a-bunch-of-pillows-on-top-of-it-D77RlUinH6A",
    price: 1660,
    location: "Library Annex",
    country: "Singapore"
  },
  {
    title: "International Deluxe Room",
    description:
      "Decorated single room with international-themed posters, desk lamp, and potted plant.",
    image: "https://unsplash.com/photos/0ESjL-Nw22Y",
    price: 3820,
    location: "Intl Deluxe",
    country: "Malaysia"
  },
  {
    title: "Bunk‑Quad Room",
    description:
      "Four bunk beds in industrial layout, with matching desks and exposed structural beams.",
    image: "https://unsplash.com/photos/a-bedroom-with-bunk-beds-and-a-couch-ooxQsJEKqwU",
    price: 1430,
    location: "Quad Hall H",
    country: "Norway"
  },
  {
    title: "Lofted Single View",
    description:
      "Lofted bed over desk facing a window that overlooks campus lawns.",
    image: "https://unsplash.com/photos/a-woman-sitting-at-a-desk-in-front-of-a-window-0z3ZsOAYEvA",
    price: 3780,
    location: "Green Loft",
    country: "Ireland"
  },
  {
    title: "Deluxe Accessible Single",
    description:
      "Accessible single with clear pathway, desk alcove, and soft bed linens.",
    image: "https://unsplash.com/photos/silver-imac-turned-off-on-white-wooden-desk-oTJ92KUXHls",
    price: 1580,
    location: "Accessible Deluxe",
    country: "New Zealand"
  },
  {
    title: "Summer Shared Quad",
    description:
      "Summer quad room with four single beds and centralized desk area.",
    image: "https://unsplash.com/photos/a-couple-of-women-sitting-on-top-of-bunk-beds-4RKMl9A7fGw",
    price: 1410,
    location: "Summer Quad",
    country: "Denmark"
  },
  {
    title: "Graduate Premium Suite",
    description:
      "Large grad suite with kitchenette corner, study table, and lounge area.",
    image: "https://unsplash.com/photos/white-bed-pillow-on-bed-qnYbBALP4dA",
    price: 3200,
    location: "Grad Premium",
    country: "Belgium"
  },
  {
    title: "Economy Single",
    description:
      "Minimal single room with simple bed, desk, and a small nightstand lamp.",
    image: "https://unsplash.com/photos/woman-sitting-on-bed-inside-room-ET1MWsGIAYI",
    price: 880,
    location: "Hall E Budget",
    country: "Austria"
  },
  {
    title: "Coordinator Study Room",
    description:
      "Study-focused room near lounge, with desk, chair, overhead shelf, and neutral décor.",
    image: "https://unsplash.com/photos/black-laptop-computer-HHs_PrvxSQk",
    price: 1140,
    location: "Coord Annex",
    country: "Finland"
  },
  {
    title: "Visiting Scholar Single",
    description:
      "Designed for visiting scholars: bed, small desk, natural lighting and bookcase.",
    image: "https://unsplash.com/photos/empty-chair-oKHHspCSWHQ",
    price: 1080,
    location: "Guest Dorm",
    country: "Switzerland"
  },
  {
    title: "Quad Shared Same Floor",
    description:
      "Shared quad living with four desks and decorative posters on walls.",
    image: "https://unsplash.com/photos/LnFQsrOocmQ",
    price: 4420,
    location: "Quad Hall F",
    country: "Spain"
  },
  {
    title: "Loft Workspace Single",
    description:
      "Lofted sleeping platform with working desk area below and accent lighting.",
    image: "https://unsplash.com/photos/a-person-sitting-at-a-desk-writing-in-a-book-q8Ya1XqpE3w",
    price: 2730,
    location: "Loft Annex G",
    country: "Poland"
  },
  {
    title: "Budget Twin Block B",
    description:
      "Second‑block twin room with bunk-style beds and wall‑mounted shelving.",
    image: "https://unsplash.com/photos/a-woman-sitting-on-a-bunk-bed-with-a-laptop-b2kEH0cc0TM",
    price: 1595,
    location: "Hall E Block B",
    country: "Czech Republic"
  },
  {
    title: "Premium Sky Single",
    description:
      "Top‑floor room with skyline view, plush bedding, ergonomic desk, and subtle décor.",
    image: "https://unsplash.com/photos/empty-chair-oKHHspCSWHQ",
    price: 3880,
    location: "Sky Premium",
    country: "Argentina"
  }
];

module.exports = { data: sampleListings };
