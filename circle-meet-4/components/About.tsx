import React from 'react';
import { CrownDoodle } from './Doodles';

const About: React.FC = () => {
    return (
        <section id="approach" className="py-20 md:py-32 bg-white text-ink relative overflow-hidden">
             <div className="max-w-4xl mx-auto px-6 relative z-10">
                 <div className="text-center space-y-10 md:space-y-12">
                     <div className="relative inline-block">
                        <CrownDoodle className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 text-black" />
                        <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                            "The best interface is <br/> no interface."
                        </h2>
                     </div>
                     
                     <div className="space-y-6 text-lg md:text-2xl font-light leading-relaxed text-gray-800">
                        <p>
                            We grew tired of "Enterprise Solutions" that felt like piloting a spaceship. 
                        </p>
                        <p>
                            <span className="font-bold bg-black text-white px-2 py-1 rounded mx-1">Circle Meet</span> is our love letter to simplicity. 
                            It's a digital living room. It's black and white because life is colorful enough. 
                        </p>
                        <p>
                            It's not about the features we added. It's about the friction we removed.
                        </p>
                     </div>

                     <div className="pt-12 md:pt-16">
                         <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">The Circle Team</p>
                         
                         <div className="flex justify-center items-center -space-x-3 md:-space-x-4">
                            {/* Team Avatars */}
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="relative w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-white bg-white shadow-md hover:-translate-y-2 transition-transform duration-300 z-0 hover:z-10 group cursor-pointer">
                                    <img 
                                        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i * 123}&mouth=smile,twinkle,tongue&eyes=happy,default&eyebrows=default,raisedExcited&clothingColor=3c4f76,262e33,65c9ff,ff5d5d&skinColor=f8d25c,ffdfbf`} 
                                        alt={`Circle Team Member ${i}`} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-white bg-black text-white flex items-center justify-center text-[10px] md:text-xs font-bold z-10 shadow-md cursor-pointer hover:bg-gray-800 transition-colors" aria-label="12 more team members">
                                +12
                            </div>
                         </div>
                         <p className="font-doodle text-lg md:text-xl mt-4 text-gray-500">Built by humans, for humans.</p>
                     </div>
                 </div>
             </div>
        </section>
    )
}

export default About;