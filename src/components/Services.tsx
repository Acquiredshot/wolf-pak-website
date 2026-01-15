import { Server, Shield, Code, Cloud, Terminal } from 'lucide-react';

const services = [
  {
    title: 'NET_INFRASTRUCTURE',
    description: 'Design, implementation, and management of robust network systems optimized for performance and reliability.',
    icon: Server,
    code: 'NET_OPS',
  },
  {
    title: 'CYBER_DEFENSE',
    description: 'Comprehensive security assessments, threat monitoring, and protection strategies to safeguard your assets.',
    icon: Shield,
    code: 'SEC_LVL_5',
  },
  {
    title: 'CUSTOM_DEV',
    description: 'Tailored software solutions designed to meet your specific business requirements and workflow.',
    icon: Code,
    code: 'DEV_NULL',
  },
  {
    title: 'CLOUD_MATRIX',
    description: 'Seamless migration and management of cloud resources to enhance scalability and accessibility.',
    icon: Cloud,
    code: 'UPLINK',
  },
];

const Services = () => {
  return (
    <div id="services" className="py-24 relative backdrop-blur-sm bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-500 font-semibold tracking-widest uppercase">
            //_SYSTEM CAPABILITIES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl font-mono">
            DIGITAL <span className="text-cyan-500">DOMINANCE</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto font-light">
            Operational support for critical mission infrastructure.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service, index) => (
              <div key={service.title} className="relative group p-6 rounded-sm bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] clip-corner overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500 opacity-50 group-hover:w-full group-hover:h-full transition-all duration-500"></div>
                
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" 
                     style={{
                        backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.5) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                     }}>
                </div>

                <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-600 group-hover:text-cyan-500/50 transition-colors">
                    [{service.code}]
                </div>

                <dt className="relative z-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-none bg-slate-900 border border-slate-700 text-cyan-500 group-hover:bg-cyan-900/20 group-hover:text-cyan-400 group-hover:border-cyan-500 transition-all duration-300 shadow-lg">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-xl leading-6 font-bold text-white font-mono">{service.title}</p>
                </dt>
                <dd className="mt-2 text-base text-slate-400 leading-relaxed font-sans group-hover:text-slate-300 transition-colors relative z-10">{service.description}</dd>
                
                <div className="mt-6 relative z-10">
                    <a href="#" className="text-xs font-mono font-medium text-cyan-500 hover:text-cyan-300 inline-flex items-center transition-colors uppercase tracking-wider">
                        <Terminal className="w-3 h-3 mr-2" /> EXECUTE <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">_</span>
                    </a>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;
