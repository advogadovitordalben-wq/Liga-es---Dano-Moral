import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="text-center md:text-left space-y-4 max-w-md">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-1">VÍTOR DALBEN</h3>
            <p className="text-xs text-legal-gold tracking-[0.3em] uppercase">Advogados</p>
          </div>
          
          <p className="text-gray-500 text-sm leading-relaxed">
            A orientação é realizada conforme a legislação vigente e normas éticas da advocacia. 
            Não há promessa de resultado ou garantia de êxito em processos judiciais.
          </p>
        </div>
        
        <div className="text-center md:text-right pt-4 md:pt-0">
          <p className="text-gray-600 text-sm font-medium">
            &copy; 2025 Dalben Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
