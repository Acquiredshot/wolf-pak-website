import { Shield, Cloud, Code, Server, Cpu } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Tech Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column: Mission Text */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-sm font-mono text-cyan-500 font-semibold tracking-widest uppercase mb-2">
              //_MISSION_BRIEFING
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white font-mono mb-6">
              MISSION: <span className="text-cyan-500 animate-pulse">SECURE THE FUTURE</span>
            </h3>
            
            <div className="prose prose-invert max-w-none text-slate-400 font-sans leading-relaxed space-y-6">
              <p>
                <strong className="text-white">Wolf-Pak Innovations LLC</strong> is an elite technology firm focused on mission-critical infrastructure and cybersecurity. We provide the <span className="text-cyan-400 font-mono">"Alpha"</span> class of service for businesses that require zero downtime, maximum security, and forward-thinking innovation.
              </p>
              <p>
                Beyond defense, we specialize in the architecture of SaaS technology, building high-convenience digital ecosystems that simplify the future. We don't just solve today's problems; we engineer the platforms that will define tomorrow.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="font-mono text-lg text-white italic border-l-4 border-cyan-500 pl-4 py-2 bg-gradient-to-r from-cyan-900/20 to-transparent">
                "We are the pack you want in your corner when the stakes are high—because all things can withstand when the pack guides your hand."
              </p>
            </div>
          </div>

          {/* Right Column: Capabilities HUD */}
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/10 rounded-lg blur-lg transform rotate-2"></div>
            <div className="relative bg-slate-900/80 border border-slate-700 p-8 rounded-sm backdrop-blur-sm tech-border clip-corner">
              
              <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">[CAPABILITIES_MANIFEST]</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-cyan-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">CYBER_DEFENSE</p>
                    <p className="text-xs text-slate-400 mt-1">Level 5 security assessments and real-time threat monitoring.</p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <Cpu className="h-5 w-5 text-cyan-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">SAAS_INNOVATION</p>
                    <p className="text-xs text-slate-400 mt-1">Developing scalable, cloud-native software for unparalleled convenience.</p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <Server className="h-5 w-5 text-cyan-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">NET_INFRASTRUCTURE</p>
                    <p className="text-xs text-slate-400 mt-1">High-performance systems engineered for absolute reliability.</p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <Code className="h-5 w-5 text-cyan-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">CUSTOM_DEV</p>
                    <p className="text-xs text-slate-400 mt-1">Tailored software solutions built from the ground up.</p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <Cloud className="h-5 w-5 text-cyan-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">CLOUD_MATRIX</p>
                    <p className="text-xs text-slate-400 mt-1">Seamless migration and management of global cloud resources.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>STATUS: ACTIVE</span>
                <span>SEC_LEVEL: ALPHA</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
