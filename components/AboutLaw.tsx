import React from 'react';
import Button from './Button';

const AboutLaw: React.FC = () => {
  return (
    <section className="py-20 bg-legal-dark-gray px-6 border-t border-gray-900">
      <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Você conhece a Teoria do <span className="text-legal-gold">Desvio Produtivo</span>?
          </h2>
          
          <div className="space-y-4 text-legal-text-muted leading-relaxed text-lg">
              <p>
                <strong className="text-white">A lei está do seu lado.</strong> O Tribunal de Justiça já decidiu que empresas que interrompem seu trabalho ou descanso com ligações excessivas cometem um ato ilícito.
             </p>
              <p>
                Não é "mero aborrecimento". É <span className="text-legal-gold font-semibold">Dano Moral</span> por Desvio Produtivo: quando você é forçado a desperdiçar seu tempo vital para lidar com um problema que você não criou.
             </p>
          </div>

          <div className="pt-6">
            <Button 
              text="FALAR COM O ADVOGADO AGORA" 
              href="https://wa.me/SEUNUMERO" 
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/3 flex justify-center">
            {/* Visual representation - abstract scales */}
            <div className="relative w-64 h-64">
                <div className="absolute inset-0 border-2 border-legal-gold rounded-full opacity-20 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-legal-gold rounded-full opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                     <span className="font-serif text-8xl text-legal-gold opacity-10">§</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLaw;
