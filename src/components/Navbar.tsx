'use client';

import Link from 'next/link';
import { Menu, X, Cpu, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-xl bg-white/80 border-b border-violet-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <Cpu className="h-7 w-7 text-violet-600 group-hover:text-cyan-600 transition-colors" />
              <span className="font-semibold text-lg text-slate-900 tracking-wide">Wolf-Pak</span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-1 md:items-center">
            <Link 
              href="/services" 
              className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-violet-50"
            >
              Services
            </Link>
            <Link 
              href="/services#solutions" 
              className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-violet-50"
            >
              Solutions
            </Link>
            <Link 
              href="/services#about" 
              className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-violet-50"
            >
              About
            </Link>
            <Link href="/contact" className="ml-4 inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg hover:from-cyan-400 hover:to-violet-400 transition-all duration-200 shadow-lg shadow-violet-500/20">
              Contact
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-violet-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-violet-200/60 absolute w-full z-50">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Solutions', href: '/services#solutions' },
              { label: 'About', href: '/services#about' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 hover:bg-violet-50 block px-3 py-3 text-sm font-medium rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
