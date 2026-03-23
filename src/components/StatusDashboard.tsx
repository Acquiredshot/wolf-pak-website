'use client';

import { useState, useEffect } from 'react';
import { Wifi, Server } from 'lucide-react';

const StatusDashboard = () => {
  const [latency, setLatency] = useState(24);
  const [load, setLoad] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        const newVal = prev + change;
        return newVal < 10 ? 10 : newVal > 60 ? 60 : newVal;
      });

      setLoad(prev => {
        const change = Math.floor(Math.random() * 20) - 10;
        const newVal = prev + change;
        return newVal < 20 ? 20 : newVal > 90 ? 90 : newVal;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 md:right-auto md:bottom-8 md:left-8 z-40 p-4 md:p-0 pointer-events-none select-none">
      <div className="glass-card p-3 w-full md:w-56 pointer-events-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-violet-200/60">
          <span className="text-xs font-medium text-slate-700 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Online
          </span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center text-slate-500 gap-1.5">
              <Wifi className="w-3 h-3" />
              <span>Latency</span>
            </div>
            <div className={`text-base font-semibold font-mono ${latency > 50 ? 'text-amber-600' : 'text-slate-900'}`}>
              {latency}ms
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center text-slate-500 gap-1.5">
              <Server className="w-3 h-3" />
              <span>Load</span>
            </div>
            <div className={`text-base font-semibold font-mono ${load > 80 ? 'text-red-600' : 'text-slate-900'}`}>
              {load}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusDashboard;
