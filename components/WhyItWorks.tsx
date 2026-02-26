import React from 'react';

const WhyItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-legal-dark-gray px-6 border-t border-gray-900">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <div className="space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center">
            Em quais casos a <span className="text-legal-gold">ação funciona?</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg bg-legal-black p-8 rounded-xl border border-gray-800 shadow-xl">
              <p>
                <strong className="text-white block mb-2 text-xl">Se o seu caso se enquadra nas situações anteriores fique atento!</strong> 
                A maioria das ações acabam "morrendo na praia" por ausência de provas adequadas.
             </p>
              <p>
                Quando não há provas suficientes o processo acaba sendo extinto e as empresas que praticam as ligações abusivas ficam impunes.
             </p>
             <div className="mt-6 border-l-4 border-legal-gold pl-6 py-2 bg-legal-gold/5 rounded-r-lg">
                <p className="text-white font-medium text-xl italic">
                   "Nós podemos te ajudar a produzir as provas corretas para denunciar a empresa que está te ligando, tornando ela indesculpável perante o juiz."
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
