import React from 'react';
import { Apple, Scale, Stethoscope, HeartPulse, UserCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Apple className="w-8 h-8 text-emerald-600" />,
      title: "Reeducação Alimentar",
      description: "Aprenda a fazer escolhas saudáveis com autonomia, sem dietas restritivas, melhorando sua relação com a comida."
    },
    {
      icon: <Scale className="w-8 h-8 text-emerald-600" />,
      title: "Emagrecimento Saudável",
      description: "Estratégias nutricionais personalizadas para perda de peso sustentável, respeitando seu metabolismo e rotina."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-emerald-600" />,
      title: "Nutrição Esportiva e Estética",
      description: "Manejo nutricional para controle de diabetes, hipertensão, colesterol alto e outras condições de saúde."
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-emerald-600" />,
      title: "Saúde Intestinal",
      description: "Cuidado focado no equilíbrio da microbiota intestinal, fundamental para imunidade e bem-estar geral."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-emerald-600" />,
      title: "Acompanhamento Personalizado",
      description: "Consultas detalhadas e suporte contínuo para ajustar o plano alimentar conforme sua evolução."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-[#99967C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-Black font-semibold uppercase tracking-wider text-sm">O que ofereço</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2">Áreas de Atuação</h2>
          <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-stone-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100"
            >
              <div className="bg-white p-4 rounded-xl inline-block shadow-sm group-hover:bg-emerald-50 transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;