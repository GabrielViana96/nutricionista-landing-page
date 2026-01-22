import React from 'react';
import { MapPin } from 'lucide-react';

const LocalFocus: React.FC = () => {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
          <MapPin className="text-emerald-600 w-6 h-6 mr-2" />
          <span className="text-emerald-800 font-semibold uppercase tracking-wide text-sm">Nutricionista em Penápolis</span>
        </div>
        <h2 className="text-3xl font-bold text-stone-800 mb-6">
          Atendimento nutricional humanizado perto de você
        </h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          Minha missão é levar saúde e bem-estar para os moradores de <strong>Penápolis e região</strong>. 
          Acredito que a nutrição deve respeitar a sua rotina, cultura e preferências. 
          Aqui, você encontra um ambiente acolhedor e um acompanhamento baseado em ciência, 
          focado inteiramente nas suas necessidades individuais.
        </p>
      </div>
    </section>
  );
};

export default LocalFocus;