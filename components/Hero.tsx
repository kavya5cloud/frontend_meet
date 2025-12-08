import React from 'react';
import MeetingCard from './MeetingCard';
import { ArrowSwirl, ZigZagUnderline, MessyCircle } from './Doodles';

const Hero: React.FC = () => {
  return (
    <section id="hero" aria-label="Introduction" className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-32 overflow-hidden bg-white">
      
      {/* Background Decor */}
      <div className="absolute top-20 right-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gray-50 rounded-full blur-3xl pointer-events-none opacity-60" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-[-10%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gray-50 rounded-full blur-3xl pointer-events-none opacity-60" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Typography Column */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in-up">
                
                <div className="inline-block relative mt-8 sm:mt-12">
                     <span className="font-doodle text-xl sm:text-2xl text-gray-500 -rotate-3 block mb-2" aria-hidden="true">Connect effortlessly...</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight text-ink leading-[0.95]">
                    Meetings for <br />
                    <span className="relative inline-block">
                        Humans.
                        <ZigZagUnderline className="absolute top-[96%] sm:top-[102%] left-0 w-full text-black h-3 sm:h-4 opacity-80" />
                    </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-500 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Strip away the corporate noise. Circle Meet brings back the simplicity of face-to-face conversation. No downloads, no fuss.
                </p>

                {/* Social Proof - Optimized for Mobile */}
                <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 flex-wrap" role="group" aria-label="Community statistics">
                     <div className="flex -space-x-2 sm:-space-x-3 items-center">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-white overflow-hidden shadow-sm">
                                <img 
                                    src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i+55}&mouth=smile&eyes=happy`} 
                                    alt={`Community member ${i}`} 
                                />
                            </div>
                        ))}
                        {/* Added pr-[1px] to visually push the text slightly left to fix the "right shifted" look */}
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-sm pr-[1px]" aria-label="Over 2000 additional members">
                            +2k
                        </div>
                     </div>
                     <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
                        Joined today
                     </div>
                </div>
            </div>

            {/* Interaction Column */}
            <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
                <div className="relative w-full max-w-sm">
                    <MessyCircle className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 w-32 h-32 sm:w-48 sm:h-48 text-gray-200 rotate-12 z-0" />
                    <ArrowSwirl className="absolute -bottom-10 -left-10 sm:-bottom-16 sm:-left-16 w-24 h-24 sm:w-32 sm:h-32 text-black/20 rotate-45 z-0" />
                    <MeetingCard />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;