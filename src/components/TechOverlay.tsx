'use client';

const TechOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.55)_100%)]" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
    </div>
  );
};

export default TechOverlay;
