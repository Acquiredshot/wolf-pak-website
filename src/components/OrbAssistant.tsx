'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageCircle, X } from 'lucide-react';

type Message = {
  role: 'user' | 'ai';
  text: string;
};

const OrbAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Hey! I\'m the Wolf-Pak assistant. How can I help you today?' }
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
    
    await new Promise(resolve => setTimeout(resolve, 800));

    let response = '';
    
    if (lowerText.includes('hello') || lowerText.includes('hi')) {
      response = "Hey there! What can I help you with?";
    } else if (lowerText.includes('who are you') || lowerText.includes('identity')) {
      response = "I'm the Wolf-Pak AI assistant — here to help you learn about our agentic AI services.";
    } else if (lowerText.includes('service') || lowerText.includes('offer')) {
      response = "We build autonomous AI agents, multi-agent systems, LLM integrations, and full-stack agentic applications. Check out the Services section for details!";
    } else if (lowerText.includes('contact') || lowerText.includes('email')) {
      response = "You can reach us at codycodesit@pak-innovations.net or elijah.f@pak-innovations.net — or use the contact form below.";
    } else if (lowerText.includes('mission') || lowerText.includes('about')) {
      response = "We design, build, and deploy autonomous agent systems that reason, plan, and act. We're building the future of intelligent automation.";
    } else {
      response = "I'm not sure about that one. Try asking about our services, mission, or how to get in contact!";
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
      
      {/* Chat Panel */}
      <div 
        className={`glass-card mb-6 w-[90vw] md:w-[380px] overflow-hidden transition-all duration-300 origin-bottom ${
          isOpen 
            ? 'opacity-100 scale-100 pointer-events-auto max-h-[500px]' 
            : 'opacity-0 scale-95 pointer-events-none max-h-0'
        }`}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-violet-200/60 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-medium text-slate-900">Wolf-Pak Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors">
              <X className="w-4 h-4" />
            </button>
        </div>

        {/* Messages */}
        <div className="p-4 h-[280px] overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] text-sm p-3 rounded-xl leading-relaxed ${
                        msg.role === 'user' 
                        ? 'bg-violet-100 text-slate-900 border border-violet-200 rounded-tr-sm' 
                        : 'bg-white/80 text-slate-700 border border-violet-200/60 rounded-tl-sm'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isProcessing && (
                <div className="flex justify-start">
                    <div className="bg-white/80 text-slate-500 text-sm p-3 rounded-xl border border-violet-200/60 rounded-tl-sm">
                      <div className="flex gap-1">
                        {[0,1,2].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" style={{animationDelay: `${i*150}ms`}} />)}
                      </div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef}></div>
        </div>

        {/* Input */}
        <div className="p-3 border-t border-violet-200/60 flex gap-2">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="flex-1 bg-white/80 border border-violet-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:border-violet-500 focus:outline-none transition-colors placeholder-slate-400"
            />
            <button 
                onClick={handleSend}
                className="bg-violet-100 hover:bg-violet-200 text-violet-600 p-2 rounded-lg border border-violet-200 transition-colors"
            >
                <Send className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        <div className="h-12 w-12 rounded-full bg-white border border-violet-200 flex items-center justify-center shadow-lg hover:border-violet-300 transition-all">
          <MessageCircle className={`w-5 h-5 transition-colors ${isOpen ? 'text-violet-600' : 'text-slate-400 group-hover:text-slate-900'}`} />
        </div>
      </button>

    </div>
  );
};

export default OrbAssistant;
