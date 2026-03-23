import Link from 'next/link';
import { Cpu, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-violet-200/60 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <Cpu className="h-6 w-6 text-violet-600" />
              <span className="font-semibold text-lg text-slate-900">Wolf-Pak</span>
            </Link>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              Pioneering agentic AI systems that think, adapt, and execute. Building the autonomous infrastructure of tomorrow.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-800 mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><Link href="/services" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Agent Systems</Link></li>
              <li><Link href="/services" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">LLM Ops</Link></li>
              <li><Link href="/services" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Multi-Agent</Link></li>
              <li><Link href="/services" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">AI Infrastructure</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-800 mb-4">Connect</h3>
            <div className="flex space-x-3">
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-violet-200/60 pt-8">
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} Wolf-Pak Innovations LLC
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
