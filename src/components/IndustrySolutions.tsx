import { Bot, ArrowUpRight } from 'lucide-react';

const IndustrySolutions = () => {
  return (
    <div id="solutions" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-violet-600 mb-3">Case studies</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Products
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto">
            Live agentic systems built and deployed for real-world industries.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
           <div className="glass-card p-8 group">
                <div className="flex items-center justify-center mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                        <Bot className="h-7 w-7 text-violet-600" />
                    </div>
                </div>

                <h3 className="text-xl font-semibold text-center text-slate-900 mb-3">
                    Home Healthcare Website Template
                </h3>
                
                <p className="text-slate-600 text-center mb-8 leading-relaxed">
                    AI-powered patient management and intelligent scheduling agent. HIPAA-compliant with autonomous task routing and real-time data synchronization.
                </p>

                <div className="flex justify-center">
                    <a 
                        href="https://healthcare-demo-template.vercel.app" 
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-medium hover:from-cyan-400 hover:to-violet-400 transition-all shadow-lg shadow-violet-500/20"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View live demo <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions;
