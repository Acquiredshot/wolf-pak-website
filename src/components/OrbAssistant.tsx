'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Sparkles } from 'lucide-react';

type Message = {
  role: 'user' | 'ai';
  text: string;
};

const OrbAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Identity verified. Wolf-Pak systems online. How can I assist you, Operative?' }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const processCommand = async (text: string) => {
    setIsProcessing(true);
    const lowerText = text.toLowerCase();
    
    // Simulate AI thinking delay
    await new Promise(resolve => setTimeout(resolve, 800));

    let response = '';
    
    // Simple Intent Matching (Pre-LLM Logic)
    if (lowerText.includes('hello') || lowerText.includes('hi')) {
      response = "Greetings. Channel secure.";
    } else if (lowerText.includes('who are you') || lowerText.includes('identity')) {
      response = "I am the Wolf-Pak construct. A digital fragment designed for tactical navigation and reconnaissance.";
    } else if (lowerText.includes('service') || lowerText.includes('offer')) {
      response = "We provide Tier-1 Cyber Defense, Network Infrastructure, and Custom SaaS Architectures. Shall I highlight the Services sector?";
      // Potentially scroll to services here in future interaction
    } else if (lowerText.includes('contact') || lowerText.includes('email')) {
      response = "Opening secure comms requires Level 1 clearance. Use the contact form below or email us directly at codycodesit@pak-innovations.net or elijah.f@pak-innovations.net.";
    } else if (lowerText.includes('mission')) {
      response = "Our mission is absolute: Secure the Future. We engineer the digital fortress.";
    } else if (lowerText.includes('thermal') || lowerText.includes('vision')) {
      response = "Thermal Optics can be toggled via the HUD control in the upper right sector.";
    } else {
      response = "Command not recognized. My database is currently limited to mission parameters. Try asking about 'services', 'mission', or 'contact'.";
    }

    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setIsProcessing(false);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    
    processCommand(userText);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      
      {/* Chat Interface (Glass Panel) */}
      <div 
        className={`bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-[0_0_50px_rgba(14,165,233,0.15)] mb-6 w-[90vw] md:w-[400px] overflow-hidden transition-all duration-500 origin-bottom ${
          isOpen 
            ? 'opacity-100 scale-100 pointer-events-auto max-h-[500px]' 
            : 'opacity-0 scale-90 pointer-events-none max-h-0'
        }`}
      >
        {/* Header */}
        <div className="bg-cyan-950/30 px-4 py-3 border-b border-cyan-500/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-500 tracking-widest uppercase">AI_CONSTRUCT // V.1.0</span>
            </div>
            <div className="flex gap-1">
                {[1,2,3].map(i => (
                    <div key={i} className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}}></div>
                ))}
            </div>
        </div>

        {/* Messages Amount */}
        <div className="p-4 h-[300px] overflow-y-auto custom-scrollbar flex flex-col gap-3">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] text-sm p-3 rounded-lg font-mono leading-relaxed ${
                        msg.role === 'user' 
                        ? 'bg-cyan-900/40 text-cyan-100 border border-cyan-500/30 rounded-tr-none' 
                        : 'bg-slate-900/60 text-slate-300 border border-slate-700/50 rounded-tl-none'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isProcessing && (
                <div className="flex justify-start">
                    <div className="bg-slate-900/60 text-cyan-500 text-xs p-3 rounded-lg border border-slate-700/50 rounded-tl-none animate-pulse font-mono">
                        PROCESSING_REQUEST...
                    </div>
                </div>
            )}
            <div ref={messagesEndRef}></div>
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-cyan-500/20 bg-black/20 backdrop-blur-sm flex gap-2">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter command..."
                className="flex-1 bg-transparent border border-slate-700 rounded-md px-3 py-2 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors placeholder-slate-600"
            />
            <button 
                onClick={handleSend}
                className="bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 p-2 rounded-md border border-cyan-500/50 transition-all"
            >
                <Send className="w-4 h-4" />
            </button>
            <button 
                onClick={() => setMessages(prev => [...prev, { role: 'ai', text: "Voice Module: OFFLINE [Restricted Access]. Text input required." }])}
                className="bg-slate-800/50 hover:bg-red-900/40 text-slate-400 hover:text-red-400 p-2 rounded-md border border-slate-700 hover:border-red-500/50 transition-all"
                title="Voice Input"
            >
                <Mic className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* THE ORB TRIGGER */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer group orb-float"
      >
        {/* Core Light */}
        <div className="w-16 h-16 rounded-full bg-slate-950/50 backdrop-blur-sm border border-cyan-500/30 relative z-20 flex items-center justify-center overflow-hidden">
             
             {/* Refracting Shards (CSS shapes) */}
             <div className="absolute inset-0 shard-spin opacity-50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-16 bg-gradient-to-b from-cyan-400/20 to-transparent transform rotate-45"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-16 bg-gradient-to-t from-blue-500/20 to-transparent transform -rotate-45"></div>
             </div>
             
             <div className="absolute inset-0 shard-spin-reverse opacity-70">
                <div className="absolute top-2 left-2 w-full h-1 bg-cyan-300/30 rotate-12"></div>
                <div className="absolute top-8 right-2 w-full h-1 bg-purple-400/20 -rotate-12"></div>
             </div>

             {/* Center Fragment */}
             <div className={`w-3 h-3 bg-white rotate-45 transform transition-all duration-300 shadow-[0_0_15px_white] z-30 ${isOpen ? 'scale-125' : 'scale-100'} ${isProcessing ? 'animate-spin' : ''}`}></div>
             
             {/* Icon Overlay (Optional, if we want it to look like a mic/bot, but shapes are better) */}
        </div>
        
        {/* Outer Glow Rings using SVG / CSS */}
        <div className="absolute -inset-4 rounded-full border border-cyan-500/10 z-10 animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute -inset-1 rounded-full border border-cyan-400/20 z-10 animate-pulse"></div>
        
        {/* Prismatic flare backdrop */}
        <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      </div>

    </div>
  );
};

export default OrbAssistant;
