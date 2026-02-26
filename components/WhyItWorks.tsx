import React from 'react';

const WhyItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-legal-dark-gray px-6 border-t border-gray-900">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 text-center">
            Em quais casos que a <span className="text-legal-gold">ação funciona?</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg bg-legal-black/50 p-8 rounded-xl border border-legal-gold/10">
              <p>
                <strong className="text-white">Se o seu caso se enquadra nas situações anteriores fique atento!</strong> A maioria das ações acabam "morrendo na praia" por ausência de provas adequadas.
             </p>
              <p>
                Quando não há provas suficientes o processo acaba sendo extinto e as empresas que praticam as ligações abusivas ficam impunes.
             </p>
             <p className="border-l-4 border-legal-gold pl-4 py-2 text-white font-medium bg-legal-gold/5">
                Nós podemos te ajudar a produzir as provas corretas para denunciar a empresa que está te ligando, tornando ela indesculpável perante o juiz.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
