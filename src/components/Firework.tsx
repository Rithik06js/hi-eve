import React from 'react';

interface FireworkProps {
  color: string;
  size: number;
  left: string;
  delay: number;
}

export const Firework: React.FC<FireworkProps> = ({ color, size, left, delay }) => {
  return (
    <div
      className="absolute animate-firework"
      style={{
        left,
        top: '100%',
        width: size,
        height: size,
        animationDelay: `${delay}s`,
      }}
    >
      <span
        className="absolute w-0.5 h-0.5 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 ${size / 10}px ${size / 20}px ${color}`,
        }}
      />
    </div>
  );
};