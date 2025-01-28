import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Cloud, Bot, Network, Shield, Cpu } from 'lucide-react';

const Skills = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      icon: <Brain className="h-8 w-8" />,
      items: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Generative AI",
        "Neural Networks",
        "Reinforcement Learning"
      ],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      category: "Core Technologies",
      icon: <Code2 className="h-8 w-8" />,
      items: [
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Hugging Face",
        "scikit-learn",
        "CUDA"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      category: "AI Applications",
      icon: <Bot className="h-8 w-8" />,
      items: [
        "Large Language Models",
        "Image Generation",
        "Speech Recognition",
        "Sentiment Analysis",
        "Object Detection",
        "Anomaly Detection"
      ],
      gradient: "from-pink-600 to-red-600"
    },
    {
      category: "Infrastructure",
      icon: <Cloud className="h-8 w-8" />,
      items: [
        "GPU Computing",
        "Distributed Training",
        "Model Deployment",
        "MLOps",
        "Vector Databases",
        "Model Optimization"
      ],
      gradient: "from-blue-600 to-indigo-600"
    }
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
            Our Technical
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We possess comprehensive expertise in cutting-edge AI technologies and applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${tech.gradient}`} />
              <div className="p-8">
                <div className={`inline-flex items-center space-x-3 mb-6 bg-gradient-to-r ${tech.gradient} p-3 rounded-lg text-white`}>
                  {tech.icon}
                  <h2 className="text-xl font-semibold">{tech.category}</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {tech.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                      className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;