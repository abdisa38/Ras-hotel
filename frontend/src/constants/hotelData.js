export const hotelInfo = {
  name: 'Asella Ras Hotel and Resort',
  tagline: 'Experience Comfort and Luxury in the Heart of Asella',
  description: 'Welcome to Asella Ras Hotel and Resort, where comfort, elegance, and exceptional hospitality come together.',
  location: 'Asela, Ethiopia',
  phones: ['091 120 1027', '+251223311089', '0987335353', '022381665', '022381920'],
  email: 'info@rashotel.com',
  telegram: '@rashotel',
  coordinates: { lat: 7.9539, lng: 39.1353 },
}

export const stats = [
  { number: 4.3, label: 'Google Rating', suffix: '/5' },
  { number: 14, label: 'Rooms', suffix: '' },
  { number: 24, label: 'Hour Security', suffix: '/7' },
  { number: 100, label: 'Family Friendly', suffix: '%' },
]

export const services = [
  { icon: 'Utensils', title: 'Restaurant & Bar', description: 'Enjoy our à la carte restaurant with traditional cuisine and a great bar lounge.' },
  { icon: 'Car', title: 'Secure Parking', description: 'Safe on-site parking for all our guests.' },
  { icon: 'Wind', title: 'Air Conditioning', description: 'Climate-controlled rooms for your comfort.' },
  { icon: 'ShieldCheck', title: '24/7 Security', description: 'Round-the-clock security and key card access.' },
  { icon: 'Tv', title: 'Flatscreen TVs', description: 'In-room entertainment available in all rooms.' },
  { icon: 'Coffee', title: 'Breakfast Available', description: 'Start your day right with our continental breakfast options.' },
  { icon: 'Briefcase', title: 'Workspace', description: 'In-room desks perfect for business travelers.' },
  { icon: 'ConciergeBell', title: 'Room Service', description: 'Convenient room service available upon request.' },
  { icon: 'Droplets', title: 'Private Bathrooms', description: 'En-suite private bathrooms in all our accommodations.' },
  { icon: 'Wifi', title: 'Free WiFi', description: 'Stay connected during your visit to Asela.' },
]

export const rooms = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    price: 1500,
    capacity: 1,
    size: '18 sqm',
    description: 'A cozy standard room featuring a comfortable bed, flat-screen TV, desk, and a private bathroom. Perfect for solo travelers on a budget.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
    amenities: ['Single Bed', 'Desk', 'Private Bathroom', 'Flatscreen TV', 'Free WiFi', 'Room Service'],
    featured: true,
  },
  {
    id: 'double-room',
    name: 'Double Room',
    price: 2500,
    capacity: 2,
    size: '22 sqm',
    description: 'Ideal for couples or friends, our Double Room offers comfortable bedding, air conditioning, and a safe for your belongings.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    amenities: ['Double Bed', 'Air Conditioning', 'Safe', 'Private Bathroom', 'Flatscreen TV', 'Room Service'],
    featured: true,
  },
  {
    id: 'boutique-suite',
    name: 'Boutique Suite',
    price: 3500,
    capacity: 3,
    size: '35 sqm',
    description: 'Experience premium comfort in our Boutique Suite. Enjoy extra space, key card access, top-tier amenities, and a relaxing ambiance.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
    amenities: ['King Size Bed', 'Air Conditioning', 'Key Card Access', 'Private Bathroom', 'Flatscreen TV', 'Room Service', 'Safe'],
    featured: true,
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    price: 4500,
    capacity: 4,
    size: '48 sqm',
    description: 'Our most prestigious luxury suite featuring an elegant living salon, king master bedroom, panoramic mountain views, and VIP hospitality services.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    amenities: ['King Size Bed', 'Living Salon', 'Mountain View', 'Key Card Access', 'Flatscreen TV', 'Room Service', 'Free WiFi'],
    featured: true,
  },
]

export const menuCategories = [
  {
    title: 'Traditional Ethiopian Specialties',
    description: 'Authentic Ethiopian dishes and local culinary favorites',
    items: [
      { name: 'Doro Wot', description: 'Traditional chicken stew with berbere spice', price: 350 },
      { name: 'Kitfo', description: 'Ethiopian steak tartare with spiced butter', price: 400 },
      { name: 'Tibs', description: 'Sautéed meat with vegetables and spices', price: 380 },
      { name: 'Chumbo', description: 'Regional Oromo culinary specialty', price: 300 },
    ],
  },
  {
    title: 'Beverages & Bar',
    description: 'Drinks served at our popular lounge',
    items: [
      { name: 'Fresh Mango Juice', description: 'Locally sourced mango juice', price: 100 },
      { name: 'Ethiopian Coffee', description: 'Traditional coffee ceremony', price: 80 },
      { name: 'Local Beer', description: 'Served cold at our bar', price: 90 },
      { name: 'Soft Drinks', description: 'Assorted sodas and beverages', price: 50 },
    ],
  },
  {
    title: 'Breakfast',
    description: 'Start your day with our breakfast options',
    items: [
      { name: 'Continental Breakfast', description: 'Bread, eggs, fruits, coffee/tea', price: 250 },
      { name: 'Ethiopian Breakfast', description: 'Ful, scrambled eggs, bread, tea', price: 200 },
      { name: 'Chechebsa', description: 'Traditional shredded flatbread with spices', price: 180 },
    ],
  },
]

