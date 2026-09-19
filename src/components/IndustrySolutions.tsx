import { Bot, ArrowUpRight } from 'lucide-react';

const IndustrySolutions = () => {
  return (
    <div id="solutions" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-amber-400 mb-3">// Case studies</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Products
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400 mx-auto">
            Live agentic systems built and deployed for real-world industries.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
           <div className="glass-card p-8 group relative">
                <span className="hud-corner tl"></span>
                <span className="hud-corner tr"></span>
                <span className="hud-corner bl"></span>
                <span className="hud-corner br"></span>
                <div className="flex items-center justify-center mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center">
                        <Bot className="h-7 w-7 text-amber-400" />
                    </div>
                </div>

                <h3 className="font-heading text-xl font-semibold text-center text-white mb-3">
                    Home Healthcare Website Template
                </h3>

                <p className="text-slate-400 text-center mb-8 leading-relaxed">
                    AI-powered patient management and intelligent scheduling agent. HIPAA-compliant with autonomous task routing and real-time data synchronization.
                </p>

                <div className="flex justify-center">
                    <a
                        href="https://healthcare-demo-template.vercel.app"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-red-500 text-slate-950 text-sm font-medium hover:from-amber-300 hover:to-red-400 transition-all shadow-lg shadow-red-500/20"
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
