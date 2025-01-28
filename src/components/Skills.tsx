import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go'],
      color: 'indigo',
    },
    {
      category: 'Web Technologies',
      items: ['React', 'Node.js', 'Vue.js', 'Angular', 'Next.js', 'GraphQL'],
      color: 'blue',
    },
    {
      category: 'AI & ML',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Computer Vision', 'NLP'],
      color: 'purple',
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      color: 'green',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We possess a wide range of technical skills and expertise to deliver exceptional solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className={`text-xl font-semibold text-${skillGroup.color}-600 mb-6`}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 bg-${skillGroup.color}-50 text-${skillGroup.color}-600 rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;