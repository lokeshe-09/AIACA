import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'aicraftalchemy@gmail.com',
      link: 'mailto:aicraftalchemy@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+91 7661081043',
      link: 'tel:+917661081043',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'Hyderabad, India',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-8 w-8" />,
      name: 'GitHub',
      link: 'https://github.com/aicraftalchemy',
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      name: 'LinkedIn',
      link: 'https://linkedin.com/company/aicraftalchemy',
    },
    {
      icon: <Twitter className="h-8 w-8" />,
      name: 'Twitter',
      link: 'https://twitter.com/aicraftalchemy',
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      name: 'WhatsApp',
      link: 'https://wa.me/917661081043',
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to revolutionize your business with AI? Let's discuss how we can help transform your ideas into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-4 rounded-lg hover:bg-indigo-50 transition-colors duration-200 group"
                  >
                    <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 group-hover:bg-indigo-200 transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
                      <p className="text-lg font-medium text-gray-900">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Us</h2>
              <p className="text-gray-600 mb-8">
                Follow us on social media to stay updated with our latest AI innovations and breakthroughs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-indigo-50 rounded-lg text-indigo-600 hover:bg-indigo-100 transition-all duration-200 group"
                  >
                    <div className="mr-3 group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
              <div className="space-y-3">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;