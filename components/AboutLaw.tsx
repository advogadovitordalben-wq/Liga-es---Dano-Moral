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
              O tempo é o recurso mais valioso que temos. Quando uma empresa obriga você a gastar seu tempo vital para resolver problemas criados por ela mesma (como ligações incessantes), ela está causando um dano.
            </p>
            <p>
              A perturbação do sossego não é apenas um "mero aborrecimento". É uma conduta ilícita que gera o dever de indenizar. Não aceite ser refém do telemarketing abusivo.
            </p>
          </div>

          <div className="pt-6">
            <Button 
              text="FALAR COM UM ADVOGADO AGORA" 
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