const skills = [
  'WordPress Development',
  'Content Marketing',
  'Content Writing',
  'Copy and Script Writing',
  'SEO',
  'Digital Marketing',
  'AI Agent Use',
];

export default function Skills() {
  return (
    <section id="skills" className="py-xxl max-w-container mx-auto px-gutter">
      <h2 className="text-headline-md text-on-surface dark:text-white mb-12 text-center">
        Core Expertise
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-secondary-container dark:bg-white/10 text-on-secondary-container dark:text-gray-200 px-6 py-2 rounded-full text-label-md transition-standard hover:scale-105 border border-outline-variant/30 dark:border-white/15"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
