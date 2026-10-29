export interface Room {
  id: string;
  name: string;
  category: 'standard' | 'deluxe' | 'executive' | 'presidential';
  price: number; // in GHc (GH₵)
  priceFormatted: string;
  capacity: string;
  bed: string;
  size: string;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  badge?: string;
}

export interface PoolPass {
  id: string;
  title: string;
  price: number;
  priceFormatted: string;
  description: string;
  access: string[];
}

export interface EventPackage {
  id: string;
  name: string;
  type: string;
  capacityRange: string;
  priceEstimate: string;
  description: string;
  features: string[];
}

export interface Amenity {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'pool' | 'events' | 'dining' | 'exterior';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  occasion: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const HOTEL_CONTACT = {
  name: 'Classic Royal Hotel',
  tagline: 'Comfort, Relaxation and Celebration in the Heart of Imota',
  address: 'Imota–Igbokuta Road, Imota, Lagos State, Nigeria',
  addressShort: 'Imota–Igbokuta Road, Imota, Lagos',
  phone: '+234 803 123 4567', // [Placeholder editable]
  phoneFormatted: '+234 803 123 4567',
  whatsappNumber: '2348031234567', // [Placeholder editable for direct WhatsApp click-to-chat]
  email: 'reservations@classicroyalhotel.com', // [Placeholder editable]
  enquiriesEmail: 'info@classicroyalhotel.com',
  checkInTime: '2:00 PM',
  checkOutTime: '12:00 PM',
  poolHours: '8:00 AM – 8:00 PM (Monday – Sunday)',
  restaurantHours: '6:30 AM – 11:00 PM Daily (24h Room Service)',
};

export const HOTEL_ROOMS: Room[] = [
  {
    id: 'room-standard',
    name: 'Classic Standard Room',
    category: 'standard',
    price: 350,
    priceFormatted: 'GH₵350',
    capacity: '2 Guests',
    bed: 'Queen Size Bed',
    size: '28 m²',
    description:
      'Warm and inviting sanctuary engineered for restful sleep. Features climate-controlled air conditioning, plush queen bedding, high-speed Wi-Fi, and 24/7 continuous generator power.',
    features: [
      'Queen-size plush orthopaedic bed',
      'Whisper-quiet split air conditioner',
      'Fast high-speed Wi-Fi',
      '43" Smart LED TV with satellite cable',
      'Sparkling modern en-suite rainfall shower',
      'Executive work desk & ergonomic chair',
      'Complimentary bottled water',
    ],
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'room-deluxe',
    name: 'Superior Deluxe Room',
    category: 'deluxe',
    price: 500,
    priceFormatted: 'GH₵500',
    capacity: '2 Guests',
    bed: 'King Size Bed',
    size: '36 m²',
    badge: 'Popular Choice',
    description:
      'Generously spaced with refined modern finishes, rich timber joinery, private lounge seating, and serene courtyard views. Perfect for corporate travellers and weekend getaways.',
    features: [
      'King-size pillowtop bed with Egyptian cotton linen',
      'High-capacity climate control AC',
      '50" 4K Smart TV with Netflix & DSTV Premium',
      'Mini-refrigerator & coffee/tea station',
      'Luxury bathroom with rainfall shower & premium toiletries',
      'Bedside universal USB & electrical charging docks',
      'Dedicated high-speed fiber Wi-Fi',
    ],
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'room-executive',
    name: 'Royal Executive Suite',
    category: 'executive',
    price: 750,
    priceFormatted: 'GH₵750',
    capacity: '2 - 3 Guests',
    bed: 'Super King Bed + Daybed',
    size: '52 m²',
    badge: 'Executive Comfort',
    description:
      'Sophisticated two-room experience combining an expansive master bedroom with a private living room and visitor powder room. Tailored for executives and discerning couples.',
    features: [
      'Separate private living lounge with velvet sofa suite',
      'Super King bed with luxury memory foam topper',
      'Two 55" Smart TVs with independent satellite channels',
      'Executive dining table and dry bar',
      'Deep soaking bathtub and walk-in rain shower',
      'Complimentary gourmet continental breakfast',
      'Priority 24h concierge and room service access',
    ],
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'room-presidential',
    name: 'Presidential Ambassador Suite',
    category: 'presidential',
    price: 1200,
    priceFormatted: 'GH₵1,200',
    capacity: '4 Guests',
    bed: 'Master Super King + En-suite Deluxe Twin',
    size: '85 m²',
    badge: 'Flagship Luxury',
    description:
      'The crown jewel of Classic Royal Hotel. An opulent grand suite with dedicated dining for six, private butler pantry, panoramic views, spa bathroom with Jacuzzi, and VIP escort.',
    features: [
      'Expansive open-plan salon with bespoke hardwood art',
      'Full 6-seater formal dining suite & wet bar',
      'En-suite master bath with deep whirlpool Jacuzzi & steam shower',
      'Private dressing room & walk-in wardrobe',
      'Complimentary airport / interstate transfer arrangement',
      'VIP swimming pool cabana reservation included',
      '24-Hour dedicated suite attendant',
    ],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
    ],
  },
];

