import React from 'react';
import { Skull, Heart, Flame, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gothic elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-red-600 rounded-full animate-bounce opacity-50" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-red-300 rounded-full animate-pulse opacity-70" />
        
        {/* Floating skulls */}
        <div className="absolute top-20 left-10 text-red-800/30 animate-float">
          <Skull size={24} />
        </div>
        <div className="absolute bottom-32 right-16 text-red-800/20 animate-float" style={{ animationDelay: '1s' }}>
          <Skull size={32} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Gothic decorative border */}
          <div className="border-4 border-red-600/30 rounded-lg p-12 bg-black/40 backdrop-blur-sm shadow-2xl shadow-red-900/30">
            
            {/* Logo and Artist Name with gothic styling */}
            <div className="mb-12 relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Crown className="text-red-500 animate-pulse" size={40} />
              </div>
              
              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="https://rosarydelight.neocities.org/Untitled27_20221111173406.png" 
                  alt="Rosary Delight Logo" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain filter brightness-110 drop-shadow-2xl animate-pulse"
                />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-gothic font-bold mb-6 text-red-500 drop-shadow-2xl leading-tight tracking-wider">
                ROSARY
              </h1>
              <h1 className="text-6xl md:text-8xl font-gothic font-bold mb-8 text-red-400 drop-shadow-2xl leading-tight tracking-wider">
                DELIGHT
              </h1>
              
              {/* Gothic decorative line */}
              <div className="flex items-center justify-center space-x-6 text-red-400 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-red-600 flex-1 max-w-32" />
                <Skull className="text-red-500 animate-pulse" size={24} />
                <Heart className="text-red-400 animate-pulse" size={20} />
                <Skull className="text-red-500 animate-pulse" size={24} />
                <div className="h-px bg-gradient-to-l from-transparent via-red-500 to-red-600 flex-1 max-w-32" />
              </div>
            </div>

            {/* Gothic tagline */}
            <p className="text-2xl md:text-3xl text-red-200 mb-12 font-semibold tracking-wide leading-relaxed">
              <span className="text-red-400">Dark Artist</span> • <span className="text-red-300">Digital Creator</span> • <span className="text-red-400">Gothic Illustrator</span>
            </p>

            <p className="text-lg md:text-xl text-red-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              TEST TEST TEST Welcome to my realm of shadows and creativity. I craft dark, beautiful art that speaks to the soul 
              and brings your darkest fantasies to life through digital illustration.
            </p>

            {/* Gothic call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#portfolio"
                className="group bg-gradient-to-r from-red-700 to-red-900 text-red-100 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-900/50 hover:scale-105 border-2 border-red-600/50 hover:border-red-400"
              >
                <span className="flex items-center space-x-3">
                  <Flame size={24} />
                  <span>Enter My Gallery</span>
                </span>
              </a>
              <a
                href="#commissions"
                className="group border-3 border-red-500 text-red-400 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-red-500 hover:text-black hover:scale-105 hover:shadow-xl hover:shadow-red-500/30"
              >
                Commission Dark Art
              </a>
            </div>

            {/* Social preview */}
            <div className="mt-16 text-red-400">
              <p className="text-lg">Follow my dark journey:</p>
              <p className="text-red-300 font-semibold text-xl mt-2">@rosary_delight</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gothic scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-3 border-red-500 rounded-full flex justify-center bg-black/30">
          <div className="w-2 h-4 bg-red-500 rounded-full mt-3 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
