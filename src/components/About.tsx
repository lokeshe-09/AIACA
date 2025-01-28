import React from 'react';
import { Code2, Wand2, Brain } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      title: 'Technical Excellence',
      description: 'We deliver robust, scalable solutions using cutting-edge technologies and best practices.',
    },
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: 'AI Integration',
      description: 'Leveraging artificial intelligence to create smarter, more efficient solutions.',
    },
    {
      icon: <Wand2 className="h-8 w-8 text-indigo-600" />,
      title: 'Creative Innovation',
      description: 'Combining creativity with technology to deliver unique and impactful digital experiences.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About AICRAFTALCHEMY</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking technology company specializing in AI-driven solutions and creative digital experiences. Our mission is to help businesses thrive in the digital age through innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 inline-block p-4 bg-indigo-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;