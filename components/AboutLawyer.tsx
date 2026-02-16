import React from 'react';
import Button from './Button';

const AboutLawyer: React.FC = () => {
  return (
    <section className="py-24 bg-legal-card border-t border-legal-gold/20 relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-legal-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Coluna da Imagem */}
          <div className="w-full md:w-5/12 flex justify-center">
             <div className="relative group">
                {/* Efeito de moldura dourada */}
                <div className="absolute -inset-3 border-2 border-legal-gold/30 rounded-lg transform rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
                <div className="absolute -inset-3 border-2 border-legal-gold/10 rounded-lg transform -rotate-2 transition-transform duration-500 group-hover:rotate-0"></div>
                
                <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/80 aspect-[3/4] w-full max-w-sm mx-auto">
                   {/* Placeholder para a foto do Dr. Vítor Dalben */}
                   <img 
                     src="https://i.imgur.com/pr7H6ia.png" 
                     alt="Dr. Vítor Dalben" 
                     className="w-full h-full object-cover filter contrast-110"
                   />
                </div>
             </div>
          </div>

          {/* Coluna de Texto */}
          <div className="w-full md:w-7/12 space-y-8 text-center md:text-left">
            <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                  Dr. Vítor Dalben
                </h2>
                <div className="inline-block px-4 py-1 border border-legal-gold rounded text-legal-gold font-bold tracking-wider text-sm">
                  OAB/SP 423.363
                </div>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                <p>
                  <strong className="text-white font-semibold">Atuação dedicada na Defesa do Consumidor.</strong> Atuamos de forma digital em todo o Brasil, enfrentando abusos de grandes corporações com técnica jurídica apurada.
                </p>
                <p>
                  Nosso foco é a defesa da tranquilidade do consumidor. O Judiciário tem entendido que a <span className="text-legal-gold">perturbação do sossego</span> não é mero aborrecimento, mas sim um dano passível de reparação.
                </p>
                <p>
                  Não prometemos valores ou resultados, pois cada processo é único. <strong className="text-white">Prometemos empenho máximo</strong> e uma estratégia jurídica sólida para buscar os seus direitos.
                </p>
            </div>

            <div className="pt-2">
               <Button 
                 text="ANALISE O MEU CASO" 
                 href="https://wa.me/5518997088728"
                 fullWidth={false}
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLawyer;
