'use client';

import { useState, useEffect, useRef } from 'react';

const MiloIntro = () => {
  const [stage, setStage] = useState<'boot' | 'milo' | 'finished'>('boot');
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const bootLines = [
    "> INITIALIZING PACK_OS v4.2.0...",
    "> LOADING ENCRYPTION MODULES... [DONE]",
    "> CONNECTING TO WOLF-PAK UPLINK...",
    "> SEARCHING FOR M.I.L.O. CORE...",
    "> FOUND: Multilevel Intelligence Linkage Operator",
    "> BYPASSING FIREWALLS...",
    "> SYNCING NEURAL LINKS...",
    "> BOOT COMPLETE."
  ];

  useEffect(() => {
    let currentLine = 0;
    let timeoutId: NodeJS.Timeout;

    const typeLine = () => {
      if (currentLine < bootLines.length) {
        setLogs(prev => [...prev, bootLines[currentLine]]);
        currentLine++;
        // Random delay between 200ms and 800ms
        const delay = Math.random() * 600 + 200;
        timeoutId = setTimeout(typeLine, delay);
      } else {
        // Wait 1 second after boot, then show MILO
        timeoutId = setTimeout(() => {
          setStage('milo');
        }, 1000);
      }
    };

    // Start the sequence
    typeLine();

    return () => clearTimeout(timeoutId);
  }, []);

  // Effect to handle the MILO stage transition duration
  useEffect(() => {
    if (stage === 'milo') {
      const dismissTimer = setTimeout(() => {
        setStage('finished');
      }, 4000); // Show MILO for 4 seconds then dismiss
      return () => clearTimeout(dismissTimer);
    }
  }, [stage]);

  // Auto-scroll logs
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  if (stage === 'finished') return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono">
        
        {/* Terminal Container */}
        <div id="terminal-container" className="w-full max-w-lg p-6 relative bg-[#050505] text-[#00f2ff] font-mono border border-[#00f2ff] shadow-[0_0_15px_rgba(0,242,255,0.2)] min-h-[300px] overflow-hidden">
            
            {/* Stage 1: Boot Logs */}
            {stage === 'boot' && (
                <>
                    <div id="terminal-header" className="text-cyan-500 border-b border-cyan-900/50 pb-2 mb-4 text-sm tracking-widest animate-pulse">
                        //_SYS_STATUS: INITIALIZING...
                    </div>
                    
                    <div 
                        id="terminal-body" 
                        ref={scrollRef}
                        className="h-64 overflow-hidden flex flex-col justify-end text-sm text-cyan-300/80 space-y-1 whitespace-pre-wrap leading-relaxed"
                    >
                        {logs.map((log, i) => (
                            <div key={i}>
                                {log}
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Stage 2: MILO Visual */}
            {stage === 'milo' && (
                <div className="flex flex-col items-center justify-center h-full">
                    {/* Header update for this stage */}
                    <div className="absolute top-0 left-0 right-0 p-6">
                         <div className="text-cyan-500 border-b border-cyan-900/50 pb-2 mb-4 text-sm tracking-widest">
                            //_MILO: ACTIVE
                        </div>
                    </div>
                    
                    <div id="milo-visual" className="text-center animate-[glitch-appear_0.5s_ease-in-out]">
                        
                        <div className="relative mb-8">
                            {/* The Glow */}
                            <div className="milo-glow w-24 h-24 mx-auto rounded-full bg-[radial-gradient(circle,#00f2ff_0%,transparent_70%)] blur-md animate-[pulse_2s_infinite]"></div>
                            
                            {/* Core (using the CSS classes from previous step or tailwind) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full border border-cyan-400 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                                 <div className="w-16 h-16 border border-white/20 rounded-full animate-spin-slow"></div>
                                 <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                            </div>
                        </div>

                        <p className="milo-text text-2xl font-bold tracking-[0.3em] text-white">
                            M.I.L.O. <span className="text-cyan-500">ONLINE</span>
                        </p>
                        
                        <p className="mt-2 text-xs text-cyan-500/50 tracking-widest">
                            MACHINE INTELLIGENCE LOGISTICS OPERATOR
                        </p>

                    </div>
                </div>
            )}

        </div>
    </div>
  );
};

export default MiloIntro;
