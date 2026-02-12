import React from 'react';
import { Scale } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <div className="text-legal-gold">
          <Scale size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-serif text-lg md:text-xl font-bold tracking-wider text-white">
            VITOR DALBEN
          </h1>
          <p className="text-xs text-legal-gold tracking-[0.2em] uppercase">Advogados</p>
        </div>
      </div>
    </header>
  );
};

export default Header;