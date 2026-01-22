import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section id="home" className="relative pt-20 lg:pt-0 min-h-[90vh] flex items-center bg-stone-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/431/1920/1080" 
          alt="Alimentação saudável e equilíbrio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-stone-900/40 lg:from-white/90 lg:via-white/70 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6 tracking-wide">
            Atendimento em Penápolis - SP
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white lg:text-stone-800 leading-tight mb-6">
            Nutrição personalizada para mais <span className="text-emerald-500 lg:text-emerald-600">saúde e equilíbrio</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 lg:text-stone-600 mb-8 leading-relaxed">
            Acompanhamento nutricional individualizado, com foco em resultados reais, sustentáveis e sem radicalismos. Redescubra o prazer de comer bem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5518999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agendar consulta
              <ArrowRight size={20} />
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleScroll(e, '#sobre')}
              className="flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium border-2 border-white lg:border-emerald-600 text-white lg:text-emerald-600 hover:bg-white/10 lg:hover:bg-emerald-50 transition-colors cursor-pointer"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;