export const conferenceFeatures = [
  { icon: 'ShieldCheck', title: '24/7 Security', description: 'Secure environment for your peace of mind' },
  { icon: 'Car', title: 'Ample Parking', description: 'Convenient parking on-site' },
  { icon: 'Wifi', title: 'Internet Access', description: 'Stay connected' },
  { icon: 'Coffee', title: 'Lounge Area', description: 'Relaxing spaces to unwind' },
]

export const attractions = [
  {
    name: 'Asela City Center',
    distance: 'Nearby',
    description: 'Explore the heart of Asela, with easy access to local shops, bustling open markets, culture, and sightseeing.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Mount Chilalo & Peaks',
    distance: '15 km',
    description: 'An iconic volcanic mountain standing at 4,036 meters with pine forests, hiking trails, and sweeping views of the Rift Valley.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Bale Mountains (Regional)',
    distance: '120 km',
    description: 'A great starting point for your journey to the breathtaking wildlife and Afro-alpine landscapes of the Bale Mountains.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop',
  },
]

export const testimonials = [
  {
    name: 'Gashaw Demissie Tulema',
    role: 'Guest from Addis Ababa',
    rating: 5,
    text: 'በጣም ደስ የሚል ቆይታ ነበረን! ግቢው ሰፊ እና ንፁህ ነው፣ ክፍሎቹ ዘመናዊና ምቹ ናቸው። — Excellent 4-night stay! The resort compound is tranquil and spacious, rooms are sparkling clean with fast WiFi and great hospitality.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Ababu Getachew',
    role: 'Traveler & Local Explorer',
    rating: 5,
    text: 'ከክፍላችን መስኮት የጭላሎ ተራራ እና የሪፍት ቫሊ አስደናቂ እይታ ይታያል! የጠዋት አየሩ ንፁህ ነው፣ ቡናቸውም ልዩ ነው። — The view over Mount Chilalo and the Rift Valley is breathtaking. Pure fresh highland air and authentic hospitality!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Daniel Dechasa',
    role: 'Local Guide & Business Guest',
    rating: 5,
    text: 'በአሰላ ከተማ ውስጥ ምርጥ ሆቴል! የደንበኞች አያያዝ፣ የ24 ሰዓት ሙቅ ውሃ፣ አስተማማኝ ኢንተርኔት እና ተመጣጣኝ ዋጋ አለው። — Outstanding service, 24/7 hot water, fast WiFi, cozy ambiance, and fair pricing. Top choice in Asella! ⭐⭐⭐⭐⭐',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Hiwot Tadesse',
    role: 'Event Organizer',
    rating: 5,
    text: 'የምግብ ጥራቱ፣ ንፅህናው እና የአስተናጋጆቹ ቅልጥፍና እጅግ አስደስቶናል። ባህላዊ ምግቦቻቸው በተለይ ክትፎ እና ዶሮ ወጥ በጣም ይጣፍጣል። — The conference hall and restaurant service were top notch. Delicious authentic cuisine with genuine Ethiopian warmth.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
]

export const faqs = [
  {
    question: 'What time is check-in and check-out?',
    answer: 'Check-in time is from 2:00 PM, and check-out is until 12:00 PM.',
  },
  {
    question: 'Do you offer airport transportation?',
    answer: 'We do not offer direct airport transportation, but our front desk can help arrange local taxis.',
  },
  {
    question: 'Is breakfast included in the room rate?',
    answer: 'Yes, a complimentary breakfast is included for all our guests.',
  },
  {
    question: 'Do you have parking facilities?',
    answer: 'Yes, we provide free and secure on-site parking for all guests.',
  },
]

export const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop', title: 'Hotel Front View', category: 'outdoor' },
  { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop', title: 'Garden & Compound', category: 'outdoor' },
  { url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop', title: 'Resort Terrace', category: 'outdoor' },
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop', title: 'Main Restaurant', category: 'restaurant' },
  { url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1200&auto=format&fit=crop', title: 'Fine Dining Area', category: 'restaurant' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop', title: 'Bar & Coffee Lounge', category: 'restaurant' },
  { url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop', title: 'Standard Room', category: 'rooms' },
  { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop', title: 'Double Luxury Room', category: 'rooms' },
  { url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop', title: 'Boutique Suite', category: 'rooms' },
  { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop', title: 'Executive Suite', category: 'rooms' },
  { url: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?q=80&w=1200&auto=format&fit=crop', title: 'Lounge Sitting Area', category: 'rooms' },
  { url: 'https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?q=80&w=1200&auto=format&fit=crop', title: 'Modern Bathroom', category: 'rooms' },
]
