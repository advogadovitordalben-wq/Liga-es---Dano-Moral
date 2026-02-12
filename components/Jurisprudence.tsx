import React from 'react';
import { Gavel } from 'lucide-react';

const Jurisprudence: React.FC = () => {
  const cases = [
    {
      title: "CONDENAÇÃO EXEMPLAR",
      value: "R$ 7.500,00",
      detail: "+ multa de R$ 50,00 por nova ligação.",
      ref: "Processo em Pinheiros/SP"
    },
    {
      title: "MULTA POR REINCIDÊNCIA",
      value: "R$ 200,00",
      detail: "a cada nova chamada indevida realizada.",
      ref: "Agravo TJSP"
    },
    {
      title: "DANO MORAL",
      value: "R$ 5.000,00",
      detail: "por Desvio Produtivo e perda de tempo útil.",
      ref: "Processo em Mauá/SP"
    }
  ];

  return (
    <section className="py-24 bg-legal-black px-6 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-legal-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-legal-gold font-semibold tracking-widest uppercase text-sm block mb-2">
            Jurisprudência
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            A Justiça está do lado do Consumidor
          </h2>
          <p className="text-legal-text-muted max-w-2xl mx-auto">
            Veja decisões reais onde consumidores foram indenizados pela perturbação do sossego e cobranças abusivas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-legal-card border border-legal-gold/30 rounded-lg hover:border-legal-gold transition-colors duration-300"
            >
              <div className="absolute -top-5 left-8 bg-legal-black px-3 py-1 border border-legal-gold text-legal-gold text-xs uppercase font-bold tracking-wider flex items-center gap-2">
                <Gavel size={14} /> DECISÃO REAL
              </div>
              
              <h3 className="text-white font-serif text-lg mb-4 mt-2 border-b border-gray-800 pb-2">
                {item.title}
              </h3>
              
              <div className="text-3xl font-bold text-legal-gold mb-2">
                {item.value}
              </div>
              
              <p className="text-white mb-6 font-medium">
                {item.detail}
              </p>
              
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Ref: {item.ref}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jurisprudence;