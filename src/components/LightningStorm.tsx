'use client';

const LightningStorm = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Dark workshop base */}
      <div className="absolute inset-0 bg-[#0a0b0f]" />

      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f16] via-[#0a0b0f] to-[#0c0a0d]" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Top-right arc reactor glow — gold/red */}
      <div className="absolute -top-[20%] right-[5%] w-[700px] h-[700px] rounded-full bg-amber-500/[0.10] blur-[150px]" />

      {/* Upper-left ember glow */}
      <div className="absolute -top-[10%] left-[8%] w-[500px] h-[500px] rounded-full bg-red-500/[0.08] blur-[130px]" />

      {/* Center HUD cyan orb */}
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

      {/* Bottom-left ember accent */}
      <div className="absolute -bottom-[15%] left-[30%] w-[600px] h-[600px] rounded-full bg-red-500/[0.07] blur-[120px]" />

      {/* Bottom-right cyan accent */}
      <div className="absolute -bottom-[25%] right-[15%] w-[400px] h-[400px] rounded-full bg-cyan-500/[0.07] blur-[100px]" />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }} />
    </div>
  );
};

export default LightningStorm;
