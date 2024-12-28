import React from 'react';

interface CyberTextProps {
  text: string;
  className?: string;
}

export const CyberText: React.FC<CyberTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute inset-0 animate-glitch-1 text-cyan-500 opacity-50">{text}</span>
      <span className="absolute inset-0 animate-glitch-2 text-pink-500 opacity-50">{text}</span>
      <span className="relative z-10">{text}</span>
    </div>
  );
};