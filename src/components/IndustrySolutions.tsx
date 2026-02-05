import { Activity, Play, Terminal } from 'lucide-react';

const IndustrySolutions = () => {
  return (
    <div id="solutions" className="py-24 relative backdrop-blur-sm bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-500 font-semibold tracking-widest uppercase">
            //_SECTOR DEPLOYMENT
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl font-mono">
            INDUSTRY <span className="text-cyan-500">SOLUTIONS</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto font-light">
            Specialized tactical software suites for critical sectors.
          </p>
        </div>

        <div className="mt-10 max-w-lg mx-auto">
           {/* Home Health Care Card */}
           <div className="relative group p-8 rounded-sm bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] clip-corner overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-cyan-500/30 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-cyan-500/30 rounded-bl-lg"></div>
                
                <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan-500/50">
                    [MED_SYS_V1]
                </div>

                <div className="flex items-center justify-center mb-6">
                    <div className="h-16 w-16 bg-cyan-900/20 rounded-full flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_#0ea5e9] transition-all duration-300">
                        <Activity className="h-8 w-8 text-cyan-400" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-center text-white font-mono mb-4 group-hover:text-cyan-300 transition-colors">
                    HOME HEALTH CARE
                </h3>
                
                <p className="text-slate-400 text-center mb-6 font-sans leading-relaxed">
                    Advanced patient management and scheduling system. Secure, HIPAA-compliant architecture with real-time data synchronization.
                </p>

                {/* Build Hash Display */}
                <div className="mb-8 px-4 py-2 bg-black/40 rounded border border-slate-800/50">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-slate-500">BUILD_SHA:</span>
                        <span className="text-cyan-900 truncate ml-2 max-w-[150px]">61fabb0b11f29e005c5ec24f0f80c565c90989ff3fa1c1ade561765b9222dafc</span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <a 
                        href="https://healthcare-demo-template.vercel.app" 
                        className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-bold text-white transition duration-300 ease-out border border-cyan-500 bg-black group-hover:bg-cyan-900/20 shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
                            <Terminal className="w-5 h-5 mr-2" /> LAUNCH
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-cyan-400 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <Play className="w-4 h-4 mr-2" /> LIVE DEMO
                        </span>
                        <span className="relative invisible">LIVE DEMO</span>
                    </a>
                </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions;
