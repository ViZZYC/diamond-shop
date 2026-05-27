"use client";

import React from "react";
import { motion } from "framer-motion";
import InteractiveDiamond360 from "@/components/diamond/InteractiveDiamond360";
import { CutVisualizer, ColorVisualizer, ClarityVisualizer, CaratVisualizer } from "@/components/diamond/Visualizers";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function DiamondGuidePage() {
  const guideSections = [
    {
      title: "Cut",
      desc: "The most important of the 4Cs, cut determines the diamond's brilliance. A well-cut diamond reflects light internally from facet to facet, and disperses it through the top.",
      detail: "Proportions, symmetry, and polish all play crucial roles in how a diamond handles light. At Amiee Jewelry, we exclusively select diamonds with Excellent or Ideal cut grades.",
      accent: "#e9b0a1",
      Visualizer: CutVisualizer
    },
    {
      title: "Color",
      desc: "Actually, it's the absence of color. The highest quality diamonds are completely colorless, allowing the most light to pass through.",
      detail: "Graded on a scale from D (colorless) to Z (light yellow). We typically recommend diamonds in the D-to-H range for optimal beauty and value in platinum or white gold settings.",
      accent: "#f7e2d7",
      Visualizer: ColorVisualizer
    },
    {
      title: "Clarity",
      desc: "A measure of the purity and rarity of the stone, looking at the presence of internal inclusions and external blemishes.",
      detail: "Flawless diamonds are exceptionally rare. The vast majority contain tiny natural characteristics. We curate stones that are 'eye-clean', meaning no imperfections are visible to the naked eye.",
      accent: "#c78b7a",
      Visualizer: ClarityVisualizer
    },
    {
      title: "Carat",
      desc: "Carat refers to the physical weight of the diamond, not its size. While often confused with size, a diamond's cut determines how large it appears.",
      detail: "Two diamonds of equal carat weight can have very different values depending on their Cut, Color, and Clarity. We help you find the perfect balance between size and quality.",
      accent: "#e9b0a1",
      Visualizer: CaratVisualizer
    }
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-tr from-[#7F677A] via-[#544850] to-[#7F677A] text-white pt-32 pb-20 overflow-x-hidden font-light">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-[0.2em] uppercase font-medium text-white/90"
          >
            The 4Cs Guide
          </motion.h1>
          <motion.div variants={fadeInUp} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#e9b0a1] to-transparent mx-auto mb-8" />
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white/60 max-w-2xl mx-auto tracking-widest leading-relaxed uppercase"
          >
            Mastering the elements of perfection
          </motion.p>
        </motion.div>

        {/* 360 Interactive Hero Diamond */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <InteractiveDiamond360 />
        </motion.div>

        {/* Content Alternating Grid for 4Cs */}
        <div className="space-y-32">
          {guideSections.map((section, idx) => {
            const VisualizerComponent = section.Visualizer;
            return (
              <motion.div
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`flex flex-col md:flex-row gap-16 md:gap-24 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <motion.div variants={fadeInUp} className="w-full md:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden p-8 bg-[#160f1c]/50 backdrop-blur-sm border border-white/5">
                    <VisualizerComponent />
                    {/* Hover effect highlight */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20 pointer-events-none"
                      style={{ background: `radial-gradient(circle at center, ${section.accent}15, transparent 60%)` }} />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div variants={fadeInUp} className="w-full md:w-1/2 space-y-8">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl md:text-7xl font-light text-white/[0.08] select-none">
                      0{idx + 1}
                    </span>
                    <h2 className="text-3xl tracking-[0.15em] uppercase text-white/90">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-xl text-white/80 font-light leading-relaxed">
                    {section.desc}
                  </p>

                  <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

                  <p className="text-white/50 text-sm leading-8 tracking-wide font-extralight">
                    {section.detail}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
