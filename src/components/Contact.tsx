import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Contact us to discuss how we can help transform your ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-6">
                  Feel free to reach out to us through any of these channels. We're always excited to hear about new projects and opportunities.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:contact@aicraftalchemy.com"
                  className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  <Mail className="h-6 w-6 mr-3" />
                  contact@aicraftalchemy.com
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  <Github className="h-6 w-6 mr-3" />
                  github.com/aicraftalchemy
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6 mr-3" />
                  linkedin.com/company/aicraftalchemy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;