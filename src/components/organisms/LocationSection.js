import React from 'react';
import Icon from '../atoms/Icon';

const LocationSection = () => {
  const locationFeatures = [
    {
      icon: 'bus',
      title: 'Transporte Público',
      description: 'Linhas de ônibus 041, 042 e 043 param em frente à UFMS'
    },
    {
      icon: 'car',
      title: 'Estacionamento',
      description: 'Área de estacionamento disponível para participantes'
    },
    {
      icon: 'wheelchair',
      title: 'Acessibilidade',
      description: 'Local totalmente acessível com rampas, elevadores e banheiros adaptados'
    }
  ];

  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Localização</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1868.5381634444832!2d-54.614329972179476!3d-20.503097097707354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e5f458c45e0d%3A0x5a9d00bb7a360cff!2sComplexo%20Multiuso%20Dercir%20Pedro%20de%20Oliveira!5e0!3m2!1spt-BR!2sbr!4v1752631006378!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localização Multiuso UFMS"
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Auditórios Multiuso 1 e 2</h3>
            <p className="text-gray-700 mb-6">
              Universidade Federal de Mato Grosso do Sul (UFMS)<br />
              Cidade Universitária, Campo Grande - MS<br />
              CEP: 79070-900
            </p>

            <div className="space-y-6">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Icon name={feature.icon} className="text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-800 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
