import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-emerald-100 rounded-3xl -z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-stone-200 rounded-3xl -z-0"></div>
            <img 
              src="https://picsum.photos/id/64/800/1000" 
              alt="Nutricionista em Penápolis" 
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">Sobre mim</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2 mb-6">
              Compromisso com a sua saúde e bem-estar
            </h2>
            
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Olá! Sou a <strong>Dra. Modelo Silva</strong>, nutricionista apaixonada por transformar vidas através da alimentação.
              </p>
              <p>
                Minha formação acadêmica sólida, aliada a uma abordagem humanizada, me permite enxergar além do prato. Entendo que cada paciente traz consigo uma história, rotina e desafios únicos.
              </p>
              <p>
                Em meu consultório em Penápolis, não acredito em dietas da moda ou restrições severas. Meu foco é construir, junto com você, um caminho possível e prazeroso para alcançar seus objetivos de saúde, seja o emagrecimento, o controle de patologias ou simplesmente ter mais energia no dia a dia.
              </p>
              <p>
                Acredito que comer bem é um ato de autocuidado e respeito com o próprio corpo.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-200">
               <p className="font-semibold text-stone-800">Dra. Modelo Silva</p>
               <p className="text-emerald-600 text-sm">Nutricionista Clínica - CRN/SP 00000</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;