const experience = [
  {
    period: '2024 - Present',
    title: 'Content Writer & Digital Marketing Executive | Smart Technologies BD LTD',
    description:
      'Develop and execute digital marketing strategies to enhance brand visibility, customer engagement, and online presence across multiple digital platforms. Manage social media content planning, campaign execution, and promotional activities aligned with brand objectives and marketing goals. Create compelling marketing copies, product descriptions, promotional content, website content, and digital communication materials to support sales and brand growth. Conduct market research and analyze customer behavior, trends, and competitor activities to optimize marketing campaigns. Collaborate with the marketing, sales, and creative teams to develop effective digital campaigns, product launches, and brand storytelling initiatives. Manage SEO-focused content creation and optimization to improve website visibility and organic reach. Support e-commerce marketing activities through product content management, online promotions, and conversion-focused content strategies. Monitor digital campaign performance using analytics insights and recommend improvements to increase engagement and business outcomes.',
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
              <span className="text-on-surface font-medium">Content Writer & Digital Marketing Executive</span>
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
