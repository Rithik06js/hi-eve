import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeMessageProps {
  name: string;
  onComplete: () => void;
}

const messages = [
  "As the clock strikes midnight",
  "A new chapter begins",
  "Full of endless possibilities",
];

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < messages.length) {
        setVisible(false);
        setTimeout(() => {
          setCurrentIndex(i => i + 1);
          setVisible(true);
        }, 500);
      } else {
        onComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  return (
    <div className="relative z-10 p-8 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 min-w-[400px] flex items-center justify-center">
      <div className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {currentIndex === 0 ? (
          <div className="text-center">
            <p className="text-3xl text-white mb-2">Hello,</p>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {name}
            </p>
          </div>
        ) : currentIndex <= messages.length ? (
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <p className="text-2xl text-white">{messages[currentIndex - 1]}</p>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
        ) : null}
      </div>
    </div>
  );
};