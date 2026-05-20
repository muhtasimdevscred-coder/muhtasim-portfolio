const education = [
  {
    icon: 'school',
    period: '2015 - 2019',
    degree: 'B.Sc. in Business Information',
    institution: 'Daffodil International University',
  },
  {
    icon: 'menu_book',
    period: '2010 - 2012',
    degree: 'A\u2019 Levels',
    institution: 'Scholastica Pvt. Ltd',
  },
  {
    icon: 'menu_book',
    period: '2009 - 2010',
    degree: 'O\u2019 Levels',
    institution: 'Scholastica Pvt. Ltd',
  },
];

export default function Education() {
  return (
    <section className="py-xxl max-w-container mx-auto px-gutter">
      <h2 className="text-headline-md text-on-surface mb-12">Education</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((item) => (
          <div
            key={`${item.degree}-${item.period}`}
            className="bg-surface-container rounded-2xl p-8 border border-outline-variant/20 hover:border-primary/30 transition-standard"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <div>
                <span className="text-label-md text-primary">{item.period}</span>
                <h3 className="text-headline-sm text-on-surface mt-1">
                  {item.degree}
                </h3>
                <p className="text-on-surface-variant text-body-md mt-2">
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
