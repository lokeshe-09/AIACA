import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Code2, ExternalLink, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                AICRAFTALCHEMY
              </span>
            </div>
            <p className="text-gray-400">
              Transforming ideas into digital reality through AI innovation and creative excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/aicraftalchemy" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/aicraftalchemy" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/aicraftalchemy" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://wa.me/917661081043" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/about', text: 'About' },
                { to: '/services', text: 'Services' },
                { to: '/skills', text: 'Skills' },
                { to: '/projects', text: 'Projects' },
                { to: '/contact', text: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'AI Solutions',
                'Machine Learning',
                'Computer Vision',
                'NLP',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:aicraftalchemy@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-indigo-400" />
                  aicraftalchemy@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917661081043" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-indigo-400" />
                  +91 7661081043
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-indigo-400" />
                Hyderabad, India
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              © 2024-2025 <span className="text-white">AICRAFTALCHEMY</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;