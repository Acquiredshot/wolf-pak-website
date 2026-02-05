'use client';

import { useState, useEffect } from 'react';
import { Activity, Wifi, Server, Shield } from 'lucide-react';

const StatusDashboard = () => {
  const [latency, setLatency] = useState(24);
  const [load, setLoad] = useState(45);
  const [uptime, setUptime] = useState(99.98);

  // Simulate changing metrics
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
      
      // Tiny increment to uptime
      setUptime(prev => prev + 0.0001);

    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 md:right-auto md:bottom-8 md:left-8 z-40 p-4 md:p-0 pointer-events-none select-none">
      <div className="bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-sm p-4 w-full md:w-72 shadow-2xl clip-corner pointer-events-auto transition-all duration-300 hover:border-cyan-500/50 group">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
          <span className="text-[10px] font-mono font-bold text-cyan-500 tracking-widest flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            SYSTEM ONLINE
          </span>
          <span className="text-[10px] font-mono text-slate-500">v4.2.0</span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 font-mono text-xs">
          
          <div className="space-y-1">
            <div className="flex items-center text-slate-500 gap-1.5">
              <Wifi className="w-3 h-3" />
              <span>LATENCY</span>
            </div>
            <div className={`text-lg font-bold ${latency > 50 ? 'text-yellow-500' : 'text-cyan-400'}`}>
              {latency}ms
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center text-slate-500 gap-1.5">
              <Server className="w-3 h-3" />
              <span>LOAD</span>
            </div>
            <div className={`text-lg font-bold ${load > 80 ? 'text-red-500' : 'text-cyan-400'}`}>
              {load}%
            </div>
          </div>

        </div>

        {/* Rolling Log (Fake Activity) */}
        <div className="mt-3 overflow-hidden h-6 border-t border-slate-800/50 pt-1">
           <div className="text-[10px] text-slate-600 font-mono animate-pulse">
             {load > 50 ? '>> OPTIMIZING TRAFFIC ROUTE...' : '>> MONITORING SECURE PORT 443...'}
           </div>
        </div>

      </div>
    </div>
  );
};

export default StatusDashboard;
