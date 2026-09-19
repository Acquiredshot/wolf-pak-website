'use client';

import { useEffect } from 'react';

const ConsoleEasterEgg = () => {
  useEffect(() => {
    const style1 = 'background: #0a0b0f; color: #e8a33d; font-size: 14px; font-weight: bold; padding: 8px 12px; border-radius: 4px;';
    const style2 = 'color: #a1a1aa; font-family: monospace; font-size: 12px;';

    console.log('%c Wolf-Pak Innovations — Mk III HUD ', style1);
    console.log('%c\nBuilding agentic AI systems.\nIf you can read this, you should be working with us.\n(also: with great automation comes great responsibility)\n', style2);
    console.log('%c careers@pak-innovations.net ', 'color: #3ecfff; font-style: italic;');
  }, []);

  return null;
};

export default ConsoleEasterEgg;
