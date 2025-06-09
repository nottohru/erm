import React, { useState } from 'react';
import { Mail, Instagram, MessageCircle, Send, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/rosary_delight",
      color: "hover:text-pink-400"
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:rosarydelight@example.com",
      color: "hover:text-purple-400"
    },
    {
      name: "Discord",
      icon: <MessageCircle size={24} />,
      url: "#",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Have an idea you'd like to bring to life? I'd love to hear from you and discuss your creative vision.
          </p>
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent w-32" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="text-purple-400 mr-3" size={24} />
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="commission">Commission Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors duration-200 resize-vertical"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-gray-800/50 rounded-xl p-8 border border-pink-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Heart className="text-pink-400 mr-3" size={24} />
                  Let's connect!
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I'm always excited to work on new creative projects and collaborate with fellow artists and creative minds.
                  </p>
                  <p>
                    Whether you're looking for custom artwork, character design, or just want to chat about art, 
                    don't hesitate to reach out!
                  </p>
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                    <p className="text-sm">
                      <strong className="text-purple-400">Response Time:</strong> I typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-6">Follow My Journey</h3>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-purple-400 transition-all duration-200 ${social.color}`}
                    >
                      {social.icon}
                      <div>
                        <span className="font-semibold">{social.name}</span>
                        {social.name === 'Instagram' && (
                          <p className="text-sm text-gray-400">@rosary_delight</p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Fun Note */}
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20 text-center">
                <p className="text-gray-300 italic">
                  "Every great artwork starts with a conversation. Let's create something magical together!"
                </p>
                <p className="text-purple-400 mt-2 font-semibold">- Rosary Delight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;