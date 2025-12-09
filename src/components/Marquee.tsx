import React from "react";

const Marquee = () => {
  const items = [
    "Design UI/UX",
    "Desenvolvimento Web",
    "Landing Pages",
    "E-commerce",
    "SEO Otimizado",
    "Alta Performance",
    "Identidade Visual",
    "Marketing Digital"
  ];

  return (
    <div className="w-full py-10 bg-dark border-y border-white/5 overflow-hidden relative z-20">
      <div className="flex w-[200%] animate-scroll hover:pause">
        {/* First set */}
        <div className="flex whitespace-nowrap w-1/2 justify-around">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-8 mx-8">
              <span className="text-4xl md:text-5xl font-bold text-transparent stroke-text opacity-30 hover:opacity-100 hover:text-white transition-all cursor-default select-none">
                {item}
              </span>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex whitespace-nowrap w-1/2 justify-around">
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-8 mx-8">
              <span className="text-4xl md:text-5xl font-bold text-transparent stroke-text opacity-30 hover:opacity-100 hover:text-white transition-all cursor-default select-none">
                {item}
              </span>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
