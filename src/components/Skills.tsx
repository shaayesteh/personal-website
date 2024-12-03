const skills = {
  'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Material-UI', ],
  'APIs': [ 'RESTful APIs', 'GraphQL'],
  'Tools': ['Git', 'EsLint', 'Prettier', 'Biome', 'Figma'],
  'Other': ['Responsive Design', 'Performance Optimization', 'SEO', 'Accessibility', 'UX']
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}