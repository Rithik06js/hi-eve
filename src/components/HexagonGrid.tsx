import React from 'react';

export const HexagonGrid: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: '60px',
          height: '60px',
          backgroundColor: 'transparent',
          border: '2px solid rgba(255,255,255,0.1)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);