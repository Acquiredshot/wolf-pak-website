'use client';

import { useEffect } from 'react';

const ConsoleEasterEgg = () => {
  useEffect(() => {
    const style1 = 'background: #020617; color: #0ea5e9; font-size: 14px; font-weight: bold; padding: 5px; border: 1px solid #0ea5e9;';
    const style2 = 'background: #0ea5e9; color: #000; font-size: 14px; font-weight: bold; padding: 5px;';
    
    console.clear();
    console.log('%c WOLF-PAK INNOVATIONS %c SYSTEM SECURE ', style1, style2);
    console.log('%c\n> ACCESS GRANTED\n> PROTOCOL: ALPHA\n> IF YOU CAN READ THIS, YOU SHOULD BE WORKING WITH US.\n', 'color: #94a3b8; font-family: monospace; font-size: 12px;');
    console.log('%c APPLY AT: careers@pak-innovations.net ', 'color: #22d3ee; font-style: italic;');
  }, []);

  return null;
};

export default ConsoleEasterEgg;
