const imgDSC2035 = '/gallery/DSC_2035.jpg';
const imgDSC2038 = '/gallery/DSC_2038.jpg';
const imgDSC2047 = '/gallery/DSC_2047.jpg';
const imgDSC2048 = '/gallery/DSC_2048.jpg';
const imgDSC2057 = '/gallery/DSC_2057.jpg';
const imgWhatsapp = '/gallery/whatsapp-event.jpeg';

const room101 = '/gallery/room_101.jpg';
const room102 = '/gallery/room_102.jpg';
const room103 = '/gallery/room_103.jpg';
const room104 = '/gallery/room_104.jpg';
const room201 = '/gallery/room_201.jpg';
const room202 = '/gallery/room_202.jpg';
const room203 = '/gallery/room_203.jpg';

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
  { label: "Boutique Rooms", value: 7, suffix: " Rooms", icon: "FaHotel" },
  { label: "Positive Reviews", value: 99.4, suffix: "%", icon: "FaStar" },
];

export const roomsData = [
  // Ground Floor (4 Rooms)
  {
    id: 1,
    roomNumber: "101",
    floor: "Ground Floor",
    floorId: "ground",
    name: "Garden Serenity Suite",
    category: "Garden View",
    price: "₹3,500",
    period: "per night",
    rating: 4.9,
    reviewsCount: 48,
    size: "380 sq.ft",
    capacity: "2 Guests",
    bed: "King Size Bed",
    view: "Lush Organic Garden",
    image: room101,
    description: "Peaceful ground-floor suite opening directly to manicured lawns and flowering gardens. Features handcrafted wooden furnishings, plush king bed, and morning birdsong.",
    amenities: ["Direct Garden Access", "King Size Bed", "Free Wi-Fi", "Air Conditioning", "En-suite Bath", "Room Service"],
    gallery: [
      room101,
      imgDSC2047,
      imgDSC2035
    ]
  },
  {
    id: 2,
    roomNumber: "102",
    floor: "Ground Floor",
    floorId: "ground",
    name: "Heritage Courtyard Room",
    category: "Courtyard View",
    price: "₹3,800",
    period: "per night",
    rating: 4.85,
    reviewsCount: 36,
    size: "420 sq.ft",
    capacity: "2 Adults, 1 Child",
    bed: "King Bed + Extra Bed",
    view: "Heritage Stone Courtyard",
    image: room102,
    description: "Charming ground floor retreat featuring traditional architectural accents, cool stone flooring, spacious seating area, and soothing courtyard fountain views.",
    amenities: ["Courtyard View", "Spacious Seating", "High-Speed Wi-Fi", "Smart TV", "Organic Toiletries", "Tea/Coffee Maker"],
    gallery: [
      room102,
      imgDSC2038,
      imgDSC2047
    ]
  },
  {
    id: 3,
    roomNumber: "103",
    floor: "Ground Floor",
    floorId: "ground",
    name: "Flora Deluxe Sanctuary",
    category: "Deluxe",
    price: "₹4,200",
    period: "per night",
    rating: 4.92,
    reviewsCount: 52,
    size: "450 sq.ft",
    capacity: "2-3 Adults",
    bed: "Super King Bed",
    view: "Exotic Flora & Farm Trails",
    image: room103,
    description: "Surrounded by blooming tropical plants on the ground level, this spacious sanctuary offers complete privacy, a private patio, and direct access to farm walkways.",
    amenities: ["Private Patio", "Farm Trail Access", "Air Conditioning", "Rain Shower", "Free Wi-Fi", "24h Front Desk"],
    gallery: [
      room103,
      imgDSC2057,
      imgDSC2047
    ]
  },
  {
    id: 4,
    roomNumber: "104",
    floor: "Ground Floor",
    floorId: "ground",
    name: "Poolside Comfort Suite",
    category: "Pool Access",
    price: "₹4,500",
    period: "per night",
    rating: 4.95,
    reviewsCount: 64,
    size: "480 sq.ft",
    capacity: "2-4 Guests",
    bed: "2 Queen Beds",
    view: "Swimming Pool & Palms",
    image: room104,
    description: "Step right out to the sparkling pool deck from your ground floor verandah. Perfect for families or friends looking for easy poolside leisure.",
    amenities: ["Direct Pool Access", "Dual Queen Beds", "Private Sun Deck", "Mini Fridge", "Complimentary Breakfast", "Free Wi-Fi"],
    gallery: [
      room104,
      imgDSC2047,
      imgDSC2035
    ]
  },
  // 1st Floor (3 Rooms)
  {
    id: 5,
    roomNumber: "201",
    floor: "1st Floor",
    floorId: "first",
    name: "Mountain Vista Suite",
    category: "Mountain View",
    price: "₹4,800",
    period: "per night",
    rating: 4.98,
    reviewsCount: 71,
    size: "500 sq.ft",
    capacity: "2 Adults",
    bed: "Plush King Bed",
    view: "Panoramic Mountain Peaks",
    image: room201,
    description: "Elevated first-floor suite with expansive glass windows framing misty mountain peaks. Wake up to breathtaking sunrise vistas over the hills.",
    amenities: ["Mountain Horizon View", "Private Balcony", "Air Conditioning", "Espresso Maker", "Luxury Linens", "Free Wi-Fi"],
    gallery: [
      room201,
      imgDSC2035,
      imgDSC2047
    ]
  },
  {
    id: 6,
    roomNumber: "202",
    floor: "1st Floor",
    floorId: "first",
    name: "Sky Terrace Balcony Suite",
    category: "Balcony Suite",
    price: "₹5,200",
    period: "per night",
    rating: 4.96,
    reviewsCount: 58,
    size: "520 sq.ft",
    capacity: "2-3 Adults",
    bed: "Super King Bed + Daybed",
    view: "Resort Canopy & Mountains",
    image: room202,
    description: "Perched on the first floor with a generous open-air private balcony overlooking lush resort canopies, farmlands, and mountain horizons.",
    amenities: ["Private Balcony & Seating", "Super King Bed", "Smart Android TV", "In-room Dining", "Premium Toiletries", "Free Wi-Fi"],
    gallery: [
      room202,
      imgDSC2048,
      imgDSC2047
    ]
  },
  {
    id: 7,
    roomNumber: "203",
    floor: "1st Floor",
    floorId: "first",
    name: "Royal Sunrise Panorama Suite",
    category: "Executive Suite",
    price: "₹5,800",
    period: "per night",
    rating: 5.0,
    reviewsCount: 84,
    size: "560 sq.ft",
    capacity: "2-4 Guests",
    bed: "Royal King Bed + Sofa Bed",
    view: "180° Valley & Sunrise View",
    image: room203,
    description: "Our premier first-floor corner suite offering unhindered 180-degree panoramic views of the morning sunrise, valley greenery, and mountain slopes.",
    amenities: ["180° Panoramic View", "Corner Balcony", "Separate Lounge Area", "Bathtub & Rain Shower", "Welcome Fruit Basket", "24/7 Butler Support"],
    gallery: [
      room203,
      imgDSC2047,
      imgDSC2057
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
  ]
};

export const amenitiesData = [
  {
    id: 1,
    icon: "FaWifi",
    title: "Free Wi-Fi Everywhere",
    description: "Stay connected without thinking about it. Fast, reliable Wi-Fi works throughout your room, the pool area, the gardens  everywhere you go."
  },
  {
    id: 2,
    icon: "FaSwimmingPool",
    title: "Heated Infinity Pool",
    description: "Take a dip any time of day. Our warm infinity pools blend right into the horizon perfect for a morning swim or a relaxing evening float."
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
    description: "Hungry? We've got you covered. Enjoy a sit-down meal at our restaurant or order food straight to your room good food, whenever you want it."
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
    description: "Kids will love it here. There's a safe, supervised play area with games, activities, and splash pads so little ones have a great time too."
  },
  {
    id: 7,
    icon: "FaSnowflake",
    title: "Room Climate Control",
    description: "Too warm? Too cold? No problem. Adjust the temperature in your room exactly how you like it your comfort is completely in your hands."
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
    title: "Birthday Party Hall",
    category: "Birthday",
    badge: "BIRTHDAY",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=85",
    description: "Make your birthday special in our dedicated party hall. Bright, cheerful setup with space for decorations, a cake table, music, and all your guests.",
    icon: "FaGlassCheers"
  },
  {
    id: 2,
    title: "Office Meeting Hall",
    category: "Office Meetings",
    badge: "OFFICE MEETINGS",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
    description: "A clean and professional hall for your office meetings, presentations, and team discussions. Equipped with projector, good seating, and a quiet environment.",
    icon: "FaBriefcase"
  },
  {
    id: 3,
    title: "Family Reunion Hall",
    category: "Family Reunion",
    badge: "FAMILY REUNION",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
    description: "Bring the whole family together under one roof. A spacious and comfortable hall where everyone — from kids to grandparents — can enjoy the day together.",
    icon: "FaUsers"
  },
  {
    id: 4,
    title: "Small Party Hall",
    category: "Small Events",
    badge: "SMALL EVENTS",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=85",
    description: "Planning a small celebration? Our cozy party hall is just right for intimate gatherings, get-togethers, and casual parties with close friends and family.",
    icon: "FaCocktail"
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
