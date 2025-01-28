import React from 'react';
import { Code2, Layout, Database, Bot, Globe, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business needs and objectives.',
    },
    {
      icon: <Bot className="h-8 w-8 text-indigo-600" />,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions and machine learning models to automate and optimize your processes.',
    },
    {
      icon: <Layout className="h-8 w-8 text-indigo-600" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Web Development',
      description: 'Responsive and dynamic web applications built with modern technologies.',
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive security solutions.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of technology solutions to help your business succeed in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 inline-block p-4 bg-indigo-50 rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;