import React from 'react';
import { CheckCircle2, AlertTriangle, Smartphone, UserX, Briefcase, Clock } from 'lucide-react';

const HarassmentTypes: React.FC = () => {
  const types = [
    {
      icon: <Clock className="w-8 h-8 text-legal-gold" />,
      title: "Horários Impróprios",
      text: "Ligações à noite, finais de semana ou feriados, perturbando seu descanso."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-legal-gold" />,
      title: "Ligações no Trabalho",
      text: "Cobranças ou ofertas ligando para o telefone da sua empresa ou chefe, gerando constrangimento."
    },
    {
      icon: <UserX className="w-8 h-8 text-legal-gold" />,
      title: "Cobrança de Terceiros",
      text: "Procuram por uma pessoa que você não conhece ou que não mora mais com você."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-legal-gold" />,
      title: "Volume Massivo",
      text: "Mais de 3 ligações no mesmo dia, por varios dias consecutivos, caracterizando perseguição e abuso de direito."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-legal-gold" />,
      title: "Tom Ameaçador",
      text: "Atendentes que utilizam tom de voz agressivo, ameaças de penhora imediata ou coação."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-legal-gold" />,
      title: "Dívida Inexistente",
      text: "Cobrança de valores já pagos ou serviços nunca contratados."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-legal-dark-gray to-legal-black px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-legal-gold font-semibold tracking-widest uppercase text-sm block mb-2">
            Identifique o Abuso
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            O que configura <span className="text-legal-gold">Dano Moral?</span>
          </h2>
          <p className="text-legal-text-muted max-w-2xl mx-auto">
            Não é apenas o número de ligações. O modo como a empresa age também gera dever de indenizar. Veja se seu caso se encaixa:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <div 
              key={index}
              className="bg-legal-card/50 p-6 rounded-lg border border-gray-800 hover:border-legal-gold transition-all duration-300 flex flex-col gap-4 group"
            >
              <div className="bg-legal-black w-14 h-14 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-legal-gold/50 transition-colors">
                {type.icon}
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2 font-medium">{type.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{type.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarassmentTypes;
