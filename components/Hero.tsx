import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-legal-black">
      {/* Gradiente de Fundo & Efeitos */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#050505] via-legal-black to-[#1a1a1a]"></div>
      <div className="absolute top-0 right-0 w-[60vw] h-full bg-legal-gold/5 skew-x-12 transform translate-x-32 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Conteúdo de Texto */}
        <div className="space-y-8 text-center md:text-left order-2 md:order-1">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
            TRANSFORME A SUA <br/>
            <span className="text-transparent bg-clip-text bg-gold-gradient italic">
            PERTURBAÇÃO
            </span> EM <br/>
             <span className="text-legal-gold">
            INDENIZAÇÃO.
          </span>
          </h1>
          
          <p className="text-lg md:text-xl text-legal-text-muted font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
            A Justiça tem condenado empresas a pagarem danos morais e fixado multas por cada nova ligação indevida realizada.
            Pare de ser incomodado hoje mesmo.
          </p>
          
          <div className="pt-4 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <Button 
              text="VERIFICAR SE TENHO DIREITO À INDENIZAÇÃO" 
              href="https://wa.me/SEUNUMERO" 
              className="md:text-lg w-full md:w-auto shadow-lg shadow-legal-gold/10"
            />
          </div>
          <p className="text-sm text-gray-500 italic">
            *Análise confidencial e sem compromisso.
          </p>
        </div>

        {/* Área da Imagem do Advogado - Espaço dedicado conforme solicitado */}
        <div className="relative h-[400px] md:h-[600px] flex items-end justify-center order-1 md:order-2">
            {/* 
              PLACEHOLDER PARA FOTO DO ADVOGADO
              Instrução: Substitua o src por um PNG transparente (recortado) da sua foto.
            */}
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Dr. Vitor Dalben" 
              className="relative z-10 max-h-full w-auto object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] mask-image-gradient"
            />
            
            {/* Efeito de brilho atrás da imagem */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-legal-gold/10 rounded-full blur-[100px] -z-0"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
