import React from 'react';
import { PhoneOff, PhoneIncoming, Clock } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <PhoneIncoming className="w-12 h-12 text-legal-gold mb-4" />,
      title: "Volume Excessivo",
      description: "Recebe dezenas de ligações por dia, inclusive em finais de semana e horários inoportunos?"
    },
    {
      icon: <PhoneOff className="w-12 h-12 text-legal-gold mb-4" />,
      title: "Ligações 'Robocalls'",
      description: "Ao atender, a ligação cai ou fica muda? Isso é uma prática abusiva de telemarketing automatizado."
    },
    {
      icon: <Clock className="w-12 h-12 text-legal-gold mb-4" />,
      title: "Perda de Tempo",
      description: "Seu descanso, reuniões de trabalho ou momentos em família são interrompidos constantemente?"
    }
  ];

  return (
    <section className="py-20 bg-legal-dark-gray px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Você enfrenta essa situação?
          </h2>
          <div className="h-1 w-24 bg-legal-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div 
              key={index}
              className="bg-legal-black p-8 rounded-xl border border-gray-800 hover:border-legal-gold/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-legal-card rounded-full mb-6 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.2)] transition-shadow">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">
                  {point.title}
                </h3>
                <p className="text-legal-text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;