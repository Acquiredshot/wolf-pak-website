import { Bot, BrainCircuit, Code, Workflow, Cpu } from 'lucide-react';

const capabilities = [
  { icon: Bot, title: 'Agent Architecture', desc: 'Autonomous AI agents that reason, plan, and execute complex tasks.' },
  { icon: Cpu, title: 'LLM Orchestration', desc: 'Large language model integration with tool-use and RAG pipelines.' },
  { icon: Workflow, title: 'Multi-Agent Ops', desc: 'Coordinated agent systems for enterprise-scale problem solving.' },
  { icon: Code, title: 'Agentic Development', desc: 'Full-stack agentic applications and intelligent copilots.' },
  { icon: BrainCircuit, title: 'AI Infrastructure', desc: 'Scalable platforms for deploying and managing AI agent fleets.' },
];

const About = () => {
  return (
    <div id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="mb-12 lg:mb-0">
            <p className="text-xs font-mono font-medium uppercase tracking-wider text-amber-400 mb-3">// About us</p>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Building the future of<br />
              <span className="gradient-text">autonomous intelligence</span>
            </h3>

            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                <strong className="text-white">Wolf-Pak Innovations LLC</strong> is a technology firm at the forefront of the agentic AI revolution. We design, build, and deploy autonomous agent systems that can reason, plan, and act — delivering intelligent automation for businesses ready to lead.
              </p>
              <p>
                From multi-agent orchestration to LLM-powered copilots, we specialize in building AI systems that don&apos;t just assist — they execute.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-lg text-slate-300 italic border-l-2 pl-4" style={{borderImageSource: 'linear-gradient(to bottom, #e8a33d, #ff3b3b)', borderImageSlice: 1}}>
                &ldquo;We are the pack you want in your corner when the stakes are high — because all things can withstand when the pack guides your hand.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Capabilities */}
          <div className="relative">
            <div className="glass-card p-6 relative">
              <span className="hud-corner tl"></span>
              <span className="hud-corner tr"></span>
              <span className="hud-corner bl"></span>
              <span className="hud-corner br"></span>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-sm font-medium text-white">Capabilities</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
              </div>

              <ul className="space-y-4">
                {capabilities.map((cap, idx) => (
                  <li key={cap.title} className="flex items-start group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${idx % 2 === 0 ? 'bg-cyan-500/10 border border-cyan-400/25' : 'bg-amber-500/10 border border-amber-400/25'}`}>
                        <cap.icon className={`h-4 w-4 ${idx % 2 === 0 ? 'text-cyan-400' : 'text-amber-400'}`} />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">{cap.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{cap.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
