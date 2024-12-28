import React from 'react';

interface GlowingOrbProps {
  color: string;
  size: number;
  delay: number;
  duration: number;
  left: string;
}

export const GlowingOrb: React.FC<GlowingOrbProps> = ({ color, size, delay, duration, left }) => {
  return (
    <div
      className="absolute animate-float"
      style={{
        left,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          backgroundColor: color,
          filter: `blur(${size / 4}px)`,
          opacity: 0.6,
        }}
      />
    </div>
  );
};