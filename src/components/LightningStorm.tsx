'use client';

const LightningStorm = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Light tech base */}
      <div className="absolute inset-0 bg-[#f0f4ff]" />
      
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#faf5ff]" />
      
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />
      
      {/* Top-left cyan orb — soft */}
      <div className="absolute -top-[20%] left-[10%] w-[700px] h-[700px] rounded-full bg-cyan-300/[0.20] blur-[150px]" />
      
      {/* Top-right fuchsia orb */}
      <div className="absolute -top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-fuchsia-300/[0.15] blur-[130px]" />
      
      {/* Center violet orb */}
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-violet-300/[0.12] blur-[140px]" />
      
      {/* Bottom-left blue orb */}
      <div className="absolute -bottom-[15%] left-[30%] w-[600px] h-[600px] rounded-full bg-blue-300/[0.15] blur-[120px]" />
      
      {/* Bottom-right emerald accent */}
      <div className="absolute -bottom-[25%] right-[15%] w-[400px] h-[400px] rounded-full bg-emerald-300/[0.10] blur-[100px]" />
      
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }} />
    </div>
  );
};

export default LightningStorm;
