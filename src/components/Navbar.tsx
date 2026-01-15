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
    <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <Cpu className="relative h-10 w-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              </div>
              <span className="font-mono font-bold text-2xl text-white tracking-[0.2em] uppercase glow-text">Wolf-Pak</span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8 md:items-center">
            {['Services', 'About'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-mono tracking-widest transition-all duration-200 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]"
              >
                //_{item.toUpperCase()}
              </Link>
            ))}
            <Link href="#contact" className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-mono font-bold font-medium text-cyan-500 transition duration-300 ease-out border border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] group bg-slate-950/50 clip-corner-sm">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-cyan-500 transition-all duration-300 transform group-hover:translate-x-full ease">CONTACT_US</span>
              <span className="relative invisible">CONTACT_US</span>
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 border border-transparent hover:border-cyan-500/50"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-cyan-900 absolute w-full z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Services', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 block px-3 py-4 text-base font-mono font-medium text-center border-b border-slate-800/50 tracking-widest"
                onClick={toggleMenu}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
