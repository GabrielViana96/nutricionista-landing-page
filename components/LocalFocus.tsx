import React from 'react';
import { MapPin } from 'lucide-react';

const LocalFocus: React.FC = () => {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
          <MapPin className="text-Black w-6 h-6 mr-2" />
          <span className="text-black font-semibold uppercase tracking-wide text-sm">Nutricionista </span>
        </div>
        <h2 className="text-3xl font-bold text-stone-800 mb-6">
          Atendimento nutricional humanizado perto de você
        </h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          Minha missão é tornar esse caminho mais
          leve, unindo conhecimento técnico, prática
          consciente e, acima de tudo, uma
          abordagem humana, baseada em trocas
          acolhedoras e cheias de essência.
        </p>
      </div>
    </section>
  );
};

export default LocalFocus;