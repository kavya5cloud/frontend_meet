import React from 'react';
import { SparkleDoodle } from './Doodles';
import { Mic, Video, Users, Zap, Heart, Coffee } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Video size={24} />,
      title: "Crystal Clear",
      desc: "HD video that adapts to your connection, not the other way around."
    },
    {
      icon: <Mic size={24} />,
      title: "Studio Sound",
      desc: "Noise suppression that actually works. Hear the voice, not the vacuum."
    },
    {
      icon: <Zap size={24} />,
      title: "Zero Lag",
      desc: "Built on a lightweight architecture for instant, snappy conversations."
    },
    {
      icon: <Users size={24} />,
      title: "Crowd Friendly",
      desc: "Whether it's 2 people or 200, the grid layout just makes sense."
    },
    {
      icon: <Heart size={24} />,
      title: "Human First",
      desc: "No hidden menus or confusing settings. Designed for eye contact."
    },
    {
      icon: <Coffee size={24} />,
      title: "Stay Awhile",
      desc: "No time limits on the free plan. Grab a coffee and hang out."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-subtle relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto relative">
                <SparkleDoodle className="hidden md:block absolute -top-10 -left-10 w-12 h-12 text-black animate-spin-slow" />
                <h2 className="text-3xl md:text-5xl font-display font-bold text-ink mb-4 md:mb-6">
                    Technology that gets out of the way.
                </h2>
                <p className="text-base md:text-lg text-gray-500">
                    We removed the clutter so you can focus on the person on the other side of the screen.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="group bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-black/10 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-black mb-4 md:mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold font-display text-ink mb-2 md:mb-3">{feature.title}</h3>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;