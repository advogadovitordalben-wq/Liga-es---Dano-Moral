import React from 'react';
import Button from './Button';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Relato do Caso",
      content: (
        <>
          Você nos conta o que está acontecendo via WhatsApp. É rápido e 100% online.
          <br /><br />
          <span className="italic text-gray-500 text-xs">
            *Análise inicial confidencial e sem custo pelo advogado.
          </span>
        </>
      )
    },
    {
      id: "02",
      title: "Análise Jurídica",
      content: "Verificamos se o seu caso está maduro para darmos entrada em uma ação. Caso o seu caso demande mais provas nós recomendaremos o nosso Protocolo de Otimização das Provas com o objetivo de otimizar as suas chances de receber uma indenização justa."
    },
    {
      id: "03",
      title: "Protocolo de Otimização das Provas",
      content: (
        <ul className="list-disc pl-4 space-y-1 text-gray-300 mt-2">
          <li>Identificar formalmente a origem das chamadas</li>
          <li>Notificar a empresa responsável</li>
          <li>Registrar a reiteração das ligações</li>
          <li>Organizar as provas de forma adequada para o processo</li>
        </ul>
      )
    },
    {
      id: "04",
      title: "Ajuizamento",
      content: "Com o caso sólido, buscamos uma indenização justa face ao seu sofrimento."
    }
  ];

  return (
    <section className="py-20 bg-legal-black px-6 relative overflow-hidden">
       {/* Linha decorativa de fundo */}
       <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-legal-gold/20 to-transparent hidden md:block"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 md:text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Como funciona o atendimento?
          </h2>
          <p className="text-gray-400">Simplificamos a burocracia para você.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-6xl font-serif font-bold text-legal-card group-hover:text-legal-gold/10 transition-colors absolute -top-8 -left-2 z-0">
                {step.id}
              </div>
              <div className="relative z-10 bg-legal-dark-gray border border-gray-800 p-6 rounded-lg h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-legal-gold text-legal-black font-bold flex items-center justify-center rounded-full mb-4 shadow-lg shadow-legal-gold/20">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <div className="text-sm text-gray-400 leading-relaxed">
                  {step.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO FINAL */}
        <div className="mt-16 text-center flex flex-col items-center">
          <Button 
             text="RELATAR O MEU CASO AO ADVOGADO AGORA" 
             href="https://wa.me/5518997088728"
             fullWidth={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
