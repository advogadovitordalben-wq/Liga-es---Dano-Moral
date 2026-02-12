import React from 'react';
import { Scale } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8 px-6 md:px-12 bg-gradient-to-b from-black/80 to-transparent">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <div className="text-legal-gold drop-shadow-lg">
          <Scale size={36} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-white drop-shadow-lg">
            VITOR DALBEN
          </h1>
          <p className="text-[10px] md:text-xs text-legal-gold tracking-[0.4em] uppercase font-bold">
            Advogados
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
