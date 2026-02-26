import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// Importando os novos componentes
import TargetAudience from './components/TargetAudience';
import WhyItWorks from './components/WhyItWorks';
import HistoryWarning from './components/HistoryWarning';
// Importando componentes existentes
import HarassmentTypes from './components/HarassmentTypes';
import Jurisprudence from './components/Jurisprudence';
import HowItWorks from './components/HowItWorks';
import AboutLawyer from './components/AboutLawyer';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-legal-black text-legal-text font-sans selection:bg-legal-gold selection:text-black">
      <Header />
      <main>
        {/* 1. Hero alterado */}
        <Hero />
        
        {/* 2. Nova Seção: Atenção (Vermelho) */}
        <TargetAudience />
        
        {/* 3. Seção Movida: Identifique o Abuso */}
        <HarassmentTypes />
        
        {/* 4. Nova Seção: Por que funciona? */}
        <WhyItWorks />
        
        {/* 5. Nova Seção: Aviso do Histórico */}
        <HistoryWarning />
        
        {/* 6. Como funciona (com o item 3 alterado) */}
        <HowItWorks />
        
        {/* 7. Precedentes (Movido para cá) */}
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
