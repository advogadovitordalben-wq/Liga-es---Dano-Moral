import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-black">
      
      {/* IMAGEM DE FUNDO COM EFEITOS */}
      <div className="absolute inset-0 z-0">
        {/* A foto que você enviou */}
        <img 
          src="https://i.imgur.com/sBDyHFA.png" 
          alt="Dr. Vitor Dalben" 
          className="w-full h-full object-cover object-right md:object-center opacity-90"
        />
        
        {/* GRADIENTE PARA OFUSCAR A ESTANTE E DAR FOCO NO TEXTO (Esquerda para Direita) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        
        {/* SOMBRA NA PARTE INFERIOR PARA MESCLAR COM A PRÓXIMA SEÇÃO (Cima para Baixo) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl space-y-8 text-center md:text-left">
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            TRANSFORME A SUA <br/>
            <span className="text-transparent bg-clip-text bg-gold-gradient italic">
              PERTURBAÇÃO
            </span> EM <br/>
            <span className="text-legal-gold">
              INDENIZAÇÃO.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
            A Justiça tem condenado empresas a pagarem danos morais por ligações excessivas de cobrança ou ofertas. Pare de ser incomodado hoje mesmo.
          </p>
          
          <div className="pt-4 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <Button 
              text="VERIFICAR SE TENHO DIREITO À INDENIZAÇÃO" 
              href="https://wa.me/5518997088728" 
              className="md:text-lg w-full md:w-auto shadow-2xl shadow-legal-gold/20"
            />
          </div>
          
          <p className="text-sm text-gray-400 italic">
            *Análise confidencial e gratuita realizada por especialista.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
