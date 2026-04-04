import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { link } from 'fs';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Planos', href: '#planos' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header  className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#99967c] p-1 rounded-full ">
              
              <img className="h-8 w-8 text-emerald-600 rounded-full  " 
                src="../img/logo_e_nome.jpeg" 
               alt="Logo Etiene" 
               
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-stone-800 leading-tight">Etiene Hammacher</h1>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Nutricionista </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav  className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-stone-600 hover:text-emerald-600 transition-colors text-sm font-medium uppercase tracking-wide cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/551999801656" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#99967c] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg uppercase tracking-wide"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-emerald-600 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg h-screen">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-3 text-stone-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md text-base font-medium uppercase tracking-wide border-b border-stone-100"
              >
                {link.name}
              </a>
            ))}
             <a
                href="https://wa.me/5518999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-6 bg-[#99967c] text-white px-3 py-4 rounded-md text-base font-medium hover:bg-emerald-700 uppercase tracking-wide shadow-md"
              >
                Agendar pelo WhatsApp
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;