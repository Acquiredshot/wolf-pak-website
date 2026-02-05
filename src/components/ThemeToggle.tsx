'use client';

import { useState, useEffect } from 'react';
import { Eye, Flame } from 'lucide-react';

const ThemeToggle = () => {
  const [isRecon, setIsRecon] = useState(false);

  useEffect(() => {
    if (isRecon) {
      document.documentElement.classList.add('recon-mode');
    } else {
      document.documentElement.classList.remove('recon-mode');
    }
  }, [isRecon]);

  return (
    <button
      onClick={() => setIsRecon(!isRecon)}
      className={`fixed top-24 right-4 z-50 flex items-center gap-2 px-3 py-1.5 border rounded-sm backdrop-blur-md transition-all group clip-corner ${
        isRecon 
        ? 'bg-red-900/80 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
        : 'bg-slate-950/80 border-slate-700 hover:border-cyan-500/50'
      }`}
    >
      {isRecon ? (
        <>
          <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-orange-500 uppercase tracking-wider">THERMAL_OPTICS</span>
        </>
      ) : (
        <>
          <Eye className="w-4 h-4 text-slate-500 group-hover:text-cyan-500 transition-colors" />
          <span className="text-[10px] font-mono font-bold text-slate-500 group-hover:text-cyan-500 transition-colors uppercase">STD_VISION</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
