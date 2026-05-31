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

        <a
          href="https://wa.me/1534761175?text=Hi%20Muhtasim"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 ring-1 ring-black/10 transition-transform duration-200 hover:-translate-y-1 hover:bg-[#1DA851]"
          aria-label="Chat on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.93 11.93 0 0 0 12 .02C5.37.02 .32 5.07.32 11.7c0 2.06.55 4.06 1.6 5.82L.01 24l6.7-1.72a11.64 11.64 0 0 0 5.3 1.25h.01c6.63 0 11.68-5.05 11.68-11.68 0-3.12-1.22-6.05-3.17-8.37Zm-8.51 17.08h-.01a9.53 9.53 0 0 1-4.85-1.33l-.35-.21-3.97 1.02 1.06-3.88-.23-.39A9.27 9.27 0 0 1 2.55 11.7c0-5.14 4.17-9.31 9.31-9.31 2.49 0 4.82.97 6.58 2.73a9.2 9.2 0 0 1 2.74 6.58c0 5.14-4.16 9.31-9.31 9.31Zm5.23-6.98c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.65.15-.19.29-.73.94-.9 1.14-.16.19-.32.21-.6.07-.29-.15-1.23-.45-2.35-1.45-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.32.43-.48.14-.16.19-.27.29-.45.1-.19.05-.36-.02-.51-.08-.15-.65-1.56-.89-2.14-.23-.56-.47-.49-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.27.29-1.04 1.02-1.04 2.48 0 1.45 1.07 2.86 1.22 3.06.15.19 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.24 1.36.21 1.87.13.57-.09 1.72-.7 1.97-1.37.24-.67.24-1.24.17-1.37-.08-.12-.29-.19-.61-.34Z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
