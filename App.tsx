import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HarassmentTypes from './components/HarassmentTypes';
import Jurisprudence from './components/Jurisprudence';
import HowItWorks from './components/HowItWorks';
import AboutLaw from './components/AboutLaw';
import AboutLawyer from './components/AboutLawyer';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-legal-black text-legal-text font-sans selection:bg-legal-gold selection:text-black">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <HarassmentTypes />
        <Jurisprudence />
        <HowItWorks />
        <AboutLaw />
        <AboutLawyer />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;