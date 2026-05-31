import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhtasim Ahmed | Content Developer & Technical Writer',
  description:
    'Professional Content Writer with expertise in Web design, WordPress Development, SEO, and Digital Marketing. Bridging the gap between complex web development and engaging content.',
  keywords: [
    'Muhtasim Ahmed',
    'Content Developer',
    'Technical Writer',
    'WordPress',
    'SEO',
    'Digital Marketing',
  ],
  authors: [{ name: 'Muhtasim Ahmed' }],
  openGraph: {
    title: 'Muhtasim Ahmed | Content Developer & Technical Writer',
    description:
      'Bridging the gap between complex web development and engaging content.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
