import React from 'react';
import { ZigZagUnderline, SparkleDoodle } from './Doodles';
import { Quote } from 'lucide-react';

const Stories: React.FC = () => {
  const stories = [
    {
      name: "Sarah Jenkins",
      role: "Product Manager",
      company: "RemoteFirst Inc.",
      quote: "We used to dread our standups. The tools felt clunky. Switching to Circle Meet brought a sense of calm to our mornings.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "David Chen",
      role: "Freelance Designer",
      company: "Studio D",
      quote: "Simplicity is my entire brand. I can't invite clients to a messy interface. Circle Meet feels like an extension of my studio.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Elena Rodriguez",
      role: "Professor",
      company: "Modern Arts College",
      quote: "For my virtual office hours, I needed something that didn't require my students to download an app. This is perfect.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
    },
     {
      name: "Marcus Johnson",
      role: "Tech Lead",
      company: "DevSpace",
      quote: "Video quality is non-negotiable for us. We were surprised that the browser-based tech here outperformed our native apps.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <section className="pt-24 md:pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-20">
            <span className="font-doodle text-lg md:text-xl text-gray-500 block mb-2" aria-hidden="true">Real people. Real circles.</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-ink leading-[0.9]">
                Stories from <br/> the <span className="relative inline-block">Community <ZigZagUnderline className="absolute bottom-1 left-0 w-full text-black h-2 md:h-3 opacity-60" /></span>
            </h1>
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {stories.map((story, index) => (
                <div key={index} className="break-inside-avoid bg-subtle p-6 md:p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500 ease-pop border border-transparent hover:border-stroke group hover:-translate-y-2 hover:scale-[1.01]">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-gray-300 mb-4 md:mb-6 group-hover:text-black transition-colors duration-300" aria-hidden="true" />
                    <p className="text-lg md:text-2xl font-medium leading-relaxed mb-6 md:mb-8 text-gray-800">
                        "{story.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <img 
                            src={story.image} 
                            alt={`Profile picture of ${story.name}`} 
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-pop border-2 border-white"
                        />
                        <div>
                            <h4 className="font-bold text-ink">{story.name}</h4>
                            <p className="text-sm text-gray-500">{story.role}, {story.company}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-24 text-center relative">
            <SparkleDoodle className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-10 h-10 md:w-12 md:h-12 text-black mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to write your own story?</h3>
            <button className="px-8 py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-gray-800 transition-all duration-500 ease-pop shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:scale-105 hover:-translate-y-1 active:scale-90">
                Start a Circle Now
            </button>
        </div>

      </div>
    </section>
  );
};

export default Stories;