import React from 'react';

// 1. IMPORTANDO OS COMPONENTES
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience'; // NOVO
import HarassmentTypes from './components/HarassmentTypes';
import WhyItWorks from './components/WhyItWorks'; // NOVO
import HistoryWarning from './components/HistoryWarning'; // NOVO
import HowItWorks from './components/HowItWorks';
import Jurisprudence from './components/Jurisprudence';
import AboutLawyer from './components/AboutLawyer';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-legal-black text-legal-text font-sans selection:bg-legal-gold selection:text-black">
      <Header />
      <main>
        {/* HERO (Capa do site) */}
        <Hero />
        
        {/* NOVA SEÇÃO: ATENÇÃO (Vermelho) */}
        <TargetAudience />
        
        {/* SEÇÃO MOVIDA: Identifique o Abuso (Icones) */}
        <HarassmentTypes />
        
        {/* NOVA SEÇÃO: Por que a ação funciona? */}
        <WhyItWorks />
        
        {/* NOVA SEÇÃO: Aviso de não apagar histórico */}
        <HistoryWarning />
        
        {/* Como funciona o atendimento */}
        <HowItWorks />
        
        {/* Precedentes Judiciais (Movido para baixo de Como Funciona) */}
        <Jurisprudence />
        
        {/* Sobre o Advogado */}
        <AboutLawyer />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
