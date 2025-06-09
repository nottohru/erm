import React from 'react';
import { Skull, Clock, CheckCircle, DollarSign, Crown, Flame, Heart } from 'lucide-react';

const Commissions = () => {
  const commissionTypes = [
    {
      title: "Dark Portrait",
      price: "$75 - $120",
      description: "Haunting digital portrait of your character",
      features: ["High resolution artwork", "Gothic atmosphere", "Dark lighting effects", "2 revisions included"],
      popular: false,
      icon: <Skull className="text-red-400" size={32} />
    },
    {
      title: "Gothic Character Design",
      price: "$150 - $250",
      description: "Complete dark character with supernatural elements",
      features: ["Full body design", "Multiple poses", "Dark color palette", "Character backstory", "3 revisions included"],
      popular: true,
      icon: <Crown className="text-red-400" size={32} />
    },
    {
      title: "Dark Fantasy Scene",
      price: "$250 - $400",
      description: "Epic dark fantasy illustration with multiple characters",
      features: ["Complex gothic scene", "Multiple characters", "Detailed dark background", "Atmospheric effects", "Unlimited revisions"],
      popular: false,
      icon: <Flame className="text-red-400" size={32} />
    }
  ];

  const process = [
    {
      step: 1,
      title: "Dark Consultation",
      description: "Share your dark vision and reference materials",
      icon: <Heart className="text-red-400" size={28} />
    },
    {
      step: 2,
      title: "Gothic Quote",
      description: "Receive detailed quote and initial dark sketches",
      icon: <DollarSign className="text-red-400" size={28} />
    },
    {
      step: 3,
      title: "Shadow Creation",
      description: "Watch your dark art come to life with updates",
      icon: <Clock className="text-red-400" size={28} />
    },
    {
      step: 4,
      title: "Dark Delivery",
      description: "Receive your masterpiece in high resolution",
      icon: <CheckCircle className="text-red-400" size={28} />
    }
  ];

  return (
    <section id="commissions" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Gothic Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <Flame className="text-red-500 mr-4" size={32} />
            <h2 className="text-5xl md:text-7xl font-gothic font-bold text-red-500 drop-shadow-lg">
              DARK COMMISSIONS
            </h2>
            <Flame className="text-red-500 ml-4" size={32} />
          </div>
          <p className="text-red-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Let me bring your darkest visions to life. Commission custom gothic artwork that captures 
            the essence of your supernatural characters and dark fantasies.
          </p>
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-64" />
          </div>
        </div>

        {/* Gothic Commission Status */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-red-600/20 text-red-400 px-8 py-4 rounded-lg border-2 border-red-500/50 shadow-lg shadow-red-900/30">
            <CheckCircle size={24} />
            <span className="font-bold text-lg font-gothic">DARK COMMISSIONS OPEN</span>
            <Skull size={24} className="animate-pulse" />
          </div>
        </div>

        {/* Gothic Commission Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {commissionTypes.map((type, index) => (
            <div
              key={index}
              className={`relative bg-black/80 rounded-xl p-8 border-4 transition-all duration-500 hover:scale-105 ${
                type.popular 
                  ? 'border-red-500 shadow-2xl shadow-red-500/30 bg-red-900/20' 
                  : 'border-red-700/50 hover:border-red-500/70 shadow-xl shadow-red-900/20'
              }`}
            >
              {type.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-600 to-red-800 text-red-100 px-6 py-2 rounded-full text-sm font-bold border-2 border-red-400 shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="mb-4 flex justify-center">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-red-200 mb-3 font-gothic">{type.title}</h3>
                <p className="text-3xl font-bold text-red-400 mb-4">{type.price}</p>
                <p className="text-red-300 text-sm leading-relaxed">{type.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-sm text-red-300">
                    <CheckCircle className="text-red-400 flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-red-700 to-red-900 text-red-100 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 border-2 border-red-600/50 hover:border-red-400">
                Commission Dark Art
              </button>
            </div>
          ))}
        </div>

        {/* Gothic Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-red-400 mb-16 font-gothic">MY DARK PROCESS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-black/60 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 border-4 border-red-600/50 shadow-lg shadow-red-900/30">
                  {step.icon}
                </div>
                <h4 className="font-bold text-red-200 mb-3 text-lg font-gothic">{step.title}</h4>
                <p className="text-red-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gothic Terms & Info */}
        <div className="bg-black/60 rounded-xl p-10 border-4 border-red-600/30 shadow-2xl shadow-red-900/30">
          <h3 className="text-2xl font-bold text-red-400 mb-8 font-gothic flex items-center justify-center">
            <Skull className="mr-3" size={28} />
            DARK TERMS & CONDITIONS
            <Skull className="ml-3" size={28} />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-red-300">
            <div>
              <h4 className="font-bold text-red-200 mb-4 text-lg">Payment Terms</h4>
              <ul className="space-y-2">
                <li>• 50% blood pact (deposit) required to begin</li>
                <li>• Final payment upon dark completion</li>
                <li>• PayPal and Venmo accepted</li>
                <li>• No refunds once the ritual begins</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-200 mb-4 text-lg">Dark Delivery</h4>
              <ul className="space-y-2">
                <li>• 2-4 weeks for dark creation</li>
                <li>• High-resolution PNG/JPG files</li>
                <li>• Progress updates from the shadows</li>
                <li>• Commercial rights available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commissions;