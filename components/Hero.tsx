import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-container mx-auto px-gutter py-xxl grid md:grid-cols-2 items-center gap-12">
      <div className="order-2 md:order-1">
        <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
          Hi, I&apos;m Muhtasim Ahmed, Content Developer &amp;{' '}
          <span className="text-primary">Technical Writer.</span>
        </h1>
        <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
          Bridging the gap between complex web development and engaging content.
          A professional Content Writer with strong expertise in Web design,
          WordPress Development, SEO, and Digital Marketing.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/cv.pdf"
            download="Muhtasim-Ahmed-CV.pdf"
            className="flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-xl text-label-md hover:shadow-xl transition-standard"
          >
            <span className="material-symbols-outlined">download</span>
            Download CV (PDF)
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-xl text-label-md hover:bg-primary/5 transition-standard"
          >
            View Portfolio
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2 flex justify-center">
        <div className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/muhtasim-hero.jpg"
            alt="Muhtasim Ahmed"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 440px"
          />
        </div>
      </div>
    </section>
  );
}
