import React from 'react';
import { Check } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const checks = [
    "Recebe várias ligações por dia",
    "Já tentou bloquear os números e não funcionou",
    "Já pediu para pararem de ligar, sem sucesso",
    "Se sente incomodado(a) com a frequência das chamadas"
  ];

  return (
    <section className="py-12 bg-black px-6 border-b border-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-950/20 border border-red-800/50 rounded-xl p-8 shadow-[0_0_30px_rgba(220,38,38,0.05)]">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-6 flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
            <span className="text-red-500 text-3xl font-sans">⚠️</span> 
            <span>Atenção: Este procedimento pode ser para você se:</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {checks.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 bg-red-600 rounded-full p-0.5 shrink-0 shadow-lg shadow-red-600/20">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-300 text-lg leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
