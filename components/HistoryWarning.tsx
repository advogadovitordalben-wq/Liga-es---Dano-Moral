import React from 'react';

const HistoryWarning: React.FC = () => {
  return (
    <section className="bg-legal-black pb-12 px-6">
      <div className="max-w-2xl mx-auto bg-red-950/20 border border-red-900/50 p-6 rounded-xl text-center">
        <p className="text-red-200 text-sm md:text-base leading-relaxed">
          <span className="font-bold text-red-500 block mb-2 text-lg">⚠️ AVISO IMPORTANTE:</span>
          Não apague o histórico de chamadas do seu celular. Ele é sua prova principal. 
          Fale conosco agora antes que esses registros se percam automaticamente.
        </p>
      </div>
    </section>
  );
};

export default HistoryWarning;
