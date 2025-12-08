import React from 'react';
import { Heart } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-stroke py-12 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <button 
            className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 group" 
            onClick={() => onNavigate('home')}
            aria-label="Return to homepage"
        >
            <div className="relative">
                <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
                    onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                />
                
                {/* Fallback Icon */}
                <div className="hidden w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold font-display shadow-sm">C</div>
            </div>
            
            <span className="font-bold text-lg tracking-tight font-display text-ink">Circle Meet</span>
        </button>

        <nav className="flex gap-8 text-sm font-medium text-gray-500" aria-label="Footer navigation">
            <button onClick={() => onNavigate('privacy')} className="hover:text-black transition-colors">Privacy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-black transition-colors">Terms</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-black transition-colors">Contact</button>
        </nav>

        <div className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart size={14} className="fill-black text-black" aria-label="love" /> in 2024
        </div>

      </div>
    </footer>
  );
};

export default Footer;