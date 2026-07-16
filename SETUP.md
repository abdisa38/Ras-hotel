# Soljam Hotel - Setup Instructions

## 🚀 Quick Start Guide

Follow these steps to get the Soljam Hotel website running on your local machine.

### Prerequisites

Make sure you have the following installed:
- **Node.js** version 18 or higher
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

### Installation Steps

#### 1. Navigate to Frontend Directory

```bash
cd "Soljam-hotel-asella/frontend"
```

#### 2. Install Dependencies

This will install all required packages (React, Vite, Tailwind CSS, Framer Motion, etc.):

```bash
npm install
```

This may take 1-2 minutes depending on your internet speed.

#### 3. Start Development Server

```bash
npm run dev
```

The terminal will show:
```
VITE v5.2.8  ready in XXX ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

#### 4. Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

The website should now be running! 🎉

### Development Commands

- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`

### Troubleshooting

#### Port 3000 is already in use

If port 3000 is busy, Vite will automatically use another port (3001, 3002, etc.). Check the terminal output for the correct URL.

#### Module not found errors

Delete `node_modules` and reinstall:
```bash
rmdir /s /q node_modules
npm install
```

#### Slow installation

If npm is slow, try using a faster mirror:
```bash
npm config set registry https://registry.npmjs.org/
```

### Next Steps

1. **Customize Content**: Edit `src/constants/hotelData.js` to update hotel information
2. **Replace Images**: Update image URLs throughout the project
3. **Change Colors**: Modify `tailwind.config.js` for custom color scheme
4. **Add Real Contact Form**: Integrate with backend API or email service

### File Structure Overview

```
frontend/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   ├── constants/       # Data and configuration
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

### Building for Production

When ready to deploy:

1. Build the project:
```bash
npm run build
```

2. The production files will be in the `dist` folder

3. Deploy `dist` folder to:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - Any static hosting service

### Production Deployment Checklist

- [ ] Replace all placeholder images with real hotel photos
- [ ] Update hotel contact information in `hotelData.js`
- [ ] Set up real contact form backend
- [ ] Add Google Analytics
- [ ] Configure SEO meta tags
- [ ] Add real Google Maps location
- [ ] Test on mobile devices
- [ ] Optimize images (compress, use WebP)
- [ ] Set up SSL certificate
- [ ] Configure custom domain

### Support

For issues or questions:
- Check the README.md file
- Review the code comments
- Contact: info@soljamhotel.com

---

**Built with React + Vite + Tailwind CSS**
