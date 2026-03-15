import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const benefits = [
    "Atendimento 100% individualizado e empático",
    "Foco na saúde integral e qualidade de vida",
    "Planos alimentares práticos e saborosos",
    "Acompanhamento profissional contínuo via WhatsApp",
    "Localização acessível em Penápolis - SP",
    "Respeito às suas preferências alimentares"
  ];

  return (
    <section className="py-20 bg-[#99967C] text-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
           <div>
             <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">
               Por que escolher meu atendimento?
             </h2>
             <p className="text-black text-lg mb-8">
               A nutrição vai muito além de contar calorias. Ofereço um suporte completo para que você atinja seus objetivos com segurança e tranquilidade.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {benefits.map((benefit, index) => (
                 <div key={index} className="flex items-start gap-3">
                   <CheckCircle className="w-6 h-6 text-white shrink-0 mt-0.5" />
                   <span className="text-black">{benefit}</span>
                 </div>
               ))}
             </div>
           </div>

           <div className="relative h-64 lg:h-full min-h-[300px] bg-white/30 rounded-2xl p-8 flex items-center justify-center border border-black">
              <div className="text-center">
                <p className="text-2xl font-serif italic text-black mb-4">
                  "Que seu remédio seja seu alimento, e que seu alimento seja seu remédio."
                </p>
                <p className="text-sm uppercase tracking-widest text-black">— Hipócrates</p>
              </div>
           </div>

         </div>
       </div>
    </section>
  );
};

export default WhyChoose;