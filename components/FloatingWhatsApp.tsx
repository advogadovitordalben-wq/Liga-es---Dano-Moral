import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  // Link com a mensagem personalizada
  const whatsappLink = "https://wa.me/5518997088728?text=Ol%C3%A1!%20Acessei%20o%20seu%20site%20e%20percebi%20que%20estou%20sendo%20prejudicado%20com%20liga%C3%A7%C3%B5es%20abusivas!";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <MessageCircle size={28} fill="white" className="text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
