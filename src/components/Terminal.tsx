'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{cmd: string, output: string}[]>([
    { cmd: 'init', output: 'Wolf-Pak Terminal v2.0. Type "help" for available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [history, isOpen]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output = '';

    switch (cleanCmd) {
      case 'help':
        output = 'Available commands:\n  help      — Show this list\n  status    — System status\n  services  — List capabilities\n  contact   — Contact info\n  clear     — Clear terminal\n  whoami    — Identify user';
        break;
      case 'status':
        output = 'System Status: Online\nAll services operational.';
        break;
      case 'services':
        output = 'Active Services:\n  Agent Architecture\n  Multi-Agent Orchestration\n  LLM Integration\n  Agentic Development';
        break;
      case 'contact':
        output = 'Email: codycodesit@pak-innovations.net\n       elijah.f@pak-innovations.net';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'whoami':
        output = 'guest';
        break;
      default:
        output = `Unknown command: "${cleanCmd}". Type "help" for options.`;
    }

    setHistory(prev => [...prev, { cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!input.trim()) return;
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <>
      {/* Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-4 md:right-8 z-50 p-2.5 rounded-full border transition-all ${isOpen ? 'bg-slate-900 border-violet-400/30 text-violet-400' : 'bg-white border-violet-200 text-slate-400 hover:text-slate-900 hover:border-violet-300 shadow-sm'}`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <TerminalIcon className="w-5 h-5" />}
      </button>

      {/* Terminal Window */}
      <div 
        className={`fixed bottom-20 right-4 md:right-8 w-[95vw] md:w-[460px] rounded-2xl shadow-2xl z-40 transition-all duration-200 origin-bottom-right overflow-hidden flex flex-col border border-slate-700/50 ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ height: '280px', background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(16px)' }}
      >
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
           <div className="flex items-center gap-2">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
           </div>
           <div className="text-xs text-slate-400 font-mono">terminal</div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 font-mono text-xs text-slate-300 overflow-y-auto" onClick={() => inputRef.current?.focus()}>
           {history.map((entry, i) => (
             <div key={i} className="mb-2">
               <div className="flex gap-2">
                 <span className="text-cyan-400">$</span>
                 <span className="text-white">{entry.cmd}</span>
               </div>
               <div className="text-slate-500 whitespace-pre-wrap pl-4 mt-0.5 leading-relaxed">
                 {entry.output}
               </div>
             </div>
           ))}
           
           <div className="flex gap-2 mt-1">
             <span className="text-cyan-400">$</span>
             <input
               ref={inputRef}
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={handleKeyDown}
               className="bg-transparent border-none outline-none text-white w-full font-mono placeholder-slate-700"
               placeholder="type a command..."
               autoFocus
               autoComplete="off"
             />
           </div>
           <div ref={bottomRef}></div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
