'use client';

import { useEffect, useRef } from 'react';

const LightningStorm = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lightning: Array<{ x: number; y: number; width: number; color: string; path: Array<{x: number, y: number}>; alpha: number }> = [];
    let flashOpacity = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createLightning = () => {
        const x = Math.random() * canvas.width;
        const y = 0; // Start from top
        const path = [{x, y}];
        let currentX = x;
        let currentY = y;

        // Generate path
        while (currentY < canvas.height) {
            const segmentLength = Math.random() * 20 + 10;
            currentY += segmentLength;
            // Random zig-zag
            currentX += (Math.random() - 0.5) * 50; 
            path.push({x: currentX, y: currentY});
        }

        lightning.push({
            x,
            y,
            width: Math.random() * 3 + 1,
            color: '#0ea5e9', // Sky blue
            path,
            alpha: 1
        });
        
        // Sometimes flash the screen
        if (Math.random() > 0.7) {
            flashOpacity = 0.3;
        }
    };

    const animate = () => {
      // Clear background with a subtle dark blue gradient to suggest night sky
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#020617'); // slate-950 (Very dark blue)
      gradient.addColorStop(1, '#000000'); // black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flash
      if (flashOpacity > 0) {
          ctx.fillStyle = `rgba(14, 165, 233, ${flashOpacity})`; // Blue tinted flash
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          flashOpacity -= 0.05; // Fade out flash
      }

      // Randomly create lightning
      if (Math.random() < 0.05) { // Frequency of strikes
        createLightning();
      }

      // Draw bolts
      for (let i = lightning.length - 1; i >= 0; i--) {
        const bolt = lightning[i];
        
        ctx.beginPath();
        ctx.moveTo(bolt.path[0].x, bolt.path[0].y);
        
        for (let p = 1; p < bolt.path.length; p++) {
          ctx.lineTo(bolt.path[p].x, bolt.path[p].y);
        }

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00ffff'; // Electric cyan glow
        ctx.strokeStyle = `rgba(200, 240, 255, ${bolt.alpha})`; // White-ish center
        ctx.lineWidth = bolt.width;
        ctx.stroke();

        ctx.shadowBlur = 0; // Reset

        bolt.alpha -= 0.1; // Fade out lightning
        if (bolt.alpha <= 0) {
          lightning.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black pointer-events-none"
    />
  );
};

export default LightningStorm;
