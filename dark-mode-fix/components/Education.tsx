const education = [
  {
    icon: 'school',
    period: '2015 - 2019',
    degree: 'BSc in Business Information',
    institution: 'University of Greenwich',
  },
  {
    icon: 'menu_book',
    period: 'High School',
    degree: 'A/O Levels',
    institution: 'Scholastica',
  },
];

export default function Education() {
  return (
    <section className="py-xxl max-w-container mx-auto px-gutter">
      <h2 className="text-headline-md text-on-surface dark:text-white mb-12">Education</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((item) => (
          <div
            key={item.degree}
            className="bg-surface-container dark:bg-[#1a2238] rounded-2xl p-8 border border-outline-variant/20 dark:border-white/10 hover:border-primary/30 dark:hover:border-inverse-primary/40 transition-standard"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-primary/10 dark:bg-inverse-primary/15 rounded-xl flex items-center justify-center text-primary dark:text-inverse-primary shrink-0">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <div>
                <span className="text-label-md text-primary dark:text-inverse-primary">
                  {item.period}
                </span>
                <h3 className="text-headline-sm text-on-surface dark:text-white mt-1">
                  {item.degree}
                </h3>
                <p className="text-on-surface-variant dark:text-gray-300 text-body-md mt-2">
                  {item.institution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
