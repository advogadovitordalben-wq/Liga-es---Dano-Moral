import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-legal-dark-gray px-6 border-t border-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Perguntas Frequentes
          </h2>
          <div className="h-1 w-24 bg-legal-gold mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          <FaqItem 
            question="Preciso pagar algo para iniciar?"
            answer="Não. Realizamos a análise inicial do seu caso sem custo. Trabalhamos com modelos de contrato onde nossos honorários dependem, majoritariamente, do êxito da causa."
          />
          <FaqItem 
            question="Preciso ir até o escritório físico?"
            answer="Não é necessário. Todo o atendimento, envio de documentos e assinatura de contrato pode ser feito de forma digital, pelo WhatsApp e e-mail, garantindo agilidade e conforto."
          />
          <FaqItem 
            question="Quais provas eu preciso ter?"
            answer="O principal são os 'prints' da tela do celular mostrando o histórico de chamadas (com horários e frequência) e, se possível, gravações de áudio ou números de protocolo de reclamações feitas na empresa ou Anatel."
          />
          <FaqItem 
            question="Demora muito para sair o resultado?"
            answer="O tempo varia conforme o fórum e a complexidade. Porém, pedidos de liminar para cessar as ligações costumam ser analisados com rapidez (dias ou semanas)."
          />
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  return (
    <details className="group bg-legal-black border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 open:border-legal-gold/50">
      <summary className="flex justify-between items-center cursor-pointer p-6 list-none font-medium text-white hover:text-legal-gold transition-colors">
        <span className="text-lg">{question}</span>
        <ChevronDown className="w-5 h-5 text-legal-gold transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6 pt-0 text-legal-text-muted leading-relaxed border-t border-gray-800/50 group-open:border-gray-800 pt-4">
        {answer}
      </div>
    </details>
  );
};

export default FAQ;