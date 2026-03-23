import Link from 'next/link';
import { ArrowRight, Bot, BrainCircuit, Workflow } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex items-center min-h-[90vh] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-violet-200 bg-violet-100/60 backdrop-blur-sm mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              <span className="text-xs font-medium text-violet-700">Agents Active</span>
            </div>
            
            <h1 className="text-4xl tracking-tight font-bold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block mb-2 text-slate-800">Building</span>
              <span className="block gradient-text">
                Agentic Systems
              </span>
            </h1>
            
            <p className="mt-6 text-base text-slate-600 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 leading-relaxed">
              Wolf-Pak Innovations builds autonomous AI agents and intelligent systems that think, adapt, and execute. We architect the agentic infrastructure powering the next era of technology.
            </p>

            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 rounded-lg transition-all duration-200 shadow-lg shadow-violet-500/25">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white/70 border border-violet-200 hover:bg-white hover:border-violet-300 rounded-lg transition-all duration-200">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-violet-200/60 flex gap-8 sm:max-w-lg sm:mx-auto lg:mx-0 text-slate-500 text-sm">
               <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-cyan-600" />
                  <span>Autonomous</span>
               </div>
               <div className="flex items-center gap-2">
                  <Workflow className="h-4 w-4 text-violet-600" />
                  <span>Orchestrated</span>
               </div>
               <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4 text-fuchsia-600" />
                  <span>Intelligent</span>
               </div>
            </div>
          </div>

          {/* Right Side — Agent Dashboard Card */}
          <div className="mt-16 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             <div className="relative mx-auto w-full lg:max-w-md">
                <div className="relative block w-full glass-card p-6 overflow-hidden group">
                   
                   <div className="space-y-5 relative z-10">
                      <div className="flex items-center justify-between border-b border-violet-200/60 pb-4">
                         <div className="flex items-center space-x-3">
                            <div className="h-9 w-9 bg-violet-100 border border-violet-200 rounded-lg flex items-center justify-center">
                               <span className="text-cyan-600 font-bold text-lg">W</span>
                            </div>
                            <div className="text-xs text-slate-500">
                               <div className="font-medium text-slate-800">Wolf-Pak</div>
                               <div>Agent Platform</div>
                            </div>
                         </div>
                         <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Live
                         </div>
                      </div>
                      
                      <div className="space-y-3">
                         <div className="flex justify-between text-xs">
                           <span className="text-slate-500">Agent Uptime</span>
                           <span className="text-slate-800 font-medium">99.97%</span>
                         </div>
                         <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                           <div className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full w-[98%]"></div>
                         </div>
                         
                         <div className="flex justify-between text-xs pt-1">
                           <span className="text-slate-500">Task Queue</span>
                           <span className="text-emerald-600 font-medium">Nominal</span>
                         </div>
                         <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                           <div className="h-full bg-emerald-500 rounded-full w-[12%]"></div>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                         <div className="h-24 glass-card !rounded-lg p-3 flex flex-col justify-between">
                            <span className="text-[10px] text-slate-500 font-medium">Agent Load</span>
                            <div className="flex items-end space-x-1 h-10">
                               {[40, 70, 45, 90, 60, 80].map((h, i) => (
                                 <div key={i} className="flex-1 bg-violet-200 rounded-sm hover:bg-violet-300 transition-colors" style={{height: `${h}%`}}></div>
                               ))}
                            </div>
                         </div>
                         <div className="h-24 glass-card !rounded-lg p-3 flex flex-col justify-between">
                            <span className="text-[10px] text-slate-500 font-medium">Task Flow</span>
                            <div className="relative h-10 w-full overflow-hidden">
                               <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none">
                                 <path d="M0,40 L10,35 L20,38 L30,20 L40,25 L50,10 L60,15 L70,5 L80,10 L90,0 L100,5" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" />
                                 <defs>
                                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                     <stop offset="0%" stopColor="#06b6d4" />
                                     <stop offset="100%" stopColor="#8b5cf6" />
                                   </linearGradient>
                                 </defs>
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
