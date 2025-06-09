import React from 'react';
import { Heart, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/80 border-t-2 border-red-600/30 relative">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Column */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <img 
                  src="https://rosarydelight.neocities.org/Untitled27_20221111173406.png" 
                  alt="Rosary Delight Logo" 
                  className="w-10 h-10 object-contain filter brightness-110"
                />
                <h3 className="text-2xl font-bold text-red-400 font-gothic">
                  Rosary Delight
                </h3>
              </div>
              <p className="text-red-300 text-sm mb-4 leading-relaxed">
                Gothic digital artist creating dark, beautiful worlds through supernatural imagination and haunting aesthetics.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.instagram.com/rosary_delight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:rosarydelight@example.com"
                  className="text-red-400 hover:text-red-300 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-red-200 mb-4 font-gothic">Dark Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#portfolio" className="text-red-300 hover:text-red-400 transition-colors duration-200">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-red-300 hover:text-red-400 transition-colors duration-200">
                    The Artist
                  </a>
                </li>
                <li>
                  <a href="#commissions" className="text-red-300 hover:text-red-400 transition-colors duration-200">
                    Dark Commissions
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-red-300 hover:text-red-400 transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Commission Status */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-red-200 mb-4 font-gothic">Commission Status</h4>
              <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full border-2 border-red-500/30 text-sm mb-4">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                <span>Currently Open</span>
              </div>
              <p className="text-red-300 text-sm">
                Ready to bring your dark visions to life!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-red-800/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-red-400 text-sm flex items-center justify-center md:justify-start">
                  Crafted with <Heart className="text-red-500 mx-1" size={14} /> in the shadows by Rosary Delight
                </p>
                <p className="text-red-500 text-xs mt-1">
                  © 2024 Rosary Delight. All dark artwork and gothic designs are original creations.
                </p>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="group bg-black/60 hover:bg-red-600 text-red-300 hover:text-red-100 p-3 rounded-full transition-all duration-300 hover:scale-110 border-2 border-red-600/50 hover:border-red-400"
                aria-label="Back to top"
              >
                <ArrowUp size={20} className="group-hover:animate-bounce" />
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-px h-8 bg-gradient-to-b from-red-500/50 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-6 bg-gradient-to-b from-red-400/50 to-transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
