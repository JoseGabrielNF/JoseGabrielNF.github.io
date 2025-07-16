import React from 'react';
import Icon from '../atoms/Icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Sobre o Evento</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="video-container rounded-lg overflow-hidden shadow-xl relative pb-56 h-0">
              <iframe 
                src="https://www.youtube.com/watch?v=lRSIntcHIuw"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Vídeo institucional do seminário"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Tecnologia Assistiva e Educação na Era da IA
            </h3>
            <p className="text-gray-700 mb-4">
              O Seminário de Tecnologia Assistiva voltada para a Educação nos Tempos de Inteligência Artificial é um evento acadêmico que reunirá especialistas, pesquisadores, educadores e estudantes para discutir as inovações e desafios na área de tecnologia assistiva aplicada à educação inclusiva.
            </p>
            <p className="text-gray-700 mb-6">
              Durante quatro dias, serão abordados temas como políticas públicas, experiências exitosas, fundamentos da educação inclusiva e o impacto da inteligência artificial no desenvolvimento de tecnologias assistivas.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <Icon name="calendar-alt" className="text-blue-700 mr-2" />
                <span>9-12 Set 2025</span>
              </div>
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <Icon name="map-marker-alt" className="text-blue-700 mr-2" />
                <span>UFMS, Campo Grande - MS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