export const POOL_PASSES: PoolPass[] = [
  {
    id: 'pass-adult',
    title: 'Adult Day Pass',
    price: 30,
    priceFormatted: 'GH₵30',
    description: 'Full day access to the sparkling main pool, changing facilities, and sun deck.',
    access: ['Standard pool access', 'Poolside lounger access', 'Clean towel service', 'Access to poolside bar ordering'],
  },
  {
    id: 'pass-child',
    title: 'Children Day Pass (Under 12)',
    price: 15,
    priceFormatted: 'GH₵15',
    description: 'Safe swimming in dedicated shallow recreation zone under certified lifeguard supervision.',
    access: ['Shallow depth area access', 'Children life vest provision', 'Must be accompanied by adult ticket holder'],
  },
  {
    id: 'pass-vip',
    title: 'VIP Poolside Cabana (Up to 4 Guests)',
    price: 100,
    priceFormatted: 'GH₵100',
    description: 'Exclusive shaded cabana daybed, dedicated bar attendant, and welcome chilled refreshments.',
    access: ['Private shaded cabana', 'Welcome tropical fruit mocktail', 'Complimentary snack platter', 'Priority towel & lounger service'],
  },
];

export const POOL_RULES = [
  'Proper and hygienic swimwear is strictly required before entering the pool.',
  'Certified professional lifeguard is stationed on pool deck during operational hours.',
  'Children under 12 years must be under the active supervision of an adult at all times.',
  'No glass containers, glassware, or outside food permitted on the pool deck for safety.',
  'Showering is mandatory before stepping into the water.',
  'Diving in shallow pool zones is strictly prohibited.',
];

export const EVENT_HALL_DATA = {
  name: 'The Classic Royal Grand Banquet & Conference Hall',
  tagline: 'Premier Celebration & Corporate Venue on Imota–Igbokuta Road',
  capacityBanquet: '500 Guests (Banquet Style with Round Tables & Stage)',
  capacityTheatre: '800 Guests (Theatre / Conference Seating)',
  rateBanquetEstimate: 'From GH₵3,500 / Day',
  rateCorporateEstimate: 'From GH₵2,500 / Half-Day',
  amenities: [
    { title: 'Continuous 24/7 Power', desc: 'Dual heavy-duty synchronized diesel generators ensure zero blackout risk.' },
    { title: 'Sub-Zero Climate Control', desc: 'Powerful standing industrial air conditioners keeping the hall pleasantly cold.' },
    { title: 'Banquet Furniture Included', desc: 'Polished gold Chiavari chairs and heavy-duty 8-seater & 10-seater round tables.' },
    { title: 'Executive Dressing Suite', desc: 'Private air-conditioned holding suite with en-suite restroom for celebrants / speakers.' },
    { title: 'Elevated Stage & Acoustics', desc: 'Spacious raised stage, podium, and engineered acoustic dampening panels.' },
    { title: 'Guarded Parking (100+ Cars)', desc: 'Spacious gated courtyard with uniformed traffic security and floodlighting.' },
  ],
  eventTypes: [
    'Wedding Receptions & Engagements',
    'Milestone Birthdays & Anniversaries',
    'Corporate Conferences & AGMs',
    'Product Launches & Exhibitions',
    'Religious Conventions & Banquets',
    'End-of-Year Corporate Galas',
    'Alumni Reunions & Dinner Dances',
  ],
};

