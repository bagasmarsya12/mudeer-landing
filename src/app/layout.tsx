import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Mudeer | Elite Property Management Platform',
  description:
    'The definitive digital ecosystem for elite developers and asset managers. Command your real estate empire with The Mudeer.',
  keywords: [
    'property management',
    'real estate',
    'SaaS',
    'white label',
    'tenant management',
    'proptech',
  ],
  authors: [{ name: 'The Mudeer' }],
  openGraph: {
    title: 'The Mudeer | Elite Property Management Platform',
    description:
      'The definitive digital ecosystem for elite developers and asset managers.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
