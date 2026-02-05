'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, MoveHorizontal } from 'lucide-react';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{cmd: string, output: string}[]>([
    { cmd: 'init', output: 'Wolf-Pak Terminal v1.0. Type "help" for valid commands.' }
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
        output = 'AVAILABLE COMMANDS: \n- help: Show this list \n- status: Check system integrity \n- services: List active capabilities \n- contact: Secure channel info \n- clear: Clear terminal\n- whoami: Identify user';
        break;
      case 'status':
        output = 'SYSTEM STATUS: ONLINE\nTHREAT LEVEL: LOW\nENCRYPTION: AES-256 ACTIVE\nALL SYSTEMS NOMINAL.';
        break;
      case 'services':
        output = 'ACTIVE MODULES:\n> CYBER_DEFENSE [active]\n> SAAS_ARCH [deploying]\n> NET_INFRA [stable]\n> CLOUD_MATRIX [connected]';
        break;
      case 'contact':
        output = 'SECURE COMMS:\nEmail: codycodesit@pak-innovations.net\nProto: HTTPS/TLS 1.3';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'whoami':
        output = 'User: GUEST_ACCESS\nPerms: READ_ONLY\nTrace: [MASKED]';
        break;
      default:
        output = `Command not recognized: "${cleanCmd}". Type "help".`;
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
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-4 md:right-8 z-50 p-3 bg-black border border-cyan-500 rounded-full text-cyan-500 hover:bg-cyan-900/20 hover:shadow-[0_0_15px_#0ea5e9] transition-all duration-300 ${isOpen ? 'rotate-180 bg-red-900/20 border-red-500 text-red-500' : ''}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <TerminalIcon className="w-6 h-6" />}
      </button>

      {/* Terminal Window */}
      <div 
        className={`fixed bottom-24 right-4 md:right-8 w-[95vw] md:w-[500px] bg-slate-950/95 border border-slate-700 rounded-lg shadow-2xl backdrop-blur-xl z-40 transition-all duration-300 origin-bottom-right overflow-hidden flex flex-col ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'}`}
        style={{ height: '300px' }}
      >
        {/* Header Bar */}
        <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between handle cursor-move">
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
           </div>
           <div className="text-xs font-mono text-slate-500">guest@wolf-pak:~/root</div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 font-mono text-xs md:text-sm text-slate-300 overflow-y-auto custom-scrollbar" onClick={() => inputRef.current?.focus()}>
           {history.map((entry, i) => (
             <div key={i} className="mb-2">
               <div className="flex gap-2">
                 <span className="text-cyan-500">$</span>
                 <span className="text-white">{entry.cmd}</span>
               </div>
               <div className="text-slate-400 whitespace-pre-wrap pl-4 mt-1 leading-relaxed">
                 {entry.output}
               </div>
             </div>
           ))}
           
           {/* Input Line */}
           <div className="flex gap-2 mt-2">
             <span className="text-cyan-500 animate-pulse">$</span>
             <input
               ref={inputRef}
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={handleKeyDown}
               className="bg-transparent border-none outline-none text-white w-full font-mono placeholder-slate-600"
               placeholder="Enter command..."
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
