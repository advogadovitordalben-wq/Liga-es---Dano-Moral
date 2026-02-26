import React from 'react';

const HistoryWarning: React.FC = () => {
  return (
    <section className="bg-legal-black pb-16 px-6">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-red-950/40 to-black border border-red-900/50 p-8 rounded-xl text-center shadow-2xl">
        <p className="text-red-200 text-base md:text-lg leading-relaxed">
          <span className="font-bold text-red-500 block mb-3 text-xl tracking-wide uppercase">
            ⚠️ Aviso Importante
          </span>
          Não apague o histórico de chamadas do seu celular. Ele é sua prova principal. 
          <br />
          <span className="text-white font-medium">Fale conosco agora antes que esses registros se percam automaticamente.</span>
        </p>
      </div>
    </section>
  );
};

export default HistoryWarning;
