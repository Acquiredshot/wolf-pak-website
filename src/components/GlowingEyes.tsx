'use client';

const WolfEyes = ({ x, y, delay, scale = 1, blinkSpeed = 4 }: { x: number; y: number; delay: number; scale?: number, blinkSpeed?: number }) => {
  return (
    <div 
      className="absolute flex gap-3"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        transform: `scale(${scale})`,
        animation: `fade-anim 6s infinite ${delay}s`
      }}
    >
      {/* Left Eye Wrapper */}
      <div className="rotate-[15deg]">
        <div 
            className="w-2 h-1 bg-cyan-400 rounded-[100%] shadow-[0_0_10px_2px_rgba(34,211,238,0.8)]"
            style={{ 
            animation: `blink-anim ${blinkSpeed}s infinite ${delay + 0.5}s` 
            }}
        />
      </div>

      {/* Right Eye Wrapper */}
      <div className="-rotate-[15deg]">
        <div 
            className="w-2 h-1 bg-cyan-400 rounded-[100%] shadow-[0_0_10px_2px_rgba(34,211,238,0.8)]" 
            style={{ 
            animation: `blink-anim ${blinkSpeed}s infinite ${delay + 0.5}s` 
            }}
        />
      </div>
    </div>
  );
};

const GlowingEyes = () => {
  const packPositions = [
    { x: 15, y: 70, delay: 0, scale: 1.2, blinkSpeed: 3.5 },
    { x: 25, y: 65, delay: 1.5, scale: 0.9, blinkSpeed: 4.2 },
    { x: 80, y: 75, delay: 0.5, scale: 1.1, blinkSpeed: 5 },
    { x: 70, y: 60, delay: 2.2, scale: 0.8, blinkSpeed: 3.8 },
    { x: 45, y: 80, delay: 3, scale: 1, blinkSpeed: 4.5 },
    { x: 55, y: 85, delay: 1.2, scale: 0.9, blinkSpeed: 3.2 },
    { x: 10, y: 55, delay: 4, scale: 0.7, blinkSpeed: 6 },
    { x: 90, y: 50, delay: 2.8, scale: 0.8, blinkSpeed: 5.5 },
  ];

  return (
    <div className="fixed inset-0 z-[-4] pointer-events-none select-none overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink-anim {
          0%, 45%, 55%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.1); }
        }
        @keyframes fade-anim {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}} />
      {packPositions.map((wolf, index) => (
        <WolfEyes 
          key={index} 
          x={wolf.x} 
          y={wolf.y} 
          delay={wolf.delay} 
          scale={wolf.scale} 
          blinkSpeed={wolf.blinkSpeed}
        />
      ))}
    </div>
  );
};

export default GlowingEyes;
