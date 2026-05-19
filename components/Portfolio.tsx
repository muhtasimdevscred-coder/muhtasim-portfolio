'use client';

import Image from 'next/image';
import { useState } from 'react';

type Category = 'All' | 'Technical' | 'Content';

interface Project {
  category: string;
  filter: Exclude<Category, 'All'>;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    category: 'Technical Docs',
    filter: 'Technical',
    title: 'Enterprise Plugin Guides',
    description:
      'Developing comprehensive technical manuals for global WordPress plugins. These guides increased user adoption and significantly reduced technical support tickets.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCF1DTqZigXycNCy7eYSRuLlg_gJyiZliSD1Qdz6tJzXN0oBDeMjOH6rmwmnUcSWs_XxMEzAIRo2kineh4CCJ0SiHCWPctimzm3dGjewxwxwi4Dy7tqrAi9kOO6Z2o4flxW2E3BmTrLRIZsrqlNTWa0hCDHZR4ZZ3XnhRZ5rkDti_-RQgX4xoPd8CT4LdpJ4UCHinx6WdmTNHUUwTi2bVcJcWW9yNbwY-eup8sngL94YGf7-wMEBBGNaF0Q_k46zWiZoCKNUx-awrM',
    alt: 'Technical Documentation',
  },
  {
    category: 'Content & SEO',
    filter: 'Content',
    title: 'Strategic Content Growth',
    description:
      'Executing data-driven content marketing strategies that dominate search rankings. These articles consistently rank in the top 3 results for high-intent technical keywords.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7kE25x0_8PRA-0xOZEjjkGUYpQe9rgVwSkN-ktySZ0_7FlsMJDzLEkzWXjJ6vBW4CVZEsLqjCCwXSXC20I7L9i5QUSwQ8u7YHEmCqqj8TM5Jf1vTITpLs8fIYfjd7phVSS6o5hBfvknnweRJzDGUWKpcDiNeHf46CpCJcpkppI0E5EWsGNY7glU5SlfmfVPvWEYweegCXk26FIjdWBCe2MbdvkU4htyjboSCw8q2yyh1KOxIGzhayq_3ozR4m4tO6dsgCms94u_s',
    alt: 'Content & SEO Strategy',
  },
  {
    category: 'WordPress',
    filter: 'Technical',
    title: 'Custom Dev Showcase',
    description:
      'Building high-performance, responsive WordPress solutions for diverse industry clients. Focused on clean code, SEO-readiness, and intuitive user experiences.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGF9mN7YAsWz00IQ8hQxAc5IiDBFa1MfyJ_nN1JRj3DeVY522NVd82lNC_CH04pxAgLRa-GHBD7E4Qe0nKbWxrUWJ7KbPD5Cs0H9HVnElnR7wI0sMyrfit5VC2imW2y5cKb6X0ub2vVmoEqFrbyNSboFj0HG4W_BqcrWgqtwG6WUytahBAPvofvQr8HkYBU6WYqQm7D79MJBnitGCeJllwdlgCUdLTt_sOIN25lgfJxQACPnVXfb9nsiuPPTUR1zyGI9KznlZGpys',
    alt: 'WordPress Development',
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
              A showcase of technical precision and creative strategy.
            </p>
          </div>
          <div className="flex gap-4 p-1 bg-surface-container rounded-xl">
            {(['All', 'Technical', 'Content'] as Category[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-lg text-label-md transition-standard ${
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

        <div className="grid md:grid-cols-3 gap-8">
          {visible.map((project) => (
            <article
              key={project.title}
              className="portfolio-card group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/20 transition-standard hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-standard"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-primary text-label-md uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-headline-sm text-on-surface mt-2">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-body-md mt-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary text-label-md mt-6 group/link"
                >
                  Read More{' '}
                  <span className="material-symbols-outlined transition-standard group-hover/link:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
