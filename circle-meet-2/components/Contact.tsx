import React from 'react';
import { ArrowSwirl } from './Doodles';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Info */}
            <div className="space-y-8 md:space-y-12">
                <div>
                    <span className="font-doodle text-lg md:text-xl text-gray-500 block mb-2" aria-hidden="true">Got questions?</span>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-ink mb-4 md:mb-6">
                        Say Hello.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 font-light max-w-md">
                        Whether you're a curious user, an enterprise looking for simplicity, or just want to say hi—we're all ears.
                    </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start gap-4 p-5 md:p-6 bg-subtle rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 ease-pop border border-transparent hover:border-gray-100 hover:scale-[1.02]">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-sm shrink-0" aria-hidden="true">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Email Us</h3>
                            <p className="text-gray-500 text-sm md:text-base">support@circlemeet.in</p>
                            <p className="text-gray-500 text-sm md:text-base">partners@circlemeet.in</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-5 md:p-6 bg-subtle rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 ease-pop border border-transparent hover:border-gray-100 hover:scale-[1.02]">
                         <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-sm shrink-0" aria-hidden="true">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Visit Us</h3>
                            <p className="text-gray-500 text-sm md:text-base">123 Innovation Dr.</p>
                            <p className="text-gray-500 text-sm md:text-base">Tech City, TC 94043</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="relative">
                <ArrowSwirl className="absolute -top-10 -right-10 w-24 h-24 text-gray-200 rotate-12 hidden md:block" />
                
                <form className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl shadow-gray-200/50 border border-gray-100 space-y-5 md:space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400">Your Name</label>
                        <input 
                            id="name"
                            type="text" 
                            className="w-full bg-subtle border-none rounded-xl px-4 py-3 md:py-4 focus:ring-2 focus:ring-black/5 outline-none transition-all duration-300 ease-pop placeholder:text-gray-400 focus:bg-white focus:shadow-sm focus:scale-[1.01]"
                            placeholder="John Doe"
                            aria-required="true"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                        <input 
                            id="email"
                            type="email" 
                            className="w-full bg-subtle border-none rounded-xl px-4 py-3 md:py-4 focus:ring-2 focus:ring-black/5 outline-none transition-all duration-300 ease-pop placeholder:text-gray-400 focus:bg-white focus:shadow-sm focus:scale-[1.01]"
                            placeholder="john@example.com"
                            aria-required="true"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                        <textarea 
                            id="message"
                            className="w-full bg-subtle border-none rounded-xl px-4 py-3 md:py-4 h-32 resize-none focus:ring-2 focus:ring-black/5 outline-none transition-all duration-300 ease-pop placeholder:text-gray-400 focus:bg-white focus:shadow-sm focus:scale-[1.01]"
                            placeholder="Tell us what's on your mind..."
                            aria-required="true"
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full py-3.5 md:py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-500 ease-pop shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-95">
                        Send Message
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;