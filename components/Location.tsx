import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Apple, Scale, Stethoscope, HeartPulse, UserCheck } from 'lucide-react';
const Location: React.FC = () => {
  const services = [
    {
      icon: <Apple className="w-8 h-8 text-emerald-600" />,
      title: "Individual",
      description: "1° consulta + retorno em 30 dias"
    },
    {
      icon: <Scale className="w-8 h-8 text-emerald-600" />,
      title: "Trimestral",
      description: "2 Consultas + 1 retorno"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-emerald-600" />,
      title: "Semestral",
      description: "3 Consultas + 2 retorno"
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-emerald-600" />,
      title: "Dupla",
      description: "Para fazer junto. Valor por pessoa"
    },
    
  ];

  return (
    <section id="servicos" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="text-center mb-16" >
          <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">OS planos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2">E seus investimentos</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="  group p-8 bg-stone-50 rounded-2xl hover:bg-[#ACA69D] hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100"
            >
              <div className=" p-4 rounded-xl inline-block shadow-sm group-hover:bg-emerald-50 transition-colors mb-6">
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

export default Location;