import React from 'react';

interface ConfettiProps {
  color: string;
  left: string;
  delay: number;
}

export const Confetti: React.FC<ConfettiProps> = ({ color, left, delay }) => {
  return (
    <div
      className="absolute w-2 h-2 animate-confetti"
      style={{
        backgroundColor: color,
        left,
        top: '-20px',
        animationDelay: `${delay}s`,
      }}
    />
  );
};