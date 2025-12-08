import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../App';

interface NavbarProps {
  onNavigate: (page: PageView) => void;
  currentPage: PageView;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageView) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav 
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md border-b border-stroke py-3' : 'bg-transparent py-4 md:py-6'}`}
    >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            
            {/* Logo Section */}
            <button 
                onClick={() => handleNav('home')} 
                className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 group"
                aria-label="Go to homepage"
            >
                <div className="relative">
                    {/* Primary Image Logo */}
                    <img 
                        src="/logo.png" 
                        alt="Logo" 
                        className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 ease-pop group-hover:scale-110" 
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                    />
                    
                    {/* Fallback 'C' Icon (Shown if image fails) */}
                    <div className="hidden w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-lg md:rounded-xl flex items-center justify-center font-display font-bold text-lg md:text-xl shadow-lg shadow-black/10 transition-transform duration-300 ease-pop group-hover:scale-110">
                        C
                    </div>
                </div>

                {/* Brand Name */}
                <span className="font-display font-bold text-lg md:text-xl tracking-tight text-ink transition-colors duration-300 group-hover:text-gray-600">Circle Meet</span>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8" role="menubar">
                <button 
                    onClick={() => handleNav('home')} 
                    role="menuitem"
                    aria-current={currentPage === 'home' ? 'page' : undefined}
                    className={`text-sm font-medium transition-all duration-300 ease-pop relative group hover:scale-105 ${currentPage === 'home' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
                >
                    Approach
                    {currentPage === 'home' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition-all duration-300" aria-hidden="true"></span>}
                </button>
                <button 
                    onClick={() => handleNav('stories')} 
                    role="menuitem"
                    aria-current={currentPage === 'stories' ? 'page' : undefined}
                    className={`text-sm font-medium transition-all duration-300 ease-pop relative group hover:scale-105 ${currentPage === 'stories' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
                >
                    Stories
                    {currentPage === 'stories' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition-all duration-300" aria-hidden="true"></span>}
                </button>
                <button 
                    onClick={() => handleNav('contact')} 
                    role="menuitem"
                    aria-current={currentPage === 'contact' ? 'page' : undefined}
                    className={`text-sm font-medium transition-all duration-300 ease-pop relative group hover:scale-105 ${currentPage === 'contact' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
                >
                    Contact
                    {currentPage === 'contact' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition-all duration-300" aria-hidden="true"></span>}
                </button>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
                 <button className="text-sm font-bold text-ink hover:text-gray-600 transition-all duration-300 ease-pop hover:scale-105">Log In</button>
                 <button className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-bold transition-all duration-500 ease-pop shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:scale-110 active:scale-90">
                    Start a Circle
                 </button>
            </div>

            {/* Mobile Toggle */}
            <button 
                className="md:hidden text-ink p-1 transition-transform duration-300 active:scale-90" 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
            >
                {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
        </div>

         {/* Mobile Menu */}
        {menuOpen && (
            <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stroke p-6 shadow-xl animate-in slide-in-from-top-2 duration-300 ease-out">
                <div className="flex flex-col gap-4">
                    <button onClick={() => handleNav('home')} className="text-lg font-medium text-gray-800 text-left py-2 hover:translate-x-2 transition-transform duration-300">Approach</button>
                    <button onClick={() => handleNav('stories')} className="text-lg font-medium text-gray-800 text-left py-2 hover:translate-x-2 transition-transform duration-300">Stories</button>
                    <button onClick={() => handleNav('contact')} className="text-lg font-medium text-gray-800 text-left py-2 hover:translate-x-2 transition-transform duration-300">Contact</button>
                    <div className="h-px bg-gray-100 my-2" aria-hidden="true"></div>
                    <button className="w-full py-3 rounded-xl bg-gray-100 text-black font-bold active:scale-95 transition-transform duration-200">Log In</button>
                    <button className="w-full py-3 rounded-xl bg-black text-white font-bold active:scale-95 transition-transform duration-200 shadow-lg">Start Circle</button>
                </div>
            </div>
        )}
    </nav>
  );
};

export default Navbar;