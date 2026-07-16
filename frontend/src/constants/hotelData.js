export const hotelInfo = {
  name: 'Soljam Hotel',
  tagline: 'Enjoy a cozy stay in Asela, Ethiopia, with warm hospitality',
  description: 'Welcome to Soljam Hotel, located centrally in Asela in front of Derartu Hotel. Discover a tranquil retreat providing cozy accommodations equipped with essential amenities for a delightful stay. Whether traveling for leisure or business, you will find the perfect balance of comfort and convenience.',
  location: 'X43J+JXQ, Infront Of Derartu Hotel, Asela, Ethiopia',
  phones: ['+251 92 280 6372', '+251 22 331 2930'],
  email: 'info@soljamhotel.com',
  telegram: '@soljamhotel',
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
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkjIzOYbPBvPjLMVXx0p1p6ynf9yI7CDSH2W01CFHYy1gysJl1dJYmlH7QeimHcN_duZlFURQR9xEwZ5ex-UQezXsinhxktAj1vMuFOTbeOnCbc9ZmhYol4Wc6t0QiWzTH0_YUSKJc6OWz_=s680-w680-h510-rw',
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
    description: 'Explore the heart of Asela, with easy access to local shops, culture, and sightseeing.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TFvH27HpsbuCchLhBkIR3pAQFlXlOFTjtRC1IvRGEg&s=10',
  },
  {
    name: 'Bale Mountains (Regional)',
    distance: '120 km',
    description: 'A great starting point for your journey to the breathtaking landscapes of the Bale Mountains.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFakiN7Zh7mgA6jL2JiDw4GwGBdfGM409e8Q1UJVhoA&s=10',
  },
]

export const testimonials = [
  {
    name: 'Dawit G.',
    role: 'Business Traveler',
    content: 'Great budget stop. The location is central and it was easy to get around Asela.',
    rating: 4,
  },
  {
    name: 'Noccio N.',
    role: 'Tourist',
    content: 'Soljam hotel is one of the best you can get in town. Good bar and restaurant.',
    rating: 4,
  },
  {
    name: 'Giacomo C.',
    role: 'Traveler',
    content: 'Very affordable prices and located right on the main road of Asela.',
    rating: 3,
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
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9le3ob-ePxz1i-6WWhMH27ylw8mtzFt4HhE3xl1rhA&s=10', title: 'Hotel Exterior', category: 'outdoor' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop', title: 'Restaurant Interior', category: 'restaurant' },
  { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop', title: 'Standard Room', category: 'rooms' },
  { url: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?q=80&w=1200&auto=format&fit=crop', title: 'Lounge Area', category: 'rooms' },
  { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop', title: 'Double Room', category: 'rooms' },
  { url: 'https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?q=80&w=1200&auto=format&fit=crop', title: 'Bathroom Details', category: 'rooms' },
]
