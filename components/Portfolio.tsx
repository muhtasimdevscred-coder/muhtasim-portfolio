'use client';

import Image from 'next/image';
import { useState } from 'react';

type Category = 'All' | 'Blog Articles' | 'WordPress Plugin' | 'Personal';

interface Project {
  category: string;
  filter: Exclude<Category, 'All'>;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

const projects: Project[] = [
  {
    category: 'Sony Smart BD',
    filter: 'Blog Articles',
    title: 'Smart TV Buying Guide 2025: Buy Genuine',
    description:
      'Comprehensive buyer\u2019s guide on choosing a smart TV in 2025\u2014covering 8K resolution, AI features, HDR, smart home integration, and the importance of buying authentic from authorized retailers.',
    image:
      'https://www.sonysmart.com.bd/public/uploads/all/VTQBjNZP7Wf0067HMttMnB7jnsIG3IaEC5ODTkDF.jpg',
    alt: 'Smart TV Buying Guide 2025',
    href: 'https://sonysmart.com.bd/blog/title-smart-tv-buying-guide-2025-buy-genuine-',
  },
  {
    category: 'Sony Smart BD',
    filter: 'Blog Articles',
    title: 'G5 Matters: Authentic Smart TV Makes the Difference',
    description:
      'Explains Sony Smart\u2019s G5 philosophy\u2014Genuine Product, Service, Price, Care, and Passion\u2014and why authenticity matters when buying a Smart TV in Bangladesh.',
    image:
      'https://www.sonysmart.com.bd/public/uploads/all/qaKk4SMup9ARxyjWkgvX3xO2J0vmW3NZnaUSVwlX.gif',
    alt: 'G5 Matters: Authentic Smart TV',
    href: 'https://sonysmart.com.bd/blog/g5-matters-authentic-smart-tv-makes-the-difference',
  },
  {
    category: 'Exclusive Addons',
    filter: 'Blog Articles',
    title: 'How to Design Black Friday Landing Pages with Exclusive Addons',
    description:
      'Step-by-step tutorial walking through Elementor + Exclusive Addons templates to build a high-converting Black Friday landing page in minutes\u2014no code required.',
    image:
      'https://exclusiveaddons.com/wp-content/uploads/2022/11/Black-Friday-template-blog-1050x591.jpg',
    alt: 'Black Friday Landing Page tutorial',
    href: 'https://exclusiveaddons.com/tutorial-for-making-black-friday-landing-page/',
  },
  {
    category: 'Exclusive Addons',
    filter: 'Blog Articles',
    title: 'Best Black Friday Deals 2021',
    description:
      'Curated roundup of the best Black Friday deals on WordPress plugins, themes, hosting, SEO tools, and digital products for marketers and developers.',
    image:
      'https://exclusiveaddons.com/wp-content/uploads/2021/11/blog-Black-Friday-Deals-1-1050x591.jpg',
    alt: 'Best Black Friday Deals 2021',
    href: 'https://exclusiveaddons.com/best-black-friday-deals-2021/',
  },
  {
    category: 'Exclusive Addons',
    filter: 'Blog Articles',
    title: 'Free Gutenberg WooCommerce Blocks \u2014 ShopCred',
    description:
      'In-depth product review of ShopCred\u2014a free Gutenberg WooCommerce blocks plugin\u2014covering its features, Product Grid, Carousel, Quick View, and how it helps eCommerce stores improve conversion.',
    image:
      'https://exclusiveaddons.com/wp-content/uploads/2023/01/Free-Gutenberg-Woo-commerce-Blocks-1050x591.png',
    alt: 'ShopCred Free Gutenberg WooCommerce Blocks',
    href: 'https://exclusiveaddons.com/free-gutenberg-woocommerce-blocks-shopcred-your-best-solution/',
  },
  {
    category: 'Exclusive Addons',
    filter: 'Blog Articles',
    title: 'Elevate Your Web Design with Elementor Glassmorphism Effect',
    description:
      'Tutorial on creating the trendy frosted-glass UI effect on WordPress sites using Elementor and Exclusive Addons\u2014with code-free steps and use-case examples.',
    image:
      'https://exclusiveaddons.com/wp-content/uploads/2022/01/Blog-Glassmorphism-1-1050x591.jpg',
    alt: 'Elementor Glassmorphism Effect',
    href: 'https://exclusiveaddons.com/how-to-create-elementor-glassmorphism-effect/',
  },
  {
    category: 'WordPress.org Plugin',
    filter: 'WordPress Plugin',
    title: 'ShopCred \u2014 WooCommerce Builder',
    description:
      'Content & documentation contribution to ShopCred, a published WordPress plugin (4.5\u2605, 50+ active installations) bringing Gutenberg WooCommerce blocks: Product Grid, Carousel, Quick View, Pagination, and more.',
    image:
      'https://ps.w.org/shopcred/assets/banner-1544x500.png?rev=2830511',
    alt: 'ShopCred WordPress Plugin',
    href: 'https://wordpress.org/plugins/shopcred/',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<Category>('All');

  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.filter === filter);

  return (
    <section id="portfolio" className="py-xxl bg-surface-container-highest/30">
      <div className="max-w-container mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-headline-md text-on-surface">Selected Works</h2>
            <p className="text-on-surface-variant text-body-md mt-2">
              A showcase of published articles, technical documentation, and
              WordPress plugin contributions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 p-1 bg-surface-container rounded-xl">
            {(
              ['All', 'Blog Articles', 'WordPress Plugin', 'Personal'] as Category[]
            ).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg text-label-md transition-standard ${
                  filter === tab
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-variant'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-12 text-center">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">
              edit_note
            </span>
            <h3 className="text-headline-sm text-on-surface mb-2">Coming soon</h3>
            <p className="text-body-md text-on-surface-variant max-w-md mx-auto">
              Personal writings will appear here. Stay tuned.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/20 transition-standard hover:shadow-2xl hover:-translate-y-2 block"
              >
                <div className="aspect-video overflow-hidden relative bg-surface-container">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-standard"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-label-md uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-headline-sm text-on-surface mt-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-body-md mt-4 line-clamp-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-label-md mt-6">
                    Read More{' '}
                    <span className="material-symbols-outlined transition-standard group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
