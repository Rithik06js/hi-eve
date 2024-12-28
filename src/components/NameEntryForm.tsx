import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface NameEntryFormProps {
  onSubmit: (name: string) => void;
}

export const NameEntryForm: React.FC<NameEntryFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="relative z-10 p-8 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Enter Your Name
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Your name..."
          autoFocus
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          disabled={!name.trim()}
        >
          Continue <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};