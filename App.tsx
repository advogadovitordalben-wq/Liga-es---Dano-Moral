import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience'; // Novo
import HarassmentTypes from './components/HarassmentTypes';
import WhyItWorks from './components/WhyItWorks'; // Novo
import HistoryWarning from './components/HistoryWarning'; // Novo
import HowItWorks from './components/HowItWorks';
import Jurisprudence from './components/Jurisprudence';
import AboutLawyer from './components/AboutLawyer';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// PainPoints e AboutLaw foram removidos

function App() {
  return (
    <div className="min-h-screen bg-legal-black text-legal-text font-sans selection:bg-legal-gold selection:text-black">
      <Header />
      <main>
        <Hero />
        
        {/* Nova Ordem das Seções */}
        <TargetAudience />
        <HarassmentTypes />
        <WhyItWorks />
        <HistoryWarning />
        <HowItWorks />
        <Jurisprudence />
        <AboutLawyer />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
