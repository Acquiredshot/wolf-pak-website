'use client';

import { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

const MiloIntro = () => {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');

  useEffect(() => {
    const revealTimer = setTimeout(() => setPhase('reveal'), 1800);
    const doneTimer = setTimeout(() => setPhase('done'), 3200);
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-[#f0f4ff] flex items-center justify-center transition-opacity duration-500 ${phase === 'reveal' ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center gap-6 animate-fade-up">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-violet-400/20 blur-xl animate-pulse"></div>
          <div className="relative h-14 w-14 rounded-2xl bg-white/80 border border-violet-200 backdrop-blur-sm flex items-center justify-center shadow-sm">
            <Cpu className="h-7 w-7 text-violet-600" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-900 tracking-tight">Wolf-Pak</p>
          <p className="text-xs text-slate-500 mt-1">Initializing systems</p>
        </div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiloIntro;
