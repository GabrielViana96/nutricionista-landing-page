import React from 'react';
import { MessageCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
          Vamos cuidar da sua saúde juntos?
        </h2>
        <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
          Dê o primeiro passo para uma vida mais leve e saudável. Entre em contato para tirar dúvidas ou agendar sua consulta presencial em Penápolis.
        </p>
        <a
          href="https://wa.me/5518999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#99967c] text-white px-8 py-4 rounded-full text-xl font-medium hover:bg-emerald-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <MessageCircle size={24} />
          Agendar consulta pelo WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaSection;