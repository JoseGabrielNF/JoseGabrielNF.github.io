import React, { useState } from 'react';
import Card from '../atoms/Card';
import Button from '../atoms/Button';

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const scheduleData = {
    day1: {
      date: 'Terça-feira, 09 de setembro',
      events: [
        { time: '07h00 – 09h00', title: 'Credenciamento', description: '' },
        { 
          time: '08h00 - 08h30', 
          title: 'Abertura Oficial do Seminário', 
          description: 'Profa Dra. Camila Celeste Brandão Itavo- Reitora (UFMS), Profa Dra. Anna Feminnela, Secretária Federal dos Direitos da Pessoas com Deficiência (MDH), Secretário de Educação do Estado de MS (SED/MS), Secretária de Educação do Município de Campo Grande (SEMED), Prof. Dr. Guilherme Lira - Presidente (ABTECA).' 
        },
        { time: '08h30 – 08h40', title: 'Intervalo – Apresentação Cultural', description: '' },
        { 
          time: '08h40 - 09h20', 
          title: 'Palestra de Abertura: Tecnologia Assistiva no Mundo', 
          description: 'Palestrante: Profa Dra Linamara Batistela (USP)' 
        },
        { 
          time: '09h20 - 10h00', 
          title: 'Palestra 2: Políticas Públicas e CAPTA', 
          description: 'Palestrante: Profa Dra Sonia da Costa (Diretora do MCTI)' 
        },
        { time: '10h00 - 10h30', title: 'Coffee Break', description: '' },
        { 
          time: '10h30 - 12h00', 
          title: 'Mesa Redonda 1: Panorama da Tecnologia Assistiva no Brasil', 
          description: 'Coordenadora – Profa Dra. Vivina Dias Sol Queiroz- Pró-Reitora da Cidadania e Sustentabilidade -PROCIDS (UFMS). Palestrantes: Prof. Dr. Antônio José do Nascimento Ferreira- Diretor do Programa Novo Viver sem Limites (SNDPD-MDHC), Prof. Dr. Carlos Procópio (Pró-reitor de Ensino do IFSP).' 
        },
        { time: '14h00 - 14h40', title: 'Palestra 3: Apae', description: '' },
        { time: '14h40 - 15h40', title: 'Mesa Redonda 2', description: 'Fabiana' },
        { 
          time: '15h40 - 16h20', 
          title: 'Palestra 3: Deficiências Múltiplas e a Surdocegueira: Um panorama nacional', 
          description: 'Palestrante: Profa Dra Shirley Maia (Diretora da AHIMSA)' 
        },
        { time: '16h20 - 16h50', title: 'Coffee Break', description: '' },
        { 
          time: '16h50 - 17h30', 
          title: 'Palestra 4: Tecnologia Assistiva no Estado de Mato Grosso do Sul (SED/MS)', 
          description: '' 
        }
      ]
    },
    day2: {
      date: 'Quarta-feira, 10 de setembro',
      events: [
        { time: '08h00 - 08h10', title: 'Apresentação Cultural', description: '' },
        { 
          time: '08h10 - 08h50', 
          title: 'Palestra 5: Tecnologia Assistiva no município de Campo Grande/MS (SEMED)', 
          description: '' 
        },
        { 
          time: '08h50 - 09h30', 
          title: 'Palestra 6: Experiências êxitosas desenvolvidas com alunos com deficiência Intelectual', 
          description: 'Profa Dra Kelly Assunção Colares (Coordenadora Pedagógica da APAE-DF)' 
        },
        { time: '09h30 - 10h00', title: 'Coffee Break', description: '' },
        { 
          time: '10h00 - 10h40', 
          title: 'Painel: Trabalho Multicampi: Diaff /PROAES', 
          description: 'Palestrantes: Profa Dra Mirella Vila Tucunduva (UFMS) e Profa Dra Eliane Mattos Piranda (UFMS)' 
        },
        { 
          time: '10h40 - 12h00', 
          title: 'Mesa Redonda 3: A Educação Especial na UFMS', 
          description: 'Palestrantes: Profa Dra Mariuza Camilo Guimarães (UFMS), Profa Dra Raquel Quiles Franco (UFMS), Profa Dra Carina Elizabeth de Almeida (UFMS), Profa Dra Daniela Cristina Barros de Souza Marcato (UFMS), Profa Dra Ana Luiza Bossolani Martins (UFMS)' 
        },
        { time: '14h00 - 14h10', title: 'Depoimento', description: '' },
        { 
          time: '14h10 - 14h50', 
          title: 'Palestra 7: Fundamentos e Concepções na Educação Inclusiva no Mundo', 
          description: 'Palestrante: Universidade de Salamanca' 
        },
        { 
          time: '14h50 - 15h30', 
          title: 'Palestra Individual 8: Comunicação alternativa/aumentativa', 
          description: 'Convidada APAE' 
        },
        { time: '15h30 - 16h00', title: 'Coffee Break', description: '' },
        { 
          time: '16h00 - 17h30', 
          title: 'Mesa Redonda 4: Educação e Saúde', 
          description: 'José Tadeu (IBC)' 
        }
      ]
    },
    day3: {
      date: 'Quinta-feira, 11 de setembro',
      events: [
        { time: '08h00 - 08h10', title: 'Depoimento', description: '' },
        { 
          time: '08h10 - 10h40', 
          title: 'Oficina 2: Tecnologia Assistiva na Alfabetização', 
          description: 'Palestrante: Profa Dra Fernanda Cristina Falcoski (AHIMSA)' 
        },
        { time: '10h20 - 10h50', title: 'Coffee Break', description: '' },
        { 
          time: '10h50 - 11h40', 
          title: 'Mesa Redonda 5: Avaliação na Educação Especial', 
          description: 'Profa Dra Alexandra Ayach Anache (UFMS) e Profa Dra Karine Vieira Pereira (IBC)' 
        },
        { time: '11h40 - 12h00', title: 'Sessão Depoimentos', description: '' },
        { time: '14h00 - 14h10', title: 'Apresentação Cultural', description: '' },
        { 
          time: '14h10 - 16h50', 
          title: 'Oficina 1: Usando Tecnologia Assistiva', 
          description: 'Equipe ABTECA' 
        },
        { time: '16h50 - 17h30', title: 'Coffee Break e Término', description: '' }
      ]
    },
    day4: {
      date: 'Sexta-feira, 12 de setembro',
      events: [
        { time: '08h00 - 08h10', title: 'Depoimento', description: '' },
        { 
          time: '08h10 - 10h20', 
          title: 'Oficina 2: Tecnologia Assistiva para Deficientes Visuais', 
          description: 'Prof. Dr. João Ricardo Figueiredo (Diretor do IBC), Prof. Dr. Guilherme Lira (ABTECA), Prof. Dr. Milton (Diretor do DEPS – MCTI)' 
        },
        { time: '10h20 - 10h50', title: 'Coffee Break', description: '' },
        { 
          time: '10h50 - 12h00', 
          title: 'Oficina 3: Tecnologia Assistiva para Deficientes Auditivos', 
          description: 'Dra. Gildete da Silva Amorim- (UFF)' 
        },
        { time: '14h00 - 14h40', title: 'Convidado Especialista em IA', description: '' },
        { time: '14h40 - 15h30', title: 'Palestrante IA Portugal', description: '' },
        { time: '15h30 - 16h00', title: 'Coffee Break', description: '' },
        { 
          time: '16h00 - 16h40', 
          title: 'Oficina 4: Tecnologia para deficiência Intelectual e Autismo', 
          description: '' 
        },
        { time: '16h40 - 17h30', title: 'Encerramento: Apresentação Musical', description: 'Sorteio de Prêmios' }
      ]
    }
  };

  const dayButtons = [
    { key: 'day1', label: 'Dia 09/09' },
    { key: 'day2', label: 'Dia 10/09' },
    { key: 'day3', label: 'Dia 11/09' },
    { key: 'day4', label: 'Dia 12/09' }
  ];

  return (
    <section id="schedule" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Programação</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        {/* Day Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {dayButtons.map((day) => (
              <Button
                key={day.key}
                variant={activeDay === day.key ? 'secondary' : 'outline'}
                size="medium"
                onClick={() => setActiveDay(day.key)}
                className="whitespace-nowrap"
              >
                {day.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Schedule Content */}
        <Card variant="schedule" className="mb-6">
          <div className="bg-blue-800 text-white px-6 py-3">
            <h3 className="font-bold text-xl">{scheduleData[activeDay].date}</h3>
          </div>
          <div className="p-6">
            <div className="border-l-4 border-yellow-500 pl-4 mb-6">
              <h4 className="font-bold text-lg text-blue-800">Auditório Multiuso 1 e 2</h4>
            </div>
            
            <div className="space-y-6">
              {scheduleData[activeDay].events.map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4 font-medium text-blue-700">{event.time}</div>
                  <div className="md:w-3/4">
                    <p className="font-semibold">{event.title}</p>
                    {event.description && (
                      <p className="text-gray-600">{event.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ScheduleSection;