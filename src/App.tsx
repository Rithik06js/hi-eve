import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Firework } from './components/Firework';
import { GlowingOrb } from './components/GlowingOrb';
import { MainCard } from './components/MainCard';
import { NameEntryForm } from './components/NameEntryForm';
import { WelcomeMessage } from './components/WelcomeMessage';
import type { Step } from './types';

const fireworks = [
  { color: '#FF5252', size: 120, left: '20%', delay: 0 },
  { color: '#FFD740', size: 100, left: '40%', delay: 0.5 },
  { color: '#64FFDA', size: 140, left: '60%', delay: 1 },
  { color: '#FF4081', size: 110, left: '80%', delay: 1.5 },
];

const orbs = [
  { color: '#00fff2', size: 60, left: '15%', delay: 0, duration: 4 },
  { color: '#ff00f2', size: 80, left: '85%', delay: 1, duration: 5 },
  { color: '#00ff95', size: 70, left: '50%', delay: 2, duration: 6 },
];

function App() {
  const [step, setStep] = useState<Step>('name-entry');
  const [name, setName] = useState('');

  const handleNameSubmit = (submittedName: string) => {
    setName(submittedName);
    setStep('welcome-message');
  };

  const handleWelcomeComplete = () => {
    setStep('greeting-card');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center">
      <AnimatedBackground />
      
      {step === 'greeting-card' && (
        <>
          {fireworks.map((props, index) => (
            <Firework key={`firework-${index}`} {...props} />
          ))}
          
          {orbs.map((props, index) => (
            <GlowingOrb key={`orb-${index}`} {...props} />
          ))}
        </>
      )}
      
      {step === 'name-entry' && (
        <NameEntryForm onSubmit={handleNameSubmit} />
      )}
      
      {step === 'welcome-message' && (
        <WelcomeMessage 
          name={name}
          onComplete={handleWelcomeComplete}
        />
      )}
      
      {step === 'greeting-card' && <MainCard name={name} />}
    </div>
  );
}

export default App;