import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetYear: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetYear }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetYear, 0, 1);
      const difference = target.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial calculation
    return () => clearInterval(timer);
  }, [targetYear]);

  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <h2 className="text-2xl text-cyan-300 font-light flex items-center gap-2">
        <Clock className="w-6 h-6 animate-spin-slow" />
        Countdown to {targetYear}
      </h2>
      <div className="flex gap-4">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-lg p-3 min-w-[80px]">
              <span className="text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-sm text-cyan-300 uppercase mt-1 block">{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};