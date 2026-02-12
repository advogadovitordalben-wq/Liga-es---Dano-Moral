import React from 'react';
import { Gavel, Scale, ShieldCheck, Info } from 'lucide-react';

const Jurisprudence: React.FC = () => {
  const cases = [
    {
      icon: <Scale className="w-10 h-10" />,
      title: "DESVIO PRODUTIVO",
      value: "R$ 7.500,00",
      context: "Consumidor submetido a assédio comercial via telemarketing, mesmo após cadastro em órgãos de bloqueio (Não Perturbe).",
      quote: "O descaso e ineficiência da ré na solução do embaraço ultrapassa o mero dissabor do cotidiano. Aplicação da teoria do desvio produtivo.",
      process: "Proc. 1013070-97.2024.8.26.0011",
      location: "Foro de Pinheiros / SP"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "PROTEÇÃO AO SOSSEGO",
      value: "R$ 300,00 / ato",
      context: "Decisão liminar (Tutela de Urgência) determinando a cessação imediata de ligações que atingem a tranquilidade do consumidor.",
      quote: "Cabível a concessão da tutela para determinar a cessação das ligações... limitadas a um teto de R$ 60.000,00.",
      process: "Agravo 2193798-52.2024.8.26.0000",
      location: "TJSP - Votuporanga / SP"
    },
    {
      icon: <Gavel className="w-10 h-10" />,
      title: "STALKING COMERCIAL",
      value: "R$ 5.000,00",
      context: "Reconhecimento de dano moral 'In Re Ipsa' por perturbação do sossego através de chamadas e SMS massivos.",
      quote: "A conduta caracteriza a modalidade in re ipsa... perturbação que obriga a atender ou rejeitar inúmeras ligações diárias.",
      process: "Proc. 1006327-93.2025.8.26.0348",
      location: "Comarca de Mauá / SP"
    }
  ];

  return (
    <section className="py-24 bg-legal-black px-6 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-legal-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-legal-gold font-semibold tracking-[0.3em] uppercase text-xs block mb-3">
            Informativo Jurídico
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            Estudo de Precedentes <span className="text-legal-gold">Judiciais</span>
          </h2>
          <p className="text-legal-text-muted max-w-3xl mx-auto text-lg font-light">
            Síntese de decisões recentes dos Tribunais sobre a aplicação da Teoria do Desvio Produtivo e a proteção ao sossego do consumidor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-legal-card border border-white/5 rounded-xl hover:border-legal-gold/50 transition-all duration-500 flex flex-col h-full shadow-2xl"
            >
              <div className="text-legal-gold/20 group-hover:text-legal-gold/40 transition-colors duration-500 mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-white font-serif text-xl mb-2 tracking-wide uppercase">
                {item.title}
              </h3>

              <div className="text-4xl font-black text-[#e6c67e] mb-6 drop-shadow-[0_2px_10px_rgba(230,198,126,0.2)]">
                {item.value}
              </div>

              <div className="space-y-4 flex-grow">
                <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-legal-gold font-bold mb-1">Contexto do Caso</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.context}</p>
                </div>

                <div className="bg-black/40 p-4 rounded-lg border-l-2 border-legal-gold/30">
                    <h4 className="text-[10px] uppercase tracking-widest text-legal-gold font-bold mb-2 italic">Trecho do Julgado</h4>
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                        "{item.quote}"
                    </p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/5">
                <p className="text-[11px] text-gray-500 font-mono tracking-tighter">
                   REFERÊNCIA: {item.process}
                </p>
                <p className="text-[10px] text-legal-gold/60 uppercase tracking-widest mt-1">
                   {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOX DE ÉTICA E AVISO LEGAL */}
        <div className="max-w-4xl mx-auto bg-legal-dark-gray border border-legal-gold/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="bg-legal-gold/10 p-4 rounded-full text-legal-gold">
            <Info size={32} />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-2 tracking-wide uppercase text-sm">Aviso de Ética e Transparência</h4>
            <div className="text-gray-400 text-sm leading-relaxed space-y-2 font-light">
              <p>
                As decisões judiciais apresentadas acima são <span className="text-white font-medium">referenciais e baseadas em casos específicos</span>. O valor de uma eventual indenização é fixado pelo Poder Judiciário com base em critérios como a gravidade do dano, a reiteração da conduta e a capacidade econômica da empresa.
              </p>
              <p>
                É imprescindível a <span className="text-white font-medium">análise individualizada</span> de cada situação por um advogado. Em conformidade com as normas da OAB, ressaltamos que não há promessa de ganho ou garantia de valores pré-estabelecidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jurisprudence;
