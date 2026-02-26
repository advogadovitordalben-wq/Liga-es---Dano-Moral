import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-black">
      
      {/* IMAGEM DE FUNDO */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/sBDyHFA.png" 
          alt="Dr. Vítor Dalben" 
          className="w-full h-full object-cover object-right md:object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl space-y-8 text-center md:text-left">
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            LIGAÇÕES INDESEJADAS? <br/>
            <span className="text-transparent bg-clip-text bg-gold-gradient italic text-3xl md:text-5xl lg:text-6xl mt-4 block">
              DESCUBRA SE VOCÊ TEM <br/>
              DIREITO AO DANO MORAL
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
            A Justiça tem condenado empresas a pagarem danos morais por ligações excessivas de cobrança ou ofertas. Entenda quando é possível ser indenizado(a).
          </p>
          
          {/* O AVISO FOI REMOVIDO DAQUI */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
