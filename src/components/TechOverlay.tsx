'use client';

const TechOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
      {/* Scanlines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
          backgroundSize: '100% 4px'
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />

      {/* HUD Corners */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg opacity-60" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg opacity-60" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg opacity-60" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-cyan-500 rounded-br-lg opacity-60" />

      {/* Grid Lines (Top/Bottom) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Decorative Specs */}
      <div className="absolute top-6 left-24 text-[10px] text-cyan-500/50 font-mono tracking-widest hidden md:block">
        SYS.STATUS: ONLINE
      </div>
      <div className="absolute bottom-6 right-24 text-[10px] text-cyan-500/50 font-mono tracking-widest hidden md:block">
        V.4.2.0 // SECURE
      </div>
    </div>
  );
};

export default TechOverlay;
