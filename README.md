# The Mudeer Landing Page

A high-end property management SaaS landing page built with Next.js, Tailwind CSS, and Framer Motion.

## Design System

### Colors
- **Primary (B2B - The Mudeer)**
  - Deep Navy: `#0A1628`
  - Muted Gold: `#D4AF37`

- **Secondary (B2C - Hausbuddy)**
  - Electric Teal: `#00A79D`
  - Warm Sand: `#F5F3F0`

### Typography
- **Headings:** Playfair Display (Luxury Serif)
- **Body:** Outfit / Inter (Clean Sans-serif)

### Border Radius
- Professional: `0.5rem`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles & custom CSS
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main landing page component
```

## Features

- ✅ Sticky Navbar with language switcher
- ✅ Hero section with animated elements
- ✅ Ecosystem section with infinity loop animation
- ✅ B2B section with white-label dashboard mockup
- ✅ Connection animation between sections
- ✅ B2C Hausbuddy section with phone mockups
- ✅ Trust/Social proof section
- ✅ Footer with CTA and global footprint

## Build for Production

```bash
npm run build
npm start
```
