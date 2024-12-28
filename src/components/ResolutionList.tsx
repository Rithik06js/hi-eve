import React from 'react';
import { CheckCircle2, Target } from 'lucide-react';

const resolutions = [
  "Embrace innovation & change",
  "Build meaningful connections",
  "Achieve personal growth",
  "Make a positive impact",
  "Chase your dreams boldly"
];

export const ResolutionList: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 mb-8">
    <div className="flex items-center gap-2 mb-4">
      <Target className="w-6 h-6 text-purple-400" />
      <h3 className="text-xl font-semibold text-white">2025 Resolutions</h3>
    </div>
    <div className="space-y-3">
      {resolutions.map((resolution, index) => (
        <div
          key={index}
          className="flex items-center gap-3 text-cyan-100 animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <span>{resolution}</span>
        </div>
      ))}
    </div>
  </div>
);