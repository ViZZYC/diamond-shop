"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import { Products } from '@/config/constants'

export default function ProductSection() {
  return (
    <div className="relative w-full min-h-screen bg-linear-to-tr from-[#7F677A] via-[#544850] to-[#7F677A] overflow-hidden py-24 md:py-32">

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5 -mt-1 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[60%] left-[-5%] w-[500px] h-[500px] bg-[#7F677A]/60 rounded-full blur-[80px]"
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-[60%] right-[-5%] w-[500px] h-[500px] bg-[#3A3241]/15 rounded-full blur-[60px]"
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute top-[30%] left-1/2 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-stone-200/10 rounded-full blur-[50px]"
        />

      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 relative group">

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#e9b0a1] rounded-full blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none" />

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-8"
          >

            <div className="flex items-center gap-1">
              <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#e9b0a1]"></span>
              <div className="w-1 h-1 rotate-45 bg-[#e9b0a1]"></div>
            </div>

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e9b0a1] to-[#d6c5b3] text-xs md:text-sm uppercase tracking-[0.4em] font-medium">
              Curated Selection
            </span>

            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rotate-45 bg-[#e9b0a1]"></div>
              <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#e9b0a1]"></span>
            </div>

          </motion.div>

          {/* Title */}
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(3rem,7vw,8rem)] font-serif mb-10 flex flex-col items-center leading-[0.9]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >

            {/* First Word */}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#ffffff] via-[#fdfbf7] to-[#d6c5b3] tracking-tight">
              Timeless
            </span>

            {/* Second Word */}
            <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-[#e9b0a1] via-[#ffeee8] to-[#c78b7a] translate-x-6 sm:translate-x-12 md:translate-x-24 lg:translate-x-32 -mt-2 md:-mt-4">
              Allure
            </span>

          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#fdfbf7]/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Explore our latest collection of hand-finished jewelry, designed to illuminate your unique journey and celebrate life's most precious moments.
          </motion.p>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {Products.slice(0, 8).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Explore Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <Link href="/explore">
            <button className="group relative px-12 py-4 rounded-full bg-black/20 backdrop-blur-md border border-[#e9b0a1]/30 hover:border-[#e9b0a1]/80 shadow-[0_0_40px_rgba(233,176,161,0.1)] hover:shadow-[0_0_60px_rgba(233,176,161,0.25)] transition-all duration-700 overflow-hidden flex items-center justify-center cursor-pointer hover:-translate-y-1">
               <span className="relative z-10 text-[#fdfbf7]/90 group-hover:text-[#160f1c] tracking-[0.25em] uppercase text-[11px] font-medium transition-colors duration-500">
                 Explore All Categories
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-[#e9b0a1] via-[#f7e2d7] to-[#c78b7a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
