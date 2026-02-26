import React from 'react';

// IMPORTANDO OS COMPONENTES
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience'; 
import HarassmentTypes from './components/HarassmentTypes';
import WhyItWorks from './components/WhyItWorks'; 
import HistoryWarning from './components/HistoryWarning'; 
import HowItWorks from './components/HowItWorks';
import Jurisprudence from './components/Jurisprudence';
import AboutLawyer from './components/AboutLawyer';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// NOTE QUE NÃO IMPORTAMOS MAIS: PainPoints NEM AboutLaw

function App() {
  return (
    <div className="min-h-screen bg-legal-black text-legal-text font-sans selection:bg-legal-gold selection:text-black">
      <Header />
      <main>
        {/* 1. Capa do site */}
        <Hero />
        
        {/* 2. NOVA SEÇÃO: Atenção (Vermelho) - Seção nova */}
        <TargetAudience />
        
        {/* 3. Identifique o Abuso (Icones) - Movido para cá */}
        <HarassmentTypes />
        
        {/* 4. NOVA SEÇÃO: Por que a ação funciona? - Seção nova */}
        <WhyItWorks />
        
        {/* 5. NOVA SEÇÃO: Aviso de não apagar histórico - Seção nova */}
        <HistoryWarning />
        
        {/* 6. Como funciona o atendimento */}
        <HowItWorks />
        
        {/* 7. Precedentes Judiciais - Movido para baixo de Como Funciona */}
        <Jurisprudence />
        
        {/* 8. Sobre o Advogado */}
        <AboutLawyer />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
