"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import img1 from "../../../../public/assets/diamond1.jpg";
import img2 from "../../../../public/assets/diamond2.jpg";
import img3 from "../../../../public/assets/diamond3.jpg";
import img4 from "../../../../public/assets/diamond4.jpg";
import img5 from "../../../../public/assets/diamond5.jpg";
import img6 from "../../../../public/assets/diamond6.jpg";
import img7 from "../../../../public/assets/hero.jpg";
import img8 from "../../../../public/assets/ring-1.png";
import img9 from "../../../../public/assets/earrings-1.png";
import img10 from "../../../../public/assets/necklace-1.png";
import img11 from "../../../../public/assets/bracelet-1.png";
import img12 from "../../../../public/assets/diamond6.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const textReveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function ImageColumn({ imgs, duration }) {
  const column = [...imgs, ...imgs]; // duplicate once

  return (
    <motion.div
      animate={{ y: [0, -column.length / 2 * 228] }}
      transition={{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
      }}
      className="flex flex-col gap-8"
    >
      {column.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          whileHover={{
            scale: 1.08,
            rotateZ: 1,
          }}
          transition={{ duration: 0.4 }}
          className="w-[180px] h-[220px] object-cover rounded-xl"
        />
      ))}
    </motion.div>
  );
}

export default function MainSection() {
  const containerRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useTransform(mouseX, [-500, 500], [-8, 8]);
  const rotateX = useTransform(mouseY, [-500, 500], [8, -8]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <>

      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center px-20 bg-gradient-to-br from-[#3A3241] via-[#544850] to-[#7F677A] overflow-hidden selection:bg-rose-300/30"
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />



          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8b4a4]/20 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="relative z-20 max-w-xl">

          {/* Top Tag */}
          <motion.div
            custom={0}
            variants={textReveal}
            initial="hidden"
            animate={mounted ? "show" : "hidden"}
            className="inline-flex items-center gap-4"
          >
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#e8b4a4] to-transparent" />

            <span className="text-[10px] tracking-[0.5em] text-[#e8b4a4] uppercase font-medium">
              Est. 1984
            </span>

            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#e8b4a4] to-transparent" />
          </motion.div>

          {/* Main Content Section */}
          <div
            className="mt-8 relative group cursor-pointer w-max"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {/* Ambient Background Glow (Subtle jewelry store display light) */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 bg-[#e9b0a1] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

            {/* "Amiee" - Platinum / Diamond Dust Finish */}
            <motion.span
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate={mounted ? "show" : "hidden"}
              className="block text-[clamp(4.5rem,10vw,8.5rem)] leading-[0.85] font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#ffffff] via-[#fdfbf7] to-[#d6c5b3] transition-all duration-700 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Amiee
            </motion.span>

            {/* "Jewellers" - Rich Rose Gold & Cascading Italic */}
            <motion.span
              custom={2}
              variants={textReveal}
              initial="hidden"
              animate={mounted ? "show" : "hidden"}
              className="block italic text-[clamp(4.5rem,10vw,8.5rem)] leading-[0.85] font-normal ml-8 md:ml-20 bg-clip-text text-transparent bg-gradient-to-r from-[#e9b0a1] via-[#ffeee8] to-[#c78b7a] drop-shadow-lg"
            >
              Jewellers
            </motion.span>

            {/* Action-Oriented Elegant Underline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="absolute -bottom-4 left-0 flex items-center gap-4 w-full"
            >
              {/* Diamond Accent */}
              <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-[#ffffff] to-[#e9b0a1] shadow-[0_0_10px_#e9b0a1] group-hover:rotate-[225deg] group-hover:scale-150 transition-all duration-700 ease-out" />

              {/* Expanding Gold Line */}
              <div className="h-[1px] w-12 group-hover:w-full bg-gradient-to-r from-[#e9b0a1] via-[#e9b0a1]/60 to-transparent transition-all duration-700 ease-out" />
            </motion.div>
          </div>


          {/* Category */}
          <motion.div
            custom={3}
            variants={textReveal}
            initial="hidden"
            animate={mounted ? "show" : "hidden"}
            className="mt-10 flex items-center gap-4"
          >
            <div className="h-[1px] w-14 bg-gradient-to-r from-[#e8b4a4] to-transparent" />

            <span className="text-[9px] tracking-[0.4em] text-[#e8b4a4]/70 uppercase">
              Fine Jewellery
            </span>
          </motion.div>


          {/* Description */}
          <motion.p
            custom={4}
            variants={textReveal}
            initial="hidden"
            animate={mounted ? "show" : "hidden"}
            className="mt-6 text-[1.05rem] leading-[1.8] text-[#f2d7cfb3] max-w-[420px]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Where timeless heritage meets modern elegance. Every jewel is
            thoughtfully designed to celebrate life’s rarest moments with
            brilliance, grace, and lasting beauty.
          </motion.p>


          {/* Button */}
          <motion.div
            custom={5}
            variants={textReveal}
            initial="hidden"
            animate={mounted ? "show" : "hidden"}
            className="mt-12 flex items-center gap-6"
          >
            <button className="
      relative px-9 py-3.5
      text-[11px] tracking-[0.35em] uppercase
      text-[#2C1F2A]
      bg-[#e9b0a1]
      rounded-full
      overflow-hidden
      transition-all duration-500
      hover:scale-105
      hover:shadow-[0_10px_40px_rgba(233,176,161,0.4)]
    ">
              <span className="relative z-10">Explore Collection</span>

              <span className="
        absolute inset-0
        bg-gradient-to-r from-[#fff3ee] via-[#e9b0a1] to-[#fff3ee]
        opacity-0 hover:opacity-100
        transition-opacity duration-500
      "/>
            </button>
          </motion.div>

        </div>


        {/* Floating Gallery */}
        <div className="absolute right-[-80px] md:right-[-110px] top-1/2 -translate-y-1/2 h-[800px] md:h-[960px] flex items-center opacity-30 md:opacity-100">

          <motion.div
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
              perspective: 2400,
            }}
            className="flex gap-6 md:gap-8"
          >
            <div className="flex gap-6 md:gap-8 rotate-[18deg] scale-[1.1] md:scale-[1.2]">
              <div className="mt-[-40px]">
                <ImageColumn imgs={images} duration={22} />
              </div>
              <div className="mt-[30px]">
                <ImageColumn imgs={images} duration={26} />
              </div>
              <div className="mt-[-20px]">
                <ImageColumn imgs={images} duration={19} />
              </div>
              <div className="mt-[50px]">
                <ImageColumn imgs={images} duration={24} />
              </div>
              <div className="mt-[50px]">
                <ImageColumn imgs={images} duration={28} />
              </div>

            </div>

          </motion.div>

        </div>

      </section>
    </>
  );
}
