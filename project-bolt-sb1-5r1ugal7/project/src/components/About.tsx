import React from 'react';
import { Palette, Heart, Skull, Flame, Crown, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Gothic Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <Crown className="text-red-500 mr-4" size={32} />
              <h2 className="text-5xl md:text-7xl font-gothic font-bold text-red-500 drop-shadow-lg">
                THE ARTIST
              </h2>
              <Crown className="text-red-500 ml-4" size={32} />
            </div>
            <div className="flex items-center justify-center">
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-64" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Gothic Artist Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-red-900/40 to-black p-8 rounded-lg border-4 border-red-600/30 shadow-2xl shadow-red-900/30">
                <div className="aspect-square bg-black rounded-lg overflow-hidden border-2 border-red-700/50">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Rosary Delight"
                    className="w-full h-full object-cover filter brightness-75"
                  />
                </div>
                
                {/* Gothic decorative elements */}
                <div className="absolute -top-6 -right-6 text-red-400 animate-pulse">
                  <Skull size={40} />
                </div>
                <div className="absolute -bottom-6 -left-6 text-red-500 animate-pulse">
                  <Heart size={36} />
                </div>
                <div className="absolute top-1/2 -left-4 text-red-600 animate-bounce">
                  <Flame size={28} />
                </div>
              </div>
            </div>

            {/* Gothic About Content */}
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <div className="bg-black/60 p-8 rounded-lg border-2 border-red-600/30 shadow-xl shadow-red-900/20">
                  <p className="text-xl text-red-200 leading-relaxed mb-6 font-semibold">
                    Greetings, dark souls. I am <span className="text-red-400 font-bold text-2xl font-gothic">Rosary Delight</span>, 
                    a digital artist who dwells in the shadows and finds beauty in the darkness.
                  </p>
                  
                  <p className="text-red-300 leading-relaxed mb-6 text-lg">
                    My artistic journey began in the depths of imagination, where gothic romance meets digital artistry. 
                    I specialize in creating dark, beautiful characters that embody the essence of supernatural elegance 
                    and haunting beauty.
                  </p>

                  <p className="text-red-300 leading-relaxed mb-8 text-lg">
                    Every stroke of my digital brush is infused with passion, darkness, and a touch of the macabre. 
                    I believe art should stir the soul, awaken the shadows within, and transport viewers to realms 
                    where beauty and darkness dance as one.
                  </p>
                </div>
              </div>

              {/* Gothic Skills & Interests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/60 p-6 rounded-lg border-2 border-red-600/30 shadow-lg shadow-red-900/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Palette className="text-red-400" size={24} />
                    <h3 className="font-bold text-red-400 text-xl font-gothic">Dark Arts</h3>
                  </div>
                  <ul className="text-red-300 space-y-2 font-semibold">
                    <li>• Gothic Character Design</li>
                    <li>• Dark Fantasy Illustration</li>
                    <li>• Supernatural Portraits</li>
                    <li>• Demon & Angel Art</li>
                    <li>• Vampire Aesthetics</li>
                  </ul>
                </div>

                <div className="bg-black/60 p-6 rounded-lg border-2 border-red-600/30 shadow-lg shadow-red-900/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="text-red-400" size={24} />
                    <h3 className="font-bold text-red-400 text-xl font-gothic">Tools of Darkness</h3>
                  </div>
                  <ul className="text-red-300 space-y-2 font-semibold">
                    <li>• Digital Painting</li>
                    <li>• Procreate Mastery</li>
                    <li>• Photoshop Sorcery</li>
                    <li>• Traditional Sketching</li>
                    <li>• Gothic Typography</li>
                  </ul>
                </div>
              </div>

              {/* Gothic Artist's Notes */}
              <div className="bg-gradient-to-r from-red-900/30 to-black/60 p-8 rounded-lg border-2 border-red-500/30 shadow-xl shadow-red-900/30">
                <h3 className="text-2xl font-bold text-red-400 mb-6 font-gothic flex items-center">
                  <Skull className="mr-3" size={28} />
                  From the Shadows
                </h3>
                <div className="space-y-3 text-red-300 font-semibold">
                  <p>🌙 The witching hour is when my creativity flows strongest</p>
                  <p>🦇 Gothic literature and dark romance fuel my artistic vision</p>
                  <p>⚰️ Every character I create carries a piece of my dark soul</p>
                  <p>🔥 I believe in the transformative power of dark art</p>
                  <p>💀 Beauty exists in the shadows, waiting to be discovered</p>
                  <p>🖤 My art is a gateway to the supernatural realm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;