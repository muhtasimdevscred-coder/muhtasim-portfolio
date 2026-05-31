const experience = [
  {
    period: '2024 - Present',
    title: 'Content Writer | Smart Technologies BD LTD',
    description:
      'Collaborate with the Marketing & Media team to develop engaging promotional content aligned with brand strategy. Create product manuals, user guides, and training materials for WordPress plugins, themes, and other ICT products. Conduct training sessions and workshops for employees, clients, and partners on digital tools and product usage.',
  },
  {
    period: '2022 - 2024',
    title: 'Technical Article Writer | DevsCred',
    description:
      'Write clear, engaging, and technically accurate blogs on WordPress plugins, themes, and related IT topics. Develop detailed product documentation, FAQs, and user guides for plugins and themes. Collaborate with developers, designers, and product managers to translate technical features into user-friendly content.',
  },
  {
    period: '2021 - 2022',
    title: 'Computer Science Teacher | Cardiff International School',
    description:
      'Teach Computer Science concepts including basic programming, digital literacy, and problem-solving skills. Develop and implement lesson plans tailored to students\' age and skill levels. Maintain a positive and engaging learning environment.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-surface-container-low py-xxl">
      <div className="max-w-container mx-auto px-gutter">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-headline-md text-on-surface">
              Professional Experience
            </h2>
            <p className="text-body-md text-on-surface-variant mt-4 leading-relaxed">
              <span className="text-on-surface font-semibold">Muhtasim Ahmed</span>
              <br />
              <span className="text-on-surface font-medium">Content Writer</span>
              <span className="text-primary mx-2">|</span>
              <span className="text-on-surface font-medium">Technical Documentation</span>
              <span className="text-primary mx-2">|</span>
              <span className="text-on-surface font-medium">WordPress &amp; Plugin Specialist</span>
              <span className="text-primary mx-2">|</span>
              <span className="text-on-surface font-medium">SEO Strategist</span>
              <span className="text-primary mx-2">|</span>
              <span className="text-on-surface font-medium">Digital Marketing</span>
              <span className="text-primary mx-2">|</span>
              <span className="text-on-surface font-medium">5+ Years in SaaS, IT &amp; Electronics</span>
              <span className="text-primary mx-2">|</span>
              <span className="text-on-surface font-medium">Content Lead at Smart Technologies BD (SONY)</span>
              <span className="text-primary mx-2">|</span>
              <span className="text-on-surface font-medium">Ex DevsCred</span>
            </p>
          </div>

          <div className="md:w-2/3 border-l-2 border-outline-variant ml-4 md:ml-0 pl-8 space-y-12">
            {experience.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-2 w-4 h-4 bg-primary rounded-full border-4 border-surface-container-low" />
                <span className="text-label-md text-primary uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="text-headline-sm text-on-surface mt-1">
                  {item.title}
                </h3>
                <p className="text-body-md text-on-surface-variant mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
