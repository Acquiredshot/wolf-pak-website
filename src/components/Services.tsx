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
          <p className="text-sm font-medium text-violet-600 mb-3">
            What we build
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Autonomous Intelligence
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto">
            AI agents that think, plan, and execute — deployed at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div key={service.title} className="group glass-card p-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className={`flex items-center justify-center h-10 w-10 rounded-lg mb-4 transition-colors ${
                  idx % 2 === 0 
                    ? 'bg-cyan-100 border border-cyan-200 text-cyan-600 group-hover:bg-cyan-200/60' 
                    : 'bg-violet-100 border border-violet-200 text-violet-600 group-hover:bg-violet-200/60'
                }`}>
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{service.description}</p>
                
                <div className="mt-4">
                    <a href="/contact" className={`text-sm font-medium inline-flex items-center transition-colors group/link ${idx % 2 === 0 ? 'text-cyan-600 hover:text-cyan-700' : 'text-violet-600 hover:text-violet-700'}`}>
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
