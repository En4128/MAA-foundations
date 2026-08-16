import imgDSC2035 from '../assets/DSC_2035.JPG';
import imgDSC2038 from '../assets/DSC_2038.JPG';
import imgDSC2047 from '../assets/DSC_2047.JPG';
import imgDSC2048 from '../assets/DSC_2048.JPG';
import imgDSC2057 from '../assets/DSC_2057.JPG';
import imgWhatsapp from '../assets/WhatsApp Image 2026-08-10 at 7.22.48 PM.jpeg';

export const resortInfo = {
  name: "MAA Resort",
  tagline: "Rooted in Nature. Covered in Luxury",
  shortDesc: "Set between the mountains and the Framing, MAA Resort is a quiet corner of the world where nature is breathtaking and every comfort is taken care of",
  phone: "+91 9611225842",
  displayPhone: "+91 9611225842",
  whatsappNumber: "919611225842",
  email: " maaresorts@gmail.com",
  address: "Angaalaparameshwari Temple, Munjurpattu, Kollaimedu Erikarai, Post Munjurpattu - 632 057",
  workingHours: "24/7 Butler & Front Desk Concierge Service",
};

export const statistics = [
  { label: "Happy Guests", value: 25000, suffix: "+", icon: "FaSmileBeam" },
  { label: "Years Experience", value: 18, suffix: " Yrs", icon: "FaAward" },
  { label: "Luxury Suites", value: 64, suffix: " Villas", icon: "FaHotel" },
  { label: "Positive Reviews", value: 99.4, suffix: "%", icon: "FaStar" },
];

