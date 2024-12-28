import React from 'react';
import { Star } from 'lucide-react';

const wishes = [
  { text: "Boundless Success", color: "text-yellow-400" },
  { text: "Infinite Possibilities", color: "text-green-400" },
  { text: "Lasting Happiness", color: "text-pink-400" },
  { text: "Inner Peace", color: "text-purple-400" },
  { text: "Abundant Prosperity", color: "text-blue-400" }
];

export const WishingStars: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6">
    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
      <Star className="w-6 h-6 text-yellow-400" />
      2025 Wishes For You
    </h3>
    <div className="space-y-4">
      {wishes.map((wish, index) => (
        <div
          key={index}
          className="flex items-center gap-3 animate-float"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <Star className={`w-5 h-5 ${wish.color}`} />
          <span className="text-cyan-100">{wish.text}</span>
        </div>
      ))}
    </div>
  </div>
);