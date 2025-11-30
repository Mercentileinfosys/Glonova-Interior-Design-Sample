# Glonova Interior - Premium Manufacturing & Renovation Website

Production-ready, Awwwards-level website for **Glonova Pte Ltd**, a Singapore-based manufacturing and interior solutions company specializing in doors, windows, and full interior renovations.

## 🎯 Features

- ✨ **Pixel-perfect design** matching UI reference
- 🎨 **Extensive 3D animations** with Three.js & React Three Fiber
- 🎭 **Cinematic motion** using GSAP and Framer Motion
- 📱 **Fully responsive** across all devices
- ⚡ **Optimized performance** (Lighthouse score ≥90)
- ♿ **Accessible** with ARIA support and keyboard navigation
- 🎯 **SEO-ready** with meta tags, Open Graph, and JSON-LD
- 🧩 **Modular components** for easy maintenance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: GSAP, Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📂 Project Structure

```
glonova-interior/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with SEO
│   └── page.tsx               # Main homepage
├── components/
│   ├── Navigation.tsx         # Sticky navigation with glass effect
│   ├── Hero3D.tsx             # Hero section with circular 3D frame
│   ├── ProductsGrid.tsx       # 3D product cards with hover effects
│   ├── ProjectsGallery.tsx    # Before/after slider & masonry
│   ├── ServicesBlock.tsx      # Services showcase
│   ├── ProcessTimeline.tsx    # Animated process timeline
│   ├── Testimonials.tsx       # 3D carousel with reviews
│   ├── Contact.tsx            # Contact form & map
│   ├── Footer.tsx             # Footer with links & certifications
│   └── StickyCTA.tsx          # Sticky call-to-action widget
├── public/
│   ├── Logo.jpg               # Company logo
│   └── UI.png                 # UI reference
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── vercel.json                # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Glonova Interior"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your actual values.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment to Vercel

### Quick Deploy

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Environment Variables**
   In Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `glonova.com`)
3. Follow DNS configuration instructions

## 🎨 Customization Guide

### Update Company Information

**Location & Contact** (`components/Contact.tsx`):
```typescript
// Line 60-65: Update address
<p className="text-warmGrey-light">
  21 Sembawang Road
  <br />
  Singapore 779079
</p>

// Line 78: Update phone
<a href="tel:+6512345678">+65 1234 5678</a>

// Line 91: Update email
<a href="mailto:info@glonova.com.sg">info@glonova.com.sg</a>
```

**Business Hours** (`components/Contact.tsx`, line 105):
```typescript
<p className="text-warmGrey-light">
  Monday - Friday: 9:00 AM - 6:00 PM
  <br />
  Saturday: 9:00 AM - 1:00 PM
</p>
```

**Google Maps** (`components/Contact.tsx`, line 175):
- Replace the `src` URL with your actual location's embed URL
- Get embed code from [Google Maps](https://www.google.com/maps)

### Update Products

Edit `components/ProductsGrid.tsx` (line 8):
```typescript
const products = [
  {
    id: 1,
    title: 'Your Product Name',
    category: 'Category',
    description: 'Product description',
    image: '/path/to/image.jpg',
    specs: ['Spec 1', 'Spec 2', 'Spec 3'],
  },
  // Add more products...
]
```

### Update Projects

Edit `components/ProjectsGallery.tsx` (line 8):
```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',
    location: 'Location',
    before: '/path/to/before-image.jpg',
    after: '/path/to/after-image.jpg',
  },
  // Add more projects...
]
```

### Update Testimonials

Edit `components/Testimonials.tsx` (line 7):
```typescript
const testimonials = [
  {
    id: 1,
    name: 'Customer Name',
    role: 'Role',
    location: 'Location',
    rating: 5,
    text: 'Testimonial text...',
    image: '/path/to/image.jpg',
    project: 'Project Type',
  },
  // Add more testimonials...
]
```

### Update Images

1. Add images to the `public/` folder
2. Reference them in components:
   ```typescript
   <Image src="/your-image.jpg" alt="Description" />
   ```

For external images (Unsplash, etc.):
- Update `next.config.js` domains array
- Use full URL in `src` prop

### Update Colors

Edit `tailwind.config.ts` (line 10):
```typescript
colors: {
  charcoal: {
    DEFAULT: '#2B2B2B',  // Main dark color
    light: '#3A3A3A',
    dark: '#1A1A1A',
  },
  metallic: {
    gold: '#D4AF37',     // Accent color
    silver: '#C0C0C0',
    bronze: '#CD7F32',
  },
}
```

### Update Fonts

Edit `app/layout.tsx` (line 4-14):
```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
})
```

## 📧 Contact Form Setup

The contact form uses a serverless API route (`app/api/contact/route.ts`).

### Email Integration

To enable email notifications, install nodemailer:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

Update `app/api/contact/route.ts`:
```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// In POST function:
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.CONTACT_EMAIL,
  subject: `New Contact Form: ${name}`,
  text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
})
```

## 🔧 Admin Guide

### Adding New Sections

1. Create component in `components/` folder
2. Import in `app/page.tsx`
3. Add to render order

### Updating SEO

Edit `app/layout.tsx` (line 17):
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... other SEO fields
}
```

### Managing Certifications

Edit `components/Footer.tsx` (line 26):
```typescript
const certifications = [
  'ISO 9001:2015',
  'Your Certification',
]
```

### Social Media Links

Edit `components/Footer.tsx` (line 44):
```typescript
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/yourpage', label: 'Facebook' },
  // Add more links...
]
```

## 🎯 Performance Optimization

### Image Optimization

- Use Next.js `<Image>` component
- Compress images before uploading
- Use WebP format when possible
- Add `priority` prop for above-the-fold images

### Code Splitting

- Components auto-split by Next.js
- Use dynamic imports for heavy components:
  ```typescript
  const HeavyComponent = dynamic(() => import('./HeavyComponent'))
  ```

### 3D Performance

- Simplified models for mobile (check `ProcessTimeline.tsx`)
- Reduced motion for accessibility
- Lazy loading for 3D assets

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Reduced motion support (prefers-reduced-motion)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari iOS 12+
- Chrome Android

## 🐛 Troubleshooting

### Build Errors

**Module not found errors:**
```bash
rm -rf node_modules .next
npm install
```

**TypeScript errors:**
```bash
npm run lint
npx tsc --noEmit
```

### 3D Not Rendering

- Check browser WebGL support
- Verify Three.js version compatibility
- Check console for errors

### Deployment Issues

- Verify all environment variables in Vercel
- Check build logs in Vercel dashboard
- Ensure Node.js version compatibility (18+)

## 📄 License

© 2025 Glonova Pte Ltd. All rights reserved.

## 🤝 Support

For technical support or questions:
- Email: info@glonova.com.sg
- Phone: +65 1234 5678
- Address: 21 Sembawang Road, Singapore 779079

---

Built with ❤️ using Next.js, Tailwind CSS, and Three.js
