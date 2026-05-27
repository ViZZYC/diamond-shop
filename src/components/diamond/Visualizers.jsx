"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Helper SVG Diamond Base to be modified by visualizers
const DiamondBase = ({ children, tint = "none", scale = 1 }) => (
  <motion.div 
    animate={{ scale }} 
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="relative w-full h-full flex items-center justify-center"
  >
    {/* 1. Aapki direct SVG File */}
   <img 
      src="/dimond12.svg" 
      alt="Diamond" 
      className="absolute w-[80%] h-[80%] object-contain drop-shadow-2xl z-10"
    />

    {/* 2. Color Effect (Jab aap D, G, J, K color change karenge) */}
    {tint !== "none" && (
      <div 
        className="absolute w-[80%] h-[80%] z-20 pointer-events-none"
        style={{ 
          backgroundColor: tint,
          mixBlendMode: 'multiply', // Ye color ko diamond me blend karega
          WebkitMaskImage: 'url(/dimond12.svg)', // Color ko sirf diamond ke shape me rakhega
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center'
        }}
      />
    )}

    {/* 3. Clarity Effect (Black dots dikhane ke liye invisible overlay) */}
    <svg 
      viewBox="0 0 200 200" 
      className="absolute w-[80%] h-[80%] z-30 pointer-events-none"
    >
      {children}
    </svg>
  </motion.div>
);
export function ClarityVisualizer() {
  const [clarity, setClarity] = useState("FL");
  
  const options = [
    { id: "FL", label: "Flawless", desc: "No inclusions visible" },
    { id: "VVS1", label: "VVS1", desc: "Minute inclusions, difficult to see" },
    { id: "VS1", label: "VS1", desc: "Minor inclusions, visible under 10x" },
    { id: "SI1", label: "SI1", desc: "Noticeable inclusions" },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-64 h-64 bg-black/20 rounded-full border border-white/5 mb-8 flex items-center justify-center relative overflow-hidden">
        <DiamondBase>
          {/* Render inclusions based on clarity */}
          {clarity === "VVS1" && (
            <circle cx="90" cy="120" r="1" fill="#000" opacity="0.3" />
          )}
          {clarity === "VS1" && (
            <>
              <circle cx="85" cy="115" r="1.5" fill="#000" opacity="0.4" />
              <path d="M110 130 L112 132" stroke="#000" strokeWidth="1" opacity="0.3" />
            </>
          )}
          {clarity === "SI1" && (
            <>
              <circle cx="80" cy="110" r="2.5" fill="#000" opacity="0.6" />
              <circle cx="120" cy="140" r="1.5" fill="#000" opacity="0.5" />
              <path d="M90 140 L95 145" stroke="#000" strokeWidth="1" opacity="0.5" />
              <path d="M115 100 L118 105" stroke="#000" strokeWidth="0.5" opacity="0.6" />
            </>
          )}
        </DiamondBase>
        {/* Loupe Effect */}
        <div className="absolute inset-0 border-[10px] border-[#e9b0a1]/20 rounded-full pointer-events-none mix-blend-overlay" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {options.map(opt => (
          <button 
            key={opt.id}
            onClick={() => setClarity(opt.id)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
              clarity === opt.id 
                ? "bg-[#e9b0a1] text-black font-bold" 
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {opt.id}
          </button>
        ))}
      </div>
      <p className="text-white/50 text-xs tracking-wider text-center h-4">{options.find(o => o.id === clarity)?.desc}</p>
    </div>
  );
}

export function ColorVisualizer() {
  const [colorIdx, setColorIdx] = useState(0);
  
  const options = [
    { id: "D", tint: "none", desc: "Colorless" },
    { id: "G", tint: "rgba(255, 250, 235, 0.4)", desc: "Near Colorless" },
    { id: "J", tint: "rgba(255, 240, 200, 0.6)", desc: "Faint Yellow" },
    { id: "K", tint: "rgba(255, 230, 160, 0.8)", desc: "Noticeable Color" },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-64 h-64 bg-black/20 rounded-full border border-white/5 mb-8 flex items-center justify-center">
        <DiamondBase tint={options[colorIdx].tint} />
      </div>

      <input 
        type="range" 
        min="0" 
        max="3" 
        value={colorIdx} 
        onChange={(e) => setColorIdx(Number(e.target.value))}
        className="w-full max-w-[200px] mb-6 appearance-none bg-white/10 h-1 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#f7e2d7] [&::-webkit-slider-thumb]:cursor-pointer"
      />
      <div className="flex justify-between w-full max-w-[200px] text-xs font-bold text-white/50 mb-2">
        <span>D</span>
        <span>G</span>
        <span>J</span>
        <span>K</span>
      </div>
      <p className="text-white/50 text-xs tracking-wider text-center h-4">{options[colorIdx].desc}</p>
    </div>
  );
}

export function CutVisualizer() {
  const [cut, setCut] = useState("Ideal");
  
  const options = [
    { id: "Ideal", desc: "Maximum brilliance and fire. Reflects nearly all light.", rays: 8 },
    { id: "Good", desc: "Reflects most light. Good quality, excellent value.", rays: 4 },
    { id: "Fair", desc: "Light escapes from bottom/sides. Less brilliance.", rays: 1 },
  ];

  const currentOpt = options.find(o => o.id === cut);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-64 h-64 bg-black/20 rounded-full border border-white/5 mb-8 flex items-center justify-center relative">
        <DiamondBase />
        
        {/* Light Rays indicating brilliance */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(currentOpt.rays)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              className="absolute w-1 h-20 bg-gradient-to-t from-transparent via-[#e9b0a1] to-transparent origin-bottom"
              style={{ transform: `rotate(${(i * 360) / currentOpt.rays}deg) translateY(-40px)` }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {options.map(opt => (
          <button 
            key={opt.id}
            onClick={() => setCut(opt.id)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
              cut === opt.id 
                ? "bg-[#e9b0a1] text-black font-bold" 
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {opt.id}
          </button>
        ))}
      </div>
      <p className="text-white/50 text-xs tracking-wider text-center h-4">{currentOpt.desc}</p>
    </div>
  );
}

export function CaratVisualizer() {
  const [carat, setCarat] = useState(1.0);
  
  // Scale mapping: 0.5c -> scale 0.7, 1.0c -> scale 1.0, 2.0c -> scale 1.4
  const scale = 0.5 + (carat * 0.4);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-64 h-64 bg-black/20 rounded-full border border-white/5 mb-8 flex items-center justify-center relative">
        {/* Finger/Ring Reference circle */}
        <div className="absolute w-20 h-20 border-2 border-white/10 rounded-full flex items-end justify-center pb-2">
          <span className="text-[8px] uppercase tracking-widest text-white/30">Ring Size 6</span>
        </div>
        <DiamondBase scale={scale} />
      </div>

      <input 
        type="range" 
        min="0.5" 
        max="3.0" 
        step="0.1"
        value={carat} 
        onChange={(e) => setCarat(Number(e.target.value))}
        className="w-full max-w-[200px] mb-6 appearance-none bg-white/10 h-1 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#e9b0a1] [&::-webkit-slider-thumb]:cursor-pointer"
      />
      <div className="flex justify-between w-full max-w-[200px] text-xs font-bold text-white/50 mb-2">
        <span>0.5ct</span>
        <span>1.5ct</span>
        <span>3.0ct</span>
      </div>
      <p className="text-white/50 text-xs tracking-wider text-center h-4">{carat.toFixed(1)} Carat</p>
    </div>
  );
}