  "use client";

  import React, { useState } from "react";
  import { motion } from "framer-motion";
  import InquiryModal from "@/components/ui/InquiryModal";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  export default function CustomizePage() {
    const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

    const processSteps = [
      {
        num: "01",
        title: "Consultation",
        desc: "Begin your bespoke journey with a personal consultation. We'll discuss your vision, inspirations, and preferences to lay the foundation for your unique piece."
      },
      {
        num: "02",
        title: "Design & Sketch",
        desc: "Our master designers translate your ideas into exquisite hand-drawn sketches and precise 3D CAD models, allowing you to visualize every intricate detail."
      },
      {
        num: "03",
        title: "Stone Selection",
        desc: "We present a curated selection of the finest ethical diamonds and gemstones for you to choose the perfect centerpiece and accents."
      },
      {
        num: "04",
        title: "Handcrafting",
        desc: "Our master jewelers bring the design to life, meticulously casting, setting, and polishing your piece using time-honored techniques."
      }
    ];

    return (
      <div className="min-h-screen bg-linear-to-tr from-[#7F677A] via-[#544850] to-[#7F677A] text-white pt-32 pb-24 overflow-hidden font-light relative">

        {/* <BackgorundElement>  */}
        <div
          className="absolute inset-0 opacity-5 -mt-1 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* <BackgorundElement>  */}

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-32"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl mb-8 tracking-[0.15em] uppercase font-light text-white drop-shadow-xl"
            >
              Bespoke <span className="italic font-serif font-medium text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Creations</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-extralight tracking-widest leading-loose"
            >
              Your story, masterfully crafted into an eternal symbol.
            </motion.p>
          </motion.div>

          {/* The Process */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-40"
          >
            <div className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl tracking-[0.2em] uppercase font-semibold text-white drop-shadow-lg mb-6">
                The Journey
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-24 h-[2px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  variants={fadeInUp}
                  className="relative p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/60 hover:bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)] transition-all duration-500 overflow-hidden group hover:-translate-y-3 cursor-pointer"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-20 h-20 border-2 border-white/40 rounded-full animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <div className="absolute -right-4 -bottom-8 text-[140px] font-serif italic text-white/[0.04] group-hover:text-white/[0.1] transition-colors duration-500 font-bold select-none">{step.num}</div>

                  <div className="text-white font-serif italic text-5xl mb-8 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{step.num}</div>
                  <h3 className="text-xl md:text-2xl tracking-[0.15em] uppercase text-white font-medium mb-4 relative z-10 drop-shadow-md">{step.title}</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed tracking-wide font-light relative z-10">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative rounded-3xl overflow-hidden group shadow-[0_20px_80px_rgba(0,0,0,0.2)]"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl z-0" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 z-0" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 origin-center scale-[1.5] pointer-events-none z-0" />

            <div className="relative z-10 p-16 md:p-24 text-center">
              <h2 className="text-4xl md:text-6xl font-medium tracking-[0.1em] mb-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Begin Your Commission
              </h2>
              <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
                Connect with our master jewelers to explore the infinite possibilities and start designing a piece that is truly yours.
              </p>

              <button onClick={() => setIsInquiryModalOpen(true)} className="group/btn relative px-14 py-6 bg-white/20 backdrop-blur-md border border-white/40 hover:border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] transition-all duration-500 rounded-full overflow-hidden hover:-translate-y-1">
                <span className="relative z-10 text-white tracking-[0.25em] uppercase text-sm font-bold group-hover/btn:text-[#7F677A] transition-colors duration-500">
                  Request Inquiry
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ease-out" />
              </button>
            </div>
          </motion.div>

        </div>

        <InquiryModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />
      </div >
    );
  }