export const HOTEL_AMENITIES: Amenity[] = [
  {
    id: 'amenity-power',
    iconName: 'Zap',
    title: '24/7 Guaranteed Power',
    description: 'Dual heavy-duty standby soundproof generators providing round-the-clock electricity without interruption.',
  },
  {
    id: 'amenity-pool',
    iconName: 'Waves',
    title: 'Sparkling Swimming Pool',
    description: 'Pristine outdoor pool with crystal-clear filtration, poolside loungers, and certified lifeguard on duty.',
  },
  {
    id: 'amenity-security',
    iconName: 'ShieldCheck',
    title: 'Round-the-Clock Security',
    description: 'Guarded perimeter, perimeter CCTV cameras, gated access control, and trained professional security personnel.',
  },
  {
    id: 'amenity-wifi',
    iconName: 'Wifi',
    title: 'High-Speed Fiber Wi-Fi',
    description: 'Complimentary enterprise-grade wireless internet accessible across all guest rooms, halls, and lounges.',
  },
  {
    id: 'amenity-dining',
    iconName: 'Utensils',
    title: 'Restaurant & Bush Bar',
    description: 'Fresh grilled catfish, authentic pepper soup, suya, continental breakfast, and chilled tropical cocktails.',
  },
  {
    id: 'amenity-parking',
    iconName: 'Car',
    title: 'Secure Gated Parking',
    description: 'Ample on-premises secured parking space accommodating over 100 guest and visitor vehicles comfortably.',
  },
  {
    id: 'amenity-ac',
    iconName: 'Wind',
    title: 'Chilled Air Conditioning',
    description: 'High-efficiency modern split inverter air conditioning in every room, suite, restaurant, and event hall.',
  },
  {
    id: 'amenity-service',
    iconName: 'BellRing',
    title: '24-Hour Room Service',
    description: 'Prompt room service and hospitable concierge assistance ready to attend to your requests at any hour.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Presidential Suite Master Bedroom',
    category: 'rooms',
    categoryLabel: 'Rooms & Suites',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    description: 'Plush bedding, warm ambient lighting, and bespoke executive furnishings.',
  },
  {
    id: 'gal-2',
    title: 'Azure Resort Swimming Pool',
    category: 'pool',
    categoryLabel: 'Swimming Pool',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    description: 'Pristine filtered waters, shaded cabanas, and sun loungers for peaceful relaxation.',
  },
  {
    id: 'gal-3',
    title: 'Grand Banquet Hall Wedding Setup',
    category: 'events',
    categoryLabel: 'Event Hall',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    description: 'Decorated round banquet tables, gold Chiavari chairs, and climate-controlled ambiance.',
  },
  {
    id: 'gal-4',
    title: 'Royal Executive Living Salon',
    category: 'rooms',
    categoryLabel: 'Rooms & Suites',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious private reception lounge with sofa suite and executive dining desk.',
  },
  {
    id: 'gal-5',
    title: 'Evening Poolside Lounge & Cocktail Bar',
    category: 'dining',
    categoryLabel: 'Lounge & Dining',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm mood lighting, chilled cocktails, Chapman, and fresh grills.',
  },
  {
    id: 'gal-6',
    title: 'Hotel Main Facade & Entrance Courtyard',
    category: 'exterior',
    categoryLabel: 'Exterior & Grounds',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description: 'Gated modern facade along Imota–Igbokuta Road with manicured tropical palms.',
  },
  {
    id: 'gal-7',
    title: 'Conference & Presentation Hall Configuration',
    category: 'events',
    categoryLabel: 'Event Hall',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious seating with podium, projector sightlines, and sound system.',
  },
  {
    id: 'gal-8',
    title: 'Luxury En-Suite Bathroom with Rain Shower',
    category: 'rooms',
    categoryLabel: 'Rooms & Suites',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    description: 'Immaculate marble tiling, oversized rainfall head, and complimentary amenities.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mrs. Folashade Adeyemi',
    role: 'Mother of the Bride',
    location: 'Lagos & London',
    rating: 5,
    comment:
      'We hosted our daughter’s 350-guest traditional wedding and reception at Classic Royal Hotel Event Hall. The cooling was exceptional despite the sunny afternoon, and the dual generators meant not a single second of blackout. The management was polite, and our guests loved their rooms!',
    date: 'February 2026',
    occasion: 'Wedding Reception',
  },
  {
    id: 'test-2',
    name: 'Engr. Babatunde Ogunleye',
    role: 'Project Director',
    location: 'Ikeja',
    rating: 5,
    comment:
      'I stayed in the Royal Executive Suite for 5 nights while overseeing an industrial facility project along the Imota corridor. The Wi-Fi was strong enough for video conferences, the bed was tremendously comfortable, and returning to a clean room with working AC every evening was priceless.',
    date: 'January 2026',
    occasion: 'Business Stay',
  },
  {
    id: 'test-3',
    name: 'Amanda & Chinedu Kalu',
    role: 'Weekend Holidaymakers',
    location: 'Victoria Island',
    rating: 5,
    comment:
      'A true hidden gem away from the city noise. We spent Saturday lounging by the pool at Classic Royal Hotel, enjoyed fresh grilled catfish at the bush bar, and slept like royalty. We will certainly be returning whenever we need a peaceful escape.',
    date: 'March 2026',
    occasion: 'Couples Getaway',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Reservations',
    question: 'What are the official check-in and check-out times?',
    answer:
      'Check-in begins at 2:00 PM and check-out is by 12:00 PM noon. Early check-in or late check-out can be requested upon booking and is accommodated subject to room availability.',
  },
  {
    id: 'faq-2',
    category: 'Payments',
    question: 'What payment methods do you accept at Classic Royal Hotel?',
    answer:
      'We accept Ghanaian Cedi (GHc / GH₵), international debit/credit cards (Mastercard, Visa), instant bank transfers, and on-site POS card machines with immediate verification.',
  },
  {
    id: 'faq-3',
    category: 'Reservations',
    question: 'What is your room cancellation and refund policy?',
    answer:
      'Reservations cancelled at least 24 hours prior to scheduled check-in receive a full 100% refund or free date rescheduling. Cancellations within 24 hours may incur a single night retention fee.',
  },
  {
    id: 'faq-4',
    category: 'Facilities',
    question: 'Is parking free and secure for overnight guests and event attendees?',
    answer:
      'Yes! We provide complimentary, guarded, on-site parking in our gated compound. The premises are under 24/7 security watch, floodlit illumination, and perimeter CCTV surveillance with capacity for over 100 vehicles.',
  },
  {
    id: 'faq-5',
    category: 'Facilities',
    question: 'Can non-hotel guests book and use the swimming pool?',
    answer:
      'Yes, the swimming pool is open to both in-house residents and day visitors. Day visitors can purchase Adult (GH₵30) or Children (GH₵15) passes, or book our exclusive VIP cabana (GH₵100) for family and friends.',
  },
  {
    id: 'faq-6',
    category: 'Events',
    question: 'How do I book the Event Hall for my wedding, party, or conference?',
    answer:
      'You can submit the event enquiry form on this website or click our direct WhatsApp button to speak with our Event Coordinator. We offer viewing appointments, date holding, and customized packages covering power, stage, and banquet tables.',
  },
  {
    id: 'faq-7',
    category: 'Policies',
    question: 'What is the policy regarding children and family accommodation?',
    answer:
      'Children aged 10 and under stay free of charge when utilizing existing bedding in their parents’ room. Extra rollaway beds or baby cots can be provided upon prior notice for a nominal token fee.',
  },
];
