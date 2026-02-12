import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, href, className = '', fullWidth = false }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2
        bg-gold-gradient text-legal-black font-bold uppercase tracking-wide
        py-4 px-8 rounded-lg shadow-[0_0_15px_rgba(197,160,89,0.3)]
        transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(197,160,89,0.5)]
        active:scale-95
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <MessageCircle className="w-6 h-6" />
      <span>{text}</span>
    </a>
  );
};

export default Button;