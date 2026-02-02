# The Mudeer Landing Page

A high-end property management SaaS landing page built with Next.js, Tailwind CSS, and Framer Motion. This project showcases multiple landing page designs for a luxury property management platform targeting B2B (The Mudeer) and B2C (Hausbuddy) markets.

## Project Overview

**The Mudeer** is an elite property management platform with two product lines:
- **The Mudeer (B2B)**: White-label property management dashboard for developers and asset managers
- **Hausbuddy (B2C)**: Tenant mobile app for seamless resident experience

The project includes 5 different landing page designs showcasing various visual styles and layouts.

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.3 |
| UI Library | React 18.2 |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11.18 |
| Icons | Lucide React 0.303 |
| Utilities | clsx, tailwind-merge |

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx            # Landing page selector (default)
│   │   ├── globals.css         # Global styles & CSS variables
│   │   ├── page1/page.tsx      # Luxury Gold design (dark theme)
│   │   ├── page2/page.tsx      # Editorial Navy design
│   │   ├── page3/page.tsx      # Global SaaS (dark theme)
│   │   ├── page4/page.tsx      # Professional Light theme
│   │   └── page5/page.tsx      # Royal Luxe design
│   └── lib/
│       ├── LanguageContext.tsx # React Context for i18n
│       └── translations.ts     # EN/AR/ID translations
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind theme customization
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── vercel.json                 # Vercel deployment config
```

## Design System

### Colors

**Primary (B2B - The Mudeer)**
- Deep Navy: `#0A1628`
- Muted Gold: `#D4AF37`

**Secondary (B2C - Hausbuddy)**
- Electric Teal: `#00A79D`
- Warm Sand: `#F5F3F0`

### Typography

- **Headings**: Playfair Display (Luxury Serif)
- **Body**: Outfit / Inter (Clean Sans-serif)
- **Arabic**: Noto Sans Arabic / Noto Serif Arabic

### Border Radius
- Professional: `0.5rem` (`rounded-professional`)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Available Pages

The root page (`/`) serves as a landing page selector with links to all designs:

| Page | Design Style | Theme |
|------|-------------|-------|
| `/page1` | Luxury Gold | Dark (Navy/Gold) |
| `/page2` | Editorial Navy | Dark |
| `/page3` | Global SaaS | Dark |
| `/page4` | Professional | Light (White/Slate) |
| `/page5` | Royal Luxe | Dark Gradient |

## Internationalization (i18n)

The project supports 3 languages via React Context:
- **EN** - English (default)
- **AR** - Arabic (RTL support)
- **ID** - Indonesian

Language state is managed in `LanguageContext.tsx` with translations defined in `translations.ts`.

### Usage

```tsx
import { useLanguage } from '@/lib/LanguageContext';

function MyComponent() {
  const { language, setLanguage, t } = useLanguage();
  return <h1>{t.hero.headline1}</h1>;
}
```

## Code Style Guidelines

### Component Structure

Pages are organized with section components following this pattern:

```tsx
// ============================================
// SECTION NAME
// ============================================
const SectionName = () => {
  const { t } = useLanguage(); // If translations needed
  
  return (
    <section id="section-id" className="...">
      {/* Content */}
    </section>
  );
};
```

### Styling Conventions

- Use Tailwind utility classes exclusively
- Custom CSS variables defined in `:root` for brand colors
- Animation classes defined in `globals.css`
- Glass effect: `glass-effect` class
- Gradient text: `gradient-text-gold`, `gradient-text-teal`

### Animation Patterns

Using Framer Motion with consistent patterns:

```tsx
// Entrance animation
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
>

// Hover effect
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>

// Infinite animation
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
>
```

## Key Features by Page

### Page 1 (Luxury Gold - Dark Theme)
- Sticky navbar with scroll blur effect
- Hero with animated background grid
- Infinity loop ecosystem visualization
- White-label dashboard mockup
- Phone mockups for Hausbuddy
- Trust section with icons
- Footer with CTA

### Page 4 (Professional - Light Theme)
- Clean light theme with slate colors
- Dashboard preview with animated charts
- Feature grid with hover effects
- Pricing cards with "Most Popular" highlight
- Testimonials section
- Mobile-responsive hamburger menu

## Environment Variables

Optional environment variables for deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
VERCEL_URL=your-project.vercel.app  # Auto-set by Vercel
```

## Deployment

The project is configured for **Vercel** deployment:

```json
// vercel.json
{
  "builds": [
    { "src": "next.config.js", "use": "@vercel/next" }
  ]
}
```

Build output is in `.next/` directory with static export capability.

## Image Configuration

Next.js image optimization is configured to allow external images from `placehold.co`:

```js
// next.config.js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'placehold.co',
    },
  ],
}
```

## TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- JSX set to `preserve` for Next.js
- Module resolution: `bundler`

## Security Considerations

- No sensitive data in client-side code
- Environment variables properly scoped (use `NEXT_PUBLIC_` prefix only for client-exposed vars)
- Images from trusted domains only (configured in next.config.js)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS features used: backdrop-filter, CSS Grid, Flexbox
- JavaScript: ES2020+

## Notes for AI Agents

1. **Adding new pages**: Create a new folder under `src/app/` following the App Router convention
2. **Adding translations**: Extend the `translations` object in `src/lib/translations.ts` for all 3 languages
3. **Styling**: Prefer Tailwind classes over custom CSS; use `globals.css` for animations and CSS variables only
4. **Components**: Each page is self-contained with section components defined in the same file
5. **Images**: Use placeholder images from `placehold.co` or add actual images to `public/` folder
