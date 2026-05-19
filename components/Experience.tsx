const experience = [
  {
    period: '2024 - Present',
    title: 'Content Writer | Smart Technologies BD LTD',
    description:
      'Crafting promotional content, high-accuracy product manuals, and detailed user guides for WordPress plugins. Ensuring all documentation meets enterprise-grade standards for clarity and usability.',
  },
  {
    period: '2021 - 2024',
    title: 'Technical Article Writer | DevsCred',
    description:
      'Published comprehensive blogs on WordPress development, created extensive technical documentation, and structured user-centric FAQs to reduce support overhead and improve UX.',
  },
  {
    period: '2021 - 2024',
    title: 'Computer Science Teacher | Cardiff International School',
    description:
      'Leading curriculum development and Computer Science instruction. Translating complex theoretical concepts into practical, engaging lessons for the next generation of technologists.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-surface-container-low py-xxl">
      <div className="max-w-container mx-auto px-gutter">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-headline-md text-on-surface sticky top-32">
              Professional Experience
            </h2>
            <p className="text-on-surface-variant mt-4 text-body-md">
              My career path reflects a deep commitment to technical clarity and
              educational excellence.
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
