import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-sm">
          
          {/* Info Side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-stone-800 mb-8">Localização</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 text-lg">Consultório</h3>
                  <p className="text-stone-600">Av. Luís Osório, 000 - Centro</p>
                  <p className="text-stone-600">Penápolis - SP, 16300-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 text-lg">Horário de Atendimento</h3>
                  <p className="text-stone-600">Segunda a Sexta: 08h às 18h</p>
                  <p className="text-stone-600 text-sm italic mt-1">*Atendimentos com hora marcada</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 text-lg">Contato</h3>
                  <p className="text-stone-600">(18) 99999-9999</p>
                  <p className="text-emerald-600 mt-2 font-medium">Disponível também online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-96 lg:h-auto bg-stone-200 w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.6874837887556!2d-50.07897852399999!3d-21.5482319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94967a5b3a373b5b%3A0x6b8b76b8b8b8b8b8!2sPen%C3%A1polis%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Penápolis"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;