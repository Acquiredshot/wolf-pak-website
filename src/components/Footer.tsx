import Link from 'next/link';
import { Cpu, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

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
              <Link href="https://www.instagram.com/wolfpak_innovations?igsh=d2JjYnVrOXNpaWc4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@wolfpakinnovations" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.15v-3.44a4.85 4.85 0 01-3.77-1.25V6.69h3.77z" />
                </svg>
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
