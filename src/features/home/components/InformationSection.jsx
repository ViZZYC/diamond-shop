"use client"

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Sparkle = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C12 0 12 8.4 12 12C12 15.6 12 24 12 24C12 24 15.6 12 24 12C15.6 12 12 0 12 0Z" fill="currentColor" />
        <path d="M12 0C12 0 8.4 12 0 12C8.4 12 12 24 12 24C12 24 12 15.6 12 12C12 8.4 12 0 12 0Z" fill="currentColor" />
    </svg>
);

const InformationSection = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -30]);

    // Premium easing curves
    const easeElastic = [0.34, 1.56, 0.64, 1];
    const easeSmooth = [0.25, 0.46, 0.45, 0.94];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.25 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, ease: easeSmooth }
        }
    };

    const sparkleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: easeElastic }
        }
    };

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-[#7F677A] via-[#544850] to-[#7F677A] overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">

            {/* Grid Pattern Background */}
            <div
                className="absolute inset-0 opacity-5 -mt-1 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                             linear-gradient(to bottom, white 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Ambient Lighting - Scaled for responsiveness */}
            <motion.div
                style={{ y: y1 }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-5%] left-[-15%] w-[20rem] md:w-[50rem] h-[20rem] md:h-[50rem] rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#E9D9CE]/10 to-transparent blur-[80px] md:blur-[120px] -z-10"
            />
            <motion.div
                style={{ y: y2 }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[-15%] right-[-12%] w-[20rem] md:w-[45rem] h-[20rem] md:h-[45rem] rounded-full bg-gradient-to-tl from-[#C5A059]/15 via-[#F3E5E8]/5 to-transparent blur-[80px] md:blur-[120px] -z-10"
            />

            {/* Secondary Accent Light */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 right-1/4 w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] rounded-full bg-gradient-to-br from-[#E9D9CE]/20 to-transparent blur-[60px] md:blur-[100px] -z-10"
            />

            <div className="max-w-7xl w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-20 lg:gap-24">

                {/* Image Container - Fully Responsive Arch/Pill */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: easeSmooth }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[45%] group flex justify-center order-2 lg:order-1 mt-8 lg:mt-0"
                >
                    {/* Outer Decorative Ring */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.6, ease: easeElastic, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="absolute inset-0 rounded-t-[12rem] md:rounded-t-[24rem] rounded-b-[2.5rem] md:rounded-b-[5rem] border-2 border-[#D4AF37]/30 z-0"
                    />

                    {/* Inner Shadow Ring */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.4, ease: easeSmooth, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="absolute inset-1 rounded-t-[11.8rem] md:rounded-t-[23.8rem] rounded-b-[2.3rem] md:rounded-b-[4.8rem] border border-white/20 z-0"
                    />

                    {/* Main Image Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ y: yImage }}
                        transition={{ duration: 1.6, ease: easeSmooth, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative z-20 w-[92%] rounded-t-[12rem] md:rounded-t-[24rem] rounded-b-[2.5rem] md:rounded-b-[5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(44,36,31,0.2),0_15px_30px_-10px_rgba(212,175,55,0.1)] md:shadow-[0_50px_100px_-20px_rgba(44,36,31,0.2),0_20px_40px_-15px_rgba(212,175,55,0.1)] aspect-[3/4] ring-1 ring-white/60 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#111111]/10 z-10 pointer-events-none" />

                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                        >
                            <source src="/assets/video.mp4" type="video/mp4" />
                        </video>

                        {/* Elegant Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 md:from-[#1a1a1a]/20 via-transparent to-transparent z-10" />

                        {/* Shine Effect on Hover */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileHover={{ opacity: [0, 0.8, 0], x: 100 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none"
                        />
                    </motion.div>

                    {/* Floating Accent Sparkles */}
                    <motion.div
                        variants={sparkleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-8 left-4 md:top-12 md:left-8 z-30"
                    >
                        <Sparkle className="w-5 h-5 md:w-6 md:h-6 text-[#e9b0a1]" />
                    </motion.div>

                    <motion.div
                        variants={sparkleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        animate={{ y: [0, 12, 0], opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                        className="absolute bottom-16 right-2 md:bottom-20 md:right-6 z-30"
                    >
                        <Sparkle className="w-4 h-4 md:w-5 md:h-5 text-[#e9b0a1]" />
                    </motion.div>
                </motion.div>

                {/* Content Container - Center mobile, Left desktop */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full lg:w-[50%] relative order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start"
                >
                    {/* Top Accent Sparkle */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.9, 1.15, 0.9],
                            rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute -top-10 md:-top-16 right-10 md:right-20 hidden sm:block"
                    >
                        <Sparkle className="w-8 h-8 md:w-10 md:h-10 text-[#e9b0a1]/60" />
                    </motion.div>

                    {/* Luxury Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-8 md:mb-10 w-full"
                    >
                        <motion.span
                            className="h-[1px] md:h-[1.5px] w-12 md:w-16 bg-gradient-to-r from-[#e9b0a1] via-[#ffeee8] to-transparent"
                            animate={{ scaleX: [0.8, 1, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <span className="text-[#e9b0a1] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-extrabold whitespace-nowrap">
                            ✦ The Diamond Atelier ✦
                        </span>
                        <motion.span
                            className="h-[1px] md:h-[1.5px] w-12 md:w-16 bg-gradient-to-l from-[#e9b0a1] via-[#ffeee8] to-transparent"
                            animate={{ scaleX: [0.8, 1, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1] md:leading-[0.95] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#ffffff] via-[#fdfbf7] to-[#d6c5b3] drop-shadow-sm"
                    >
                        Find Your
                        <br />
                        <motion.span
                            className="relative inline-block mt-2 md:mt-0"
                            whileHover={{ scale: 1.03 }}
                        >
                            <span className="italic font-extralight bg-clip-text text-transparent bg-gradient-to-r from-[#e9b0a1] via-[#ffeee8] to-[rgb(199,139,122)] drop-shadow-xl hover:drop-shadow-[0_0_25px_rgba(233,176,161,0.4)] transition-all">
                                Eternal
                            </span>
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute -top-2 -right-2 md:-top-3 md:-right-1"
                            >
                                <Sparkle className="w-5 h-5 md:w-6 md:h-6 text-[#e9b0a1]" />
                            </motion.div>
                        </motion.span>
                        <br />
                        Sparkle.
                    </motion.h2>

                    {/* Descriptive Text */}
                    <motion.div variants={itemVariants} className="space-y-7 mb-10 md:mb-14 w-full">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="italic text-[#fdfbf7]/80 text-sm md:text-base lg:text-lg mt-6 font-extralight leading-relaxed max-w-[20rem] sm:max-w-lg lg:max-w-2xl mx-auto lg:mx-0 hover:text-[#fdfbf7] transition-colors duration-700"
                        >
                            Your love story is unique. Your jewelry should be too. Step into a world of curated brilliance. Schedule an exclusive live session with our master specialists to bring your vision to life, down to the final facet.
                        </motion.p>
                    </motion.div>

                    {/* CTA Button - Responsive & Fixed Animation */}
                    <motion.button 
                        variants={itemVariants}
                        className="relative px-8 md:px-9 py-4 md:py-3.5 text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.35em] uppercase font-semibold text-[#2C1F2A] bg-[#e9b0a1] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(233,176,161,0.4)] group"
                    >
                        <span className="relative z-10">Book your appointment</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#fff3ee] via-[#e9b0a1] to-[#fff3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default InformationSection;