# Ras Hotel - Premium Hotel Website

A production-ready, enterprise-grade luxury hotel website built with React, Vite, and Tailwind CSS. This is a reusable **LuxuryHotelTemplate** designed for premium hotels.

## 🌟 Features

- **Modern Tech Stack**: React 18 + Vite + Tailwind CSS
- **Premium UI/UX**: Inspired by luxury hotels like Nurobe, Aman Resorts, and Marriott
- **Smooth Animations**: Framer Motion for elegant transitions
- **Fully Responsive**: Perfect on mobile, tablet, and desktop
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Optimized images and code splitting

## 📋 Pages

- **Home**: Hero slider, booking widget, about, services, rooms, testimonials
- **Rooms**: All room types with detailed descriptions
- **Room Details**: Individual room pages with image galleries
- **Restaurant**: Menu categories and dining experience
- **Conference**: Event facilities and capacity information
- **Explore Asella**: Local attractions and tourism
- **Gallery**: Image gallery with category filters and lightbox
- **About**: Hotel story, values, and team
- **Contact**: Contact form, info, and map

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors

- **Background**: #F8F7F3
- **Primary Text**: #2B2522
- **Gold Accent**: #C2A66D
- **Gray Text**: #A3A3A3
- **Border**: #ECEAE4

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Border Radius

- **Luxury Cards**: 30px (rounded-luxury)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🛠 Tech Stack

### Frontend

- **React 18.3** - UI library
- **Vite 5.2** - Build tool
- **React Router DOM 6.22** - Routing
- **Tailwind CSS 3.4** - Styling
- **Framer Motion 11** - Animations
- **Swiper.js 11** - Carousels and sliders
- **Lucide React** - Icons
- **React Query** - Data fetching (future backend)
- **Axios** - HTTP client (future backend)

## 📂 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── BookingWidget.jsx
│   │   ├── Counter.jsx
│   │   ├── FAQ.jsx
│   │   ├── PageHeader.jsx
│   │   ├── RoomCard.jsx
│   │   ├── ServiceCard.jsx
│   │   └── TestimonialCard.jsx
│   ├── constants/
│   │   └── hotelData.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Rooms.jsx
│   │   ├── RoomDetails.jsx
│   │   ├── Restaurant.jsx
│   │   ├── Conference.jsx
│   │   ├── ExploreAsella.jsx
│   │   ├── Gallery.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🔧 Customization

### Update Hotel Information

Edit `src/constants/hotelData.js` to customize:
- Hotel name and contact information
- Rooms and pricing
- Services and amenities
- Menu items
- Testimonials
- Gallery images

### Change Colors

Edit `tailwind.config.js` to update the color scheme.

### Replace Images

Update image URLs in:
- `src/constants/hotelData.js`
- Individual page components

## 📝 Key Features Explained

### Booking Widget

Floating booking widget with check-in/out dates, guest selection, and room type. Links to contact page with pre-filled data.

### Room System

Dynamic room cards with:
- Image galleries
- Pricing
- Amenities
- Capacity
- Detailed descriptions

### Animations

All animations use Framer Motion:
- Fade in on scroll
- Hover effects
- Page transitions
- Counter animations

### Responsive Navbar

- Transparent on hero section
- Solid with scroll
- Animated mobile menu
- Sticky positioning

## 🌐 Future Backend Integration

The project is ready for backend integration with:
- Node.js + Express
- MongoDB Atlas
- JWT Authentication
- Cloudinary for images
- Telegram Bot API

React Query and Axios are already included for API calls.

## 📞 Contact Information

**Ras Hotel**
- Location: Asella, Oromia, Ethiopia
- Phone: +251223312828 | +251911841145
- Email: info@rashotel.com
- Telegram: @rashotel

## 📄 License

This is a commercial template designed for Ras Hotel and can be adapted as a reusable luxury hotel template.

## 🙏 Acknowledgments

Design inspired by:
- Nurobe Hotel
- Aman Resorts
- Marriott Hotels
- Hilton
- Booking.com

---

Built with ❤️ for premium hotel experiences
