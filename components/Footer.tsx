import React from 'react';
import { Leaf, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#99967C] text-black py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-semibold text-Black">Etiene Hammacher</span>
            </div>
            <p className="text-sm">
              Nutricionista em Novo Hamburgo - RS.<br/>
              Promovendo saúde e qualidade de vida através da alimentação consciente.
            </p>
            <p className="text-sm mt-2">CRN-2: 21103D</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-black font-medium mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-emerald-500 transition-colors cursor-pointer">Início</a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScroll(e, '#servicos')} className="hover:text-emerald-500 transition-colors cursor-pointer">Serviços</a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleScroll(e, '#sobre')} className="hover:text-emerald-500 transition-colors cursor-pointer">Sobre mim</a>
              </li>
              <li>
                <a href="#localizacao" onClick={(e) => handleScroll(e, '#localizacao')} className="hover:text-emerald-500 transition-colors cursor-pointer">Localização</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-black font-medium mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-xs">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Etiene Hammacher. Todos os direitos reservados.
          </p>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;