export const roomsData = [
  {
    id: 1,
    name: "Deluxe Ocean Suite",
    category: "Deluxe",
    price: "$480",
    period: "per night",
    rating: 4.9,
    reviewsCount: 128,
    size: "650 sq.ft",
    capacity: "2 Adults",
    bed: "King Size Feather Bed",
    view: "Panoramic Oceanfront",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    description: "Immerse yourself in gentle sea breezes with floor-to-ceiling glass windows, a private sun terrace, and marble bath with ocean view.",
    amenities: ["Ocean View", "Private Terrace", "Free Wi-Fi", "Espresso Machine", "Marble Bath", "24h Butler"],
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  {
    id: 2,
    name: "Executive Horizon Villa",
    category: "Executive",
    price: "$750",
    period: "per night",
    rating: 5.0,
    reviewsCount: 94,
    size: "950 sq.ft",
    capacity: "3 Adults",
    bed: "Super King Bed",
    view: "Infinity Pool & Horizon",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    description: "Designed for executive comfort featuring a separate lounge, personal jacuzzi plunge pool, and dedicated private concierge.",
    amenities: ["Private Pool", "Living Area", "Cocktail Bar", "Walk-in Closet", "High-Speed Wi-Fi", "Airport Transfer"],
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  {
    id: 3,
    name: "Garden Sanctuary Villa",
    category: "Garden View",
    price: "$560",
    period: "per night",
    rating: 4.85,
    reviewsCount: 110,
    size: "800 sq.ft",
    capacity: "2 Adults, 1 Child",
    bed: "King Bed + Daybed",
    view: "Botanical Gardens",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
    description: "Surrounded by rare exotic flora and tranquil water streams, offering complete seclusion and an outdoor rain shower.",
    amenities: ["Outdoor Rain Shower", "Private Courtyard", "Organic Tea Bar", "Garden Lounge", "Smart Home Automation"],
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  {
    id: 4,
    name: "Poolside Royal Sanctuary",
    category: "Pool View",
    price: "$890",
    period: "per night",
    rating: 4.95,
    reviewsCount: 156,
    size: "1,100 sq.ft",
    capacity: "4 Guests",
    bed: "2 Plush King Beds",
    view: "Lagoon Pool Direct Access",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
    description: "Step straight from your private cabana deck into our turquoise lagoon pool. Features double vanity bath and complimentary champagne.",
    amenities: ["Direct Lagoon Access", "Private Sunbeds", "Champagne Service", "Spa Credits Included", "Sound System"],
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85"
    ]
  }
];

export const diningData = {
  title: "Good Food, Made with Care",
  subtitle: "DINING & RESTAURANT",
  description: "Our kitchen is built around fresh, locally grown ingredients. Every dish is prepared with attention and served with warmth — the kind of meal you'll actually remember.",
  highlights: [
    {
      name: "The Riverside Grill",
      type: "Grill & Seafood",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
      desc: "Fresh fish and grilled favourites served by the water. Simple food done really well.",
      timing: "6:00 PM – 11:00 PM"
    },
    {
      name: "The Garden Cafe",
      type: "All-Day Breakfast & Lunch",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=85",
      desc: "Fresh salads, sandwiches and hot meals made from vegetables grown right here on our farm.",
      timing: "7:00 AM – 4:00 PM"
    },
    {
      name: "The Bar & Lounge",
      type: "Drinks & Light Bites",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=85",
      desc: "A relaxed spot for a cold drink, a glass of wine, or a small plate — day or night.",
      timing: "5:00 PM – 1:00 AM"
    }
  ],
  specialties: [
    {
      title: "Grilled Fish of the Day",
      category: "Chef's Pick",
      price: "₹680",
      desc: "Fresh catch from the morning, grilled with herbs and served with rice and salad.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Farm Chicken Curry",
      category: "House Special",
      price: "₹420",
      desc: "Slow-cooked chicken in a rich, homestyle curry. Best enjoyed with fresh-baked bread.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Seasonal Fruit Dessert",
      category: "Dessert",
      price: "₹220",
      desc: "A light dessert made with whatever fruit is ripe from the farm that day.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85"
    }
  ]
};

export const amenitiesData = [
  {
    id: 1,
    icon: "FaWifi",
    title: "Free Wi-Fi Everywhere",
    description: "Stay connected without thinking about it. Fast, reliable Wi-Fi works throughout your room, the pool area, the gardens — everywhere you go."
  },
  {
    id: 2,
    icon: "FaSwimmingPool",
    title: "Heated Infinity Pool",
    description: "Take a dip any time of day. Our warm infinity pools blend right into the horizon — perfect for a morning swim or a relaxing evening float."
  },
  {
    id: 3,
    icon: "FaCar",
    title: "Valet Parking",
    description: "Pull up, hand us your keys, and walk straight in. We'll take care of your car so you can focus on enjoying your stay from the moment you arrive."
  },
  {
    id: 4,
    icon: "FaUtensils",
    title: "On-Site Restaurants",
    description: "Hungry? We've got you covered. Enjoy a sit-down meal at our restaurant or order food straight to your room — good food, whenever you want it."
  },
  {
    id: 5,
    icon: "FaTree",
    title: "Nature Walks & Gardens",
    description: "Step outside and breathe in the fresh air. Wander through 12 acres of peaceful greenery, quiet pathways, and beautiful views all around you."
  },
  {
    id: 6,
    icon: "FaChild",
    title: "Fun Zone for Kids",
    description: "Kids will love it here. There's a safe, supervised play area with games, activities, and splash pads — so little ones have a great time too."
  },
  {
    id: 7,
    icon: "FaSnowflake",
    title: "Room Climate Control",
    description: "Too warm? Too cold? No problem. Adjust the temperature in your room exactly how you like it — your comfort is completely in your hands."
  },
  {
    id: 8,
    icon: "FaConciergeBell",
    title: "24/7 Staff Assistance",
    description: "Need anything at any hour? Our team is always available. Whether it's an extra pillow, a restaurant booking, or local tips — just ask."
  }
];

export const eventsData = [
  {
    id: 1,
    title: "Royal Ocean Weddings",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
    description: "Say your vows against dramatic ocean horizons on our glass wedding pier with dedicated floral stylists and luxury catering."
  },
  {
    id: 2,
    title: "Gala Celebrations & Birthdays",
    category: "Parties",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85",
    description: "Host milestone anniversaries and grand parties with live orchestra performances, custom pyrotechnics, and bespoke menus."
  },
  {
    id: 3,
    title: "Executive Corporate Retreats",
    category: "Business",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85",
    description: "High-level board meetings in state-of-the-art amphitheaters combined with golf outings and team wellness workshops."
  },
  {
    id: 4,
    title: "Private Family Reunions",
    category: "Family Functions",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=85",
    description: "Reserve an entire villa wing for unforgettable multi-generational family reunions with private beach BBQs."
  }
];

export const galleryData = [
  {
    id: 1,
    
    category: "Resort",
    image: imgDSC2035,
    tag: "Resort Architecture",
    description: "Stunning architectural facade with warm ambient lighting, hand-carved pillars, and expansive serene courtyards.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 2,
    
    category: "Rooms",
    image: imgDSC2047,
    tag: "Luxury Interior",
    description: "Palatial room interiors crafted with opulent decor, plush bedding, and soothing warm lighting.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 3,
    
    category: "Restaurant",
    image: imgDSC2048,
    tag: "Fine Dining",
    description: "An elegant dining venue designed for unforgettable culinary experiences and private gourmet gatherings.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 4,
    
    category: "Resort",
    image: imgDSC2038,
    tag: "Grand Foyer",
    description: "Warm, welcoming heritage aesthetics blended with world-class 5-star hospitality architecture.",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 5,
    
    category: "Nature",
    image: imgDSC2057,
    tag: "Resort Landscape",
    description: "Manicured gardens, lush green surrounding foliage, and tranquil walkways across the sanctuary.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 6,
    
    category: "Events",
    image: imgWhatsapp,
    tag: "Royal Celebrations",
    description: "Picturesque event spaces ideal for royal weddings, galas, and memorable milestone celebrations.",
    aspectRatio: "aspect-[16/9]"
  }
];

export const whyChooseUsData = [
  {
    id: 1,
    icon: "FaMapMarkedAlt",
    title: "Nestled Between Farm & Mountain",
    description: "Uniquely positioned between lush green farmlands and majestic mountain ranges — wake up to misty hills and breathe the freshest air nature has to offer."
  },
  {
    id: 2,
    icon: "FaCrown",
    title: "Mountain Views From Every Room",
    description: "Every villa and room is thoughtfully oriented to frame sweeping mountain vistas, so you enjoy the grandeur of nature from the comfort of your bed."
  },
  {
    id: 3,
    icon: "FaGlassMartiniAlt",
    title: "Farm-Fresh Organic Dining",
    description: "Our kitchen is fed by the farmlands right at our doorstep — every meal is crafted from freshly harvested organic produce grown without chemicals or preservatives."
  },
  {
    id: 4,
    icon: "FaUserCheck",
    title: "Walk the Farms Yourself",
    description: "Step into the green fields and pick your own fruits, vegetables, and herbs. An immersive farm-walk experience that reconnects you with the earth."
  },
  {
    id: 5,
    icon: "FaGem",
    title: "Nature Trails & Hill Paths",
    description: "Explore guided nature trails that wind through flowering farmlands and climb gently into the scenic foothills — a walker's paradise at every season."
  },
  {
    id: 6,
    icon: "FaShieldAlt",
    title: "A True Escape From City Life",
    description: "No traffic, no noise, no pollution — only birdsong, cool mountain breeze, and the earthy scent of freshly tilled soil. Recharge completely in nature's lap."
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Victoria & Alexander Sterling",
    location: "London, United Kingdom",
    role: "Honeymoon Guests",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85",
    rating: 5,
    quote: "MAA Foundations redefined our idea of luxury. The overwater honeymoon villa with private butler service was beyond perfection. From champagne sunset cruises to Michelin dining, every moment felt magical."
  },
  {
    id: 2,
    name: "Dr. Jonathan Hayes",
    location: "Zurich, Switzerland",
    role: "Regular Executive Guest",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85",
    rating: 5,
    quote: "As someone who travels 200 days a year for business, MAA Foundations is my absolute favorite retreat. The tranquility, privacy, and impeccable attention to detail are simply unmatched in Europe and Asia."
  },
  {
    id: 3,
    name: "Sophia & Marcus Vance",
    location: "New York, USA",
    role: "Family Vacationers",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=85",
    rating: 5,
    quote: "Traveling with children can be demanding, but the Kids Oasis and private butler made our stay effortless! We enjoyed quiet romantic dinners while our kids had the time of their lives."
  },
  {
    id: 4,
    name: "Elena Rostova",
    location: "Milan, Italy",
    role: "Wellness Retreat",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=85",
    rating: 5,
    quote: "The spa therapies using organic botanical oils and thermal baths transformed my health. I left feeling completely reborn. We are already booking our return trip for winter!"
  }
];

export const faqData = [
  {
    question: "Do you provide family-friendly rooms and suites?",
    answer: "Yes, absolutely! Our Presidential Family Estate and Poolside Royal Suites are specifically designed with multiple bedrooms, child safety amenities, interconnecting spaces, and direct access to our Kids Splash Club."
  },
  {
    question: "Is valet parking and airport transfer available?",
    answer: "Complimentary luxury valet parking is available for all guests. We also provide chauffeured Tesla & Range Rover airport transfers, as well as private certified helipad landings upon request."
  },
  {
    question: "Is high-speed Wi-Fi included throughout the property?",
    answer: "Yes, ultra-high-speed Wi-Fi 6 is available completely free of charge across all guest villas, private sun decks, infinity pools, and dining pavilions."
  },
  {
    question: "What is your policy on outside food and dietary preferences?",
    answer: "To maintain hygiene and safety, outside prepared meals are not permitted. However, our 4 signature master chefs cater to all custom dietary requests including Halal, Kosher, Vegan, Gluten-Free, and Keto cuisines."
  },
  {
    question: "What are the standard check-in and check-out times?",
    answer: "Standard check-in is at 3:00 PM and check-out is at 12:00 PM. Flexible early check-in and late check-out options are complimentary subject to villa availability for direct bookings."
  }
];
