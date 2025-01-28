import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Layout, Database, Globe, Shield, Zap, Cloud, Code2, Cpu, Network, Lock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions and machine learning models to automate and optimize your processes.',
      features: ['Deep Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Bot className="h-8 w-8 text-indigo-600" />,
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants powered by state-of-the-art language models.',
      features: ['Custom LLM Integration', 'Multi-language Support', 'Context Awareness', 'Sentiment Analysis'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Cpu className="h-8 w-8 text-indigo-600" />,
      title: 'AI Infrastructure',
      description: 'Robust and scalable infrastructure solutions for AI model deployment and management.',
      features: ['Model Deployment', 'Performance Optimization', 'Scaling Solutions', 'Resource Management'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <Network className="h-8 w-8 text-indigo-600" />,
      title: 'AI Integration',
      description: 'Seamless integration of AI capabilities into your existing systems and workflows.',
      features: ['API Development', 'System Integration', 'Custom Solutions', 'Workflow Automation'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business needs and objectives.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'Cloud Solutions'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Lock className="h-8 w-8 text-indigo-600" />,
      title: 'AI Security',
      description: 'Protect your AI systems and data with our comprehensive security solutions.',
      features: ['Model Security', 'Data Protection', 'Ethical AI Practices', 'Compliance'],
      gradient: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transformative
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer cutting-edge artificial intelligence solutions to transform your business and drive innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8">
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="h-1.5 w-1.5 bg-indigo-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;