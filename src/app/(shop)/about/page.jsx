"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
      <div className="relative min-h-screen bg-linear-to-tr from-[#7F677A] via-[#544850] to-[#7F677A] text-[#fdfbf7] pb-20 overflow-x-hidden font-light">

        {/* BACKGROUND ELEMENT FIX */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
      />


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-32"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-[0.15em] uppercase  bg-clip-text text-transparent"
          >
            Our Heritage
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto tracking-wide leading-relaxed"
          >
            Crafting extraordinary diamond masterpieces that capture the essence of timeless elegance and eternal love.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-16 items-center mb-32"
        >
          <motion.div variants={fadeInUp} className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden ring-1 ring-white/10 shadow-[0_0_40px_rgba(233,176,161,0.1)]">
            <div className="absolute inset-0  z-10" />
            <div className="w-full h-full bg-[#160f1c] flex items-center justify-center">
              <span className="text-white/20 tracking-[0.3em] uppercase text-sm">Image Placeholder</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl md:text-4xl tracking-[0.1em] text-white/90">A Legacy of Brilliance</h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-extralight">
              <p>
                Founded on the principles of exceptional craftsmanship and uncompromising quality, Amiee Jewelry has been at the forefront of luxury diamond curation since its inception.
              </p>
              <p>
                Every piece in our collection tells a unique story. We scour the globe for the most breathtaking stones, ensuring that each diamond not only meets but exceeds the highest standards of clarity, color, and cut.
              </p>
              <p>
                Our master artisans blend traditional techniques with avant-garde design, resulting in creations that are as unique as the individuals who wear them.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl tracking-[0.15em] uppercase text-center mb-16 text-white/90"
          >
            Our Philosophy
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Master Craftsmanship", desc: "Decades of expertise combined with meticulous attention to detail in every single setting." },
              { title: "Ethical Sourcing", desc: "We are committed to conflict-free diamonds and sustainable practices across our entire supply chain." },
              { title: "Timeless Design", desc: "Creating heirloom pieces that transcend fleeting trends, designed to be cherished for generations." }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/[0.02] border border-white/[0.05] p-10 rounded-2xl hover:bg-white/[0.04] transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e9b0a1]/20 to-[#c78b7a]/5 flex items-center justify-center mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#e9b0a1]" />
                </div>
                <h3 className="text-xl tracking-[0.1em] text-white/90 mb-4">{val.title}</h3>
                <p className="text-white/50 leading-relaxed font-extralight tracking-wide">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
