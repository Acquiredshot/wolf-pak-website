import { Bot, BrainCircuit, Code, Workflow, ArrowRight, Network, ShieldCheck, Cloud, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Agent Architecture',
    description: 'Design and deployment of autonomous AI agents that reason, plan, and execute complex multi-step workflows without human intervention.',
    icon: Bot,
  },
  {
    title: 'Multi-Agent Orchestration',
    description: 'Orchestration of multi-agent systems where specialized agents collaborate, delegate, and coordinate to solve enterprise-scale problems.',
    icon: Workflow,
  },
  {
    title: 'LLM Integration',
    description: 'Custom integration of large language models with tool-use capabilities, RAG pipelines, and domain-specific knowledge bases.',
    icon: BrainCircuit,
  },
  {
    title: 'Agentic Development',
    description: 'Full-stack development of agentic applications — from intelligent copilots and autonomous assistants to self-healing infrastructure.',
    icon: Code,
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of robust network systems optimized for performance and reliability.',
    icon: Network,
  },
  {
    title: 'Cyber Defense',
    description: 'Comprehensive security assessments, threat monitoring, and protection strategies to safeguard your digital assets.',
    icon: ShieldCheck,
  },
  {
    title: 'Custom Development',
    description: 'Tailored software solutions designed to meet your specific business requirements and workflow.',
    icon: Wrench,
  },
  {
    title: 'Cloud Solutions',
    description: 'Seamless migration and management of cloud resources to enhance scalability and accessibility.',
    icon: Cloud,
  },
];

const Services = () => {
  return (
    <div id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-amber-400 mb-3">
            // What we build
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Autonomous Intelligence
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400 mx-auto">
            AI agents that think, plan, and execute — deployed at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div key={service.title} className="group glass-card p-6 relative overflow-hidden">
              <span className="hud-corner tl"></span>
              <div className="relative z-10">
                <div className={`flex items-center justify-center h-10 w-10 rounded-lg mb-4 transition-colors ${
                  idx % 2 === 0
                    ? 'bg-cyan-500/10 border border-cyan-400/25 text-cyan-400 group-hover:bg-cyan-500/20'
                    : 'bg-amber-500/10 border border-amber-400/25 text-amber-400 group-hover:bg-amber-500/20'
                }`}>
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{service.description}</p>

                <div className="mt-4">
                    <a href="/contact" className={`text-sm font-medium inline-flex items-center transition-colors group/link ${idx % 2 === 0 ? 'text-cyan-400 hover:text-cyan-300' : 'text-amber-400 hover:text-amber-300'}`}>
                        Learn more <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
