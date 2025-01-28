import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Github, Bot, FileSearch, Leaf, Twitter, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Interaction Hub',
      description: 'Advanced AI platform featuring natural conversations, image generation, and website analysis capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      tags: ['LLMs', 'Computer Vision', 'Web Analysis'],
      features: [
        'Natural Language Understanding',
        'DALL-E Integration',
        'Website Content Analysis',
        'Real-time Responses',
      ],
      icon: <Bot className="h-6 w-6" />,
    },
    {
      title: 'DeepFake Guardian',
      description: 'Cutting-edge deep learning system for detecting and analyzing artificially generated images.',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=800&q=80',
      tags: ['Deep Learning', 'Image Analysis', 'Security'],
      features: [
        'CNN Architecture',
        'Real-time Detection',
        'High Accuracy Rate',
        'Multiple Model Support',
      ],
      icon: <FileSearch className="h-6 w-6" />,
    },
    {
      title: 'PlantCare AI',
      description: 'AI-powered system for detecting plant diseases and providing treatment recommendations.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80',
      tags: ['Computer Vision', 'Agriculture', 'ML'],
      features: [
        'Disease Classification',
        'Treatment Suggestions',
        'Plant Species Detection',
        'Mobile Integration',
      ],
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      title: 'TweetSense AI',
      description: 'Deep learning system for distinguishing between human and bot-generated content on Twitter.',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80',
      tags: ['NLP', 'Social Media', 'Classification'],
      features: [
        'Pattern Recognition',
        'Sentiment Analysis',
        'Bot Behavior Detection',
        'Real-time Processing',
      ],
      icon: <Twitter className="h-6 w-6" />,
    },
    {
      title: 'DocChat AI',
      description: 'Advanced document interaction system using RAG and large language models.',
      image: 'https://images.unsplash.com/photo-1456953180671-730de08edaa7?auto=format&fit=crop&w=800&q=80',
      tags: ['RAG', 'LLM', 'Document Analysis'],
      features: [
        'PDF Processing',
        'Contextual Responses',
        'Multi-document Support',
        'Semantic Search',
      ],
      icon: <FileText className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Innovative AI Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our groundbreaking AI projects that are pushing the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                      {project.icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-600">
                      <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
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

export default Projects;