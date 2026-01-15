import Link from 'next/link';
import { ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex items-center min-h-[90vh]">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-4 py-2 border border-cyan-500/30 bg-cyan-950/10 backdrop-blur-sm mb-6 clip-corner">
              <span className="flex h-2 w-2 bg-cyan-500 mr-2 animate-pulse shadow-[0_0_10px_#0ea5e9]"></span>
              <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase glow-text">System Online</span>
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-mono">
              <span className="block mb-2 animate-glitch" style={{animationDelay: '2s'}}>PROTOCOL:</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                DOMINANCE
              </span>
            </h1>
            
            <p className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light leading-relaxed font-sans border-l-2 border-cyan-900/50 pl-4">
              Wolf-Pak Innovations LLC deploys military-grade cybersecurity and next-gen infrastructure. We engineer the digital fortress you need to survive the modern web.
            </p>

            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link href="#contact" className="group relative w-full flex items-center justify-center px-8 py-3 border border-cyan-500 text-base font-bold text-black bg-cyan-500 hover:bg-cyan-400 md:py-4 md:text-lg transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.5)] clip-corner overflow-hidden">
                  <span className="relative z-10 flex items-center">INITIATE <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                </Link>
                <Link href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium text-cyan-300 bg-black/50 hover:bg-slate-900 hover:border-cyan-500/50 md:py-4 md:text-lg backdrop-blur-sm transition-all duration-300 clip-corner">
                  SCAN SERVICES
                </Link>
              </div>
            </div>
            
            <div className="mt-8 border-t border-slate-800 pt-6 flex justify-between items-center sm:max-w-lg sm:mx-auto lg:mx-0 text-slate-500 text-sm font-mono">
               <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-cyan-500" />
                  <span>SECURE_CONN</span>
               </div>
               <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-cyan-500" />
                  <span>LATENCY: LOW</span>
               </div>
               <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-cyan-500" />
                  <span>OPTIMIZED</span>
               </div>
            </div>
          </div>

          {/* Right Side Tech Graphic */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             <div className="relative mx-auto w-full lg:max-w-md">
                {/* Holographic Card Container */}
                <div className="relative block w-full bg-slate-950/80 rounded-sm tech-border p-8 overflow-hidden group">
                   
                   {/* Scanning Line Animation */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 shadow-[0_0_15px_#0ea5e9] animate-[scan_4s_linear_infinite]"></div>
                   
                   <div className="space-y-6 relative z-10 font-mono">
                      <div className="flex items-center justify-between border-b border-cyan-900/50 pb-4">
                         <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 bg-cyan-950 border border-cyan-700 flex items-center justify-center">
                               <span className="text-cyan-400 font-bold text-xl">W</span>
                            </div>
                            <div className="text-xs text-cyan-700">
                               <div>ID: WOLF-PAK</div>
                               <div>CLASS: ALPHA</div>
                            </div>
                         </div>
                         <div className="text-xs text-green-500 animate-pulse">● LIVE</div>
                      </div>
                      
                      <div className="space-y-2">
                         <div className="flex justify-between text-xs text-slate-500">
                           <span>ENCRYPTION</span>
                           <span className="text-cyan-400">2048-BIT</span>
                         </div>
                         <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                           <div className="h-full bg-cyan-600 w-[98%] shadow-[0_0_10px_#0ea5e9]"></div>
                         </div>
                         
                         <div className="flex justify-between text-xs text-slate-500 pt-2">
                           <span>THREAT LEVEL</span>
                           <span className="text-green-400">MINIMAL</span>
                         </div>
                         <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                           <div className="h-full bg-green-600 w-[12%]"></div>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                         <div className="h-24 bg-slate-900/50 border border-slate-800 p-3 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
                            <span className="text-[10px] text-slate-600">CPU LOAD</span>
                            <div className="flex items-end space-x-1 h-10">
                               {[40, 70, 45, 90, 60, 80].map((h, i) => (
                                 <div key={i} className="flex-1 bg-cyan-900/40 hover:bg-cyan-500 transition-colors" style={{height: `${h}%`}}></div>
                               ))}
                            </div>
                         </div>
                         <div className="h-24 bg-slate-900/50 border border-slate-800 p-3 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
                            <span className="text-[10px] text-slate-600">NET TRAFFIC</span>
                            <div className="relative h-10 w-full overflow-hidden">
                               <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none">
                                 <path d="M0,40 L10,35 L20,38 L30,20 L40,25 L50,10 L60,15 L70,5 L80,10 L90,0 L100,5" fill="none" stroke="#0ea5e9" strokeWidth="2" className="drop-shadow-[0_0_5px_#0ea5e9]" />
                               </svg>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
