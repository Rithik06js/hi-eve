import React from 'react';
import { PartyPopper, Sparkles, Zap, Stars, Heart, Rocket } from 'lucide-react';
import { CyberText } from './CyberText';
import { CountdownTimer } from './CountdownTimer';
import { ResolutionList } from './ResolutionList';
import { WishingStars } from './WishingStars';

interface MainCardProps {
  name: string;
}

export const MainCard: React.FC<MainCardProps> = ({ name }) => (
  <div className="relative z-10 p-12 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 max-w-4xl w-full mx-auto">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse" />
    
    <div className="animate-float mb-8">
      <div className="relative">
        <PartyPopper className="w-24 h-24 text-cyan-400 mx-auto animate-pulse" />
        <Zap className="absolute top-0 right-1/4 w-8 h-8 text-yellow-400 animate-ping" />
        <Stars className="absolute top-1/4 left-1/4 w-6 h-6 text-purple-400 animate-spin" />
      </div>
    </div>
    
    <CyberText
      text="2025"
      className="text-9xl font-bold text-white mb-8 tracking-wider text-center"
    />
    
    <h1 className="text-7xl font-bold mb-10 text-center">
      <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
        Happy New Year,
      </span>
      <br />
      <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text animate-gradient">
        {name}!
      </span>
    </h1>

    <CountdownTimer targetYear={2025} />
    
    <div className="flex items-center justify-center gap-6 mb-10">
      <Sparkles className="w-10 h-10 text-cyan-400 animate-spin" />
      <div className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-xl animate-pulse border border-white/20">
        <span className="text-3xl text-white font-light tracking-widest">EMBRACE THE FUTURE</span>
      </div>
      <Sparkles className="w-10 h-10 text-pink-400 animate-spin" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <ResolutionList />
      <WishingStars />
    </div>
    
    <div className="relative">
      <p className="text-2xl text-cyan-100 max-w-2xl mx-auto leading-relaxed font-light text-center">
        May 2025 bring you endless opportunities, remarkable achievements, and beautiful moments 
        that light up your path. Here's to a year of growth, joy, and incredible possibilities!
      </p>
      <Heart className="absolute -right-4 -top-4 w-8 h-8 text-pink-400 animate-float" />
      <Stars className="absolute -left-4 -bottom-4 w-8 h-8 text-purple-400 animate-pulse" />
      <Rocket className="absolute right-0 bottom-0 w-10 h-10 text-yellow-400 animate-float" />
    </div>
  </div>
);