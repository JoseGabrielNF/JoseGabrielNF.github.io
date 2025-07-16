import React from 'react';
import Card from '../atoms/Card';
import Button from '../atoms/Button';

const PartnersSection = () => {
  const partners = [
    {
      name: 'UFMS',
      logo: '/assets/logos/ufms-logo.png',
      fallbackLogo: 'https://cdn.ufms.br/logos/ufms_logo_positivo_rgb.png',
      alt: 'UFMS'
    },
    {
      name: 'APAE',
      logo: '/assets/logos/apae-logo.png',
      fallbackLogo: 'https://images.seeklogo.com/logo-png/23/1/apae-logo-png_seeklogo-233552.png',
      alt: 'APAE'
    },
    {
      name: 'AHIMSA',
      logo: '/assets/logos/ahimsa-logo.png',
      fallbackLogo: 'https://yata-apix-e0d32791-6728-4310-9335-2981e976b4d3.s3-object.locaweb.com.br/7103e3c16f5d49e7b6387d7badf7f25e.png',
      alt: 'AHIMSA'
    },
    {
      name: 'ABTECA',
      logo: '/assets/logos/abteca-logo.webp',
      fallbackLogo: 'https://abteca.org.br/assets/img/abteca_logo.webp',
      alt: 'ABTECA'
    }
  ];

  return (
    <section id="partners" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Instituições Parceiras
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Organizações que estão conosco nessa jornada pela educação inclusiva e tecnologia assistiva
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <Card key={index} variant="partner" className="p-6 flex justify-center">
              <img 
                src={partner.logo} 
                alt={partner.alt} 
                className="h-16 object-contain"
                onError={(e) => {
                  e.target.src = partner.fallbackLogo;
                }}
              />
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Exposição de Trabalhos</h3>
          <p className="text-gray-700 mb-4">
            Durante o evento, haverá espaço para exposição de banners e trabalhos das instituições parceiras. 
            Se sua organização tem interesse em participar, entre em contato conosco.
          </p>
          <Button variant="primary" size="medium">
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
