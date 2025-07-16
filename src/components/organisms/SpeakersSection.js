import React from 'react';
import SpeakerCard from '../molecules/SpeakerCard';
import Button from '../atoms/Button';

const SpeakersSection = () => {
  const speakers = [
    {
      name: 'Profa Dra. Camila Celeste Brandão Itavo',
      title: 'Reitora',
      institution: 'UFMS',
      description: 'Responsável pela abertura oficial do seminário, apresentando a visão da UFMS sobre tecnologia assistiva e educação inclusiva.',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      name: 'Profa Dra Linamara Batistela',
      title: 'Professora',
      institution: 'USP',
      description: 'Palestra de abertura sobre "Tecnologia Assistiva no Mundo", trazendo uma visão global das inovações e tendências na área.',
      image: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
      name: 'Profa Dra Sonia da Costa',
      title: 'Diretora',
      institution: 'MCTI',
      description: 'Abordará as "Políticas Públicas e CAPTA", discutindo o papel do governo no desenvolvimento e implementação de tecnologias assistivas.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      name: 'Profa Dra Shirley Maia',
      title: 'Diretora',
      institution: 'AHIMSA',
      description: 'Palestra sobre "Deficiências Múltiplas e a Surdocegueira: Um panorama nacional", compartilhando experiências e desafios na área.',
      image: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    {
      name: 'Prof. Dr. Guilherme Lira',
      title: 'Presidente',
      institution: 'ABTECA',
      description: 'Especialista em tecnologia assistiva, participará de diversas atividades durante o evento.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Profa Dra Kelly Assunção Colares',
      title: 'Coordenadora Pedagógica',
      institution: 'APAE-DF',
      description: 'Apresentará experiências exitosas desenvolvidas com alunos com deficiência intelectual.',
      image: 'https://randomuser.me/api/portraits/women/42.jpg'
    },
    {
      name: 'Prof. Dr. João Ricardo Figueiredo',
      title: 'Diretor',
      institution: 'IBC',
      description: 'Conduzirá oficina sobre tecnologia assistiva para deficientes visuais.',
      image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
      name: 'Dra. Gildete da Silva Amorim',
      title: 'Professora',
      institution: 'UFF',
      description: 'Especialista em tecnologia assistiva para deficientes auditivos.',
      image: 'https://randomuser.me/api/portraits/women/38.jpg'
    }
  ];

  return (
    <section id="speakers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Palestrantes Confirmados
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              title={speaker.title}
              institution={speaker.institution}
              description={speaker.description}
              image={speaker.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="secondary" size="large">
            Ver Todos os Palestrantes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;