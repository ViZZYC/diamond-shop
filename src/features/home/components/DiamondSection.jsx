"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";

// Assuming these imports remain the same
import img1 from "../../../../public/assets/diamond1.jpg";
import img2 from "../../../../public/assets/diamond2.jpg";
import img3 from "../../../../public/assets/diamond3.jpg";
import img4 from "../../../../public/assets/diamond4.jpg";
import img5 from "../../../../public/assets/diamond5.jpg";
import img6 from "../../../../public/assets/diamond6.jpg";

const diamonds = [
  { name: "Round Cut", image: img1, description: "The round brilliant cut maximizes brilliance with 58 perfectly aligned facets..." },
  { name: "Princess Cut", image: img2, description: "A modern square diamond known for sharp edges and exceptional sparkle..." },
  { name: "Oval Cut", image: img3, description: "Elegant elongated cut delivering timeless brilliance..." },
  { name: "Cushion Cut", image: img4, description: "Soft rounded edges combined with large facets for romantic sparkle..." },
  { name: "Emerald Cut", image: img5, description: "Step-cut facets highlight clarity and refined reflections..." },
  { name: "Rose Cut", image: img6, description: "Vintage style cut producing a soft glowing brilliance..." },
];

const CARD_GAP = 32;
const SMOOTH_EASE = [0.16, 1, 0.3, 1];
const TRANSITION = { duration: 0.9, ease: SMOOTH_EASE };

export default function DiamondScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const wheelLocked = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const x = useMotionValue(0);

  // Responsive Card Width Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardWidth(260); // Mobile
      else if (window.innerWidth < 1024) setCardWidth(300); // Tablet
      else setCardWidth(320); // Desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Center the active card
  useEffect(() => {
    const containerWidth = trackRef.current?.offsetWidth ?? 400;
    const centerOffset = containerWidth / 2 - cardWidth / 2;
    const targetX = centerOffset - activeIndex * (cardWidth + CARD_GAP);
    animate(x, targetX, { duration: 0.9, ease: SMOOTH_EASE });
  }, [activeIndex, x, cardWidth]);

  const handleWheel = useCallback((e) => {
    if (Math.abs(e.deltaY) < 10) return; // Ignore slight scrolls
    e.preventDefault();
    if (wheelLocked.current) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    setActiveIndex((prev) => Math.max(0, Math.min(diamonds.length - 1, prev + direction)));

    wheelLocked.current = true;
    setTimeout(() => { wheelLocked.current = false; }, 800);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    el?.addEventListener("wheel", handleWheel, { passive: false });
    return () => el?.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const diamond = diamonds[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen lg:h-screen flex items-center justify-center bg-gradient-to-bl from-[#7F677A] via-[#544850] to-[#7F677A] overflow-hidden py-20 lg:py-0"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative w-full max-w-7xl px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10">

        {/* ── LEFT: Info panel ── */}
        <div className="space-y-8 lg:space-y-12 order-2 lg:order-1 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <span className="text-[10px] lg:text-lg font-light text-[#C5A059] tracking-[0.4em] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#ffffff] via-[#fdfbf7] to-[#d6c5b3] drop-shadow-sm">
              The Diamond Collection
            </span>
            <div className="h-[1px] w-12 bg-[#C5A059]/40" />
          </div>

          <div className="space-y-6 lg:space-y-8">
            <motion.h2
              key={`title-${diamond.name}`}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={TRANSITION}
              className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-wide italic font-extralight bg-clip-text text-transparent bg-gradient-to-r from-[#e9b0a1] via-[#ffeee8] to-[rgb(199,139,122)]  drop-shadow-xl group-hover:drop-shadow-[0_0_25px_rgba(233,176,161,0.4)] transition-all"
            >
              {diamond.name}
            </motion.h2>

            <motion.p
              key={`desc-${diamond.name}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...TRANSITION, delay: 0.1 }}
              className="text-base lg:text-lg leading-loose max-w-md mx-auto lg:mx-0 font-light italic text-[#fdfbf7]/80 md:text-lg mt-5  group-hover:text-[#fdfbf7] transition-colors duration-700"
            >
              {diamond.description}
            </motion.p>
          </div>

          {/* Pagination */}
          <div className="flex flex-col lg:flex-row items-center gap-6 pt-4">
            <div className="flex gap-3">
              {diamonds.map((_, i) => (
                <button key={i} onClick={() => setActiveIndex(i)} className="group h-8 flex items-center">
                  <motion.div
                    animate={{
                      width: i === activeIndex ? 32 : 8,
                      backgroundColor: i === activeIndex ? "#C5A059" : "#ffffff40"
                    }}
                    className="h-[2px] rounded-full"
                  />
                </button>
              ))}
            </div>
            <span className="text-[10px] font-light text-white/30 tracking-[0.3em] font-serif uppercase">
              {activeIndex + 1} / {diamonds.length}
            </span>
          </div>
        </div>

        {/* ── RIGHT: Carousel ── */}
        <div className="relative w-full h-[24rem] md:h-[28rem] lg:h-[32rem] overflow-hidden order-1 lg:order-2" ref={trackRef}>
          <motion.div style={{ x }} className="flex gap-8 h-full absolute py-4">
            {diamonds.map((d, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.3,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={TRANSITION}
                  className="relative flex-shrink-0 cursor-pointer overflow-hidden bg-black/40"
                  style={{ width: cardWidth, height: "100%" }}
                >
                  <motion.div animate={{ scale: isActive ? 1 : 1.15 }} transition={TRANSITION} className="w-full h-full">
                    <Image src={d.image} alt={d.name} fill className="object-cover opacity-80" priority={isActive} />
                  </motion.div>

                  {isActive && (
                    <motion.div
                      layoutId="luxury-border"
                      className="absolute inset-4 border-[1px] border-[#C5A059]/40 z-20 pointer-events-none"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                  <motion.p
                    animate={{ opacity: isActive ? 1 : 0 }}
                    className="absolute bottom-6 left-8 text-white/90 text-lg font-serif font-light tracking-widest z-20"
                  >
                    {d.name}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}