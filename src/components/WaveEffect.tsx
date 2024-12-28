import React from 'react';

export const WaveEffect: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 3 }).map((_, i) => (
      <div
        key={i}
        className="absolute bottom-0 w-[200%] h-[60px] animate-wave"
        style={{
          background: `rgba(0, 255, ${242 + i * 10}, 0.${1 + i})`,
          left: '-50%',
          animationDelay: `${i * 0.5}s`,
        }}
      />
    ))}
  </div>
);