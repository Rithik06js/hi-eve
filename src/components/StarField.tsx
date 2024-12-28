import React from 'react';

export const StarField: React.FC = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 50 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          opacity: Math.random() * 0.7 + 0.3,
        }}
      />
    ))}
  </div>
);