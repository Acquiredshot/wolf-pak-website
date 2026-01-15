import Link from 'next/link';
import { Cpu, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 relative z-10 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Cpu className="h-8 w-8 text-cyan-600 group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_5px_#0ea5e9]" />
              <span className="font-bold text-xl text-white tracking-[0.2em] uppercase group-hover:text-cyan-50 transition-colors glow-text">Wolf-Pak</span>
            </Link>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed font-sans">
              Deploying advanced defense systems and digital infrastructure. We secure the future.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-cyan-500 tracking-widest uppercase mb-4">// PROTOCOLS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-xs font-medium uppercase tracking-wider">
                  &gt; IT_Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-xs font-medium uppercase tracking-wider">
                  &gt; Cloud_Node
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-xs font-medium uppercase tracking-wider">
                  &gt; Net_Sec
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-xs font-medium uppercase tracking-wider">
                  &gt; Sys_Dev
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-cyan-500 tracking-widest uppercase mb-4">// UPLINK</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-500 hover:text-cyan-500 transition-colors transform hover:-translate-y-1">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5 hover:drop-shadow-[0_0_5px_#0ea5e9]" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-cyan-500 transition-colors transform hover:-translate-y-1">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5 hover:drop-shadow-[0_0_5px_#0ea5e9]" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-cyan-500 transition-colors transform hover:-translate-y-1">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5 hover:drop-shadow-[0_0_5px_#0ea5e9]" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-cyan-500 transition-colors transform hover:-translate-y-1">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5 hover:drop-shadow-[0_0_5px_#0ea5e9]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-700 uppercase tracking-widest">
            <p>
            &copy; {new Date().getFullYear()} Wolf-Pak Innovations LLC. SYS_VER. 2.0.4
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
