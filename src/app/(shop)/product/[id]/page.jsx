"use client"
import React, { useState, use } from 'react'
import { motion } from 'framer-motion'
import { Products } from '@/config/constants'
import { MessageCircle, Star, Shield, Truck, RotateCcw, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import InquiryModal from '@/components/ui/InquiryModal'
export default function ProductDetailPage({ params }) {
  const { id } = use(params);
  const product = Products.find(p => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!product) {
    return (
      <div className="min-h-screen bg-[#160f1c] flex items-center justify-center text-[#fdfbf7]">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif">Product Not Found</h1>
          <Link href="/explore" className="text-[#e9b0a1] hover:underline uppercase tracking-widest text-sm">
            Back to Explore
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-linear-to-tr from-[#7F677A] via-[#544850] to-[#7F677A] py-12 md:py-16 relative overflow-hidden">
        {/* Background Grid */}
        <div
           className="absolute inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
             linear-gradient(to bottom, white 1px, transparent 1px)`,
             backgroundSize: "40px 40px"
           }}
        />
        
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#e9b0a1]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#3A3241]/40 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 md:mb-12 text-xs md:text-sm text-[#fdfbf7]/60 tracking-wider uppercase flex items-center gap-2 md:gap-3"
          >
            <Link href="/" className="hover:text-[#e9b0a1] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/explore" className="hover:text-[#e9b0a1] transition-colors">Explore</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-[#e9b0a1]">{product.category}</span>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white truncate max-w-[150px] sm:max-w-[200px] md:max-w-none">{product.name}</span>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24">
            
            {/* Left: Full-size Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square w-full bg-[#111] overflow-hidden border border-white/10 rounded-sm shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
                {/* Overlay glow */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-80" />
                
                {product.status && (
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-black/40 backdrop-blur-md border border-[#e9b0a1]/40 text-[#fdfbf7] text-[10px] uppercase tracking-[0.3em] px-4 py-2">
                      {product.status}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
            {/* Right: Product Details & Specs */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-start pt-4 lg:pt-0"
            >
              <div className="mb-6 inline-block hidden lg:block">
                <span className="text-[#e9b0a1] text-[10px] md:text-xs uppercase tracking-[0.3em] border border-[#e9b0a1]/30 px-4 py-1.5 rounded-full bg-[#e9b0a1]/5 backdrop-blur-sm">
                  {product.category || "Fine Jewelry"}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#fdfbf7] to-[#d6c5b3] mb-6 leading-[1.1]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {product.name}
              </h1>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-2xl md:text-3xl font-light text-[#fdfbf7]/90 tracking-wider">
                  {product.price}
                </span>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 md:w-5 md:h-5 fill-[#e9b0a1] text-[#e9b0a1]" 
                    />
                  ))}
                </div>
              </div>
              <p className="text-[#fdfbf7]/80 font-light leading-relaxed mb-10 max-w-xl text-base md:text-lg">
                {product.description}
              </p>
              {/* Technical Specifications */}
              {product.specifications && (
                <div className="mb-12">
                  <h3 className="text-sm tracking-[0.2em] uppercase text-[#e9b0a1] mb-6 border-b border-white/10 pb-4">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.1em] text-white/40 mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-sm font-light text-white/90">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Prominent CTA */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative w-full sm:w-auto overflow-hidden px-12 py-5 bg-gradient-to-r from-[#e9b0a1]/20 to-[#c78b7a]/20 backdrop-blur-md border border-[#e9b0a1]/50 hover:bg-[#e9b0a1]/30 hover:border-[#e9b0a1]/80 transition-all duration-500 flex items-center justify-center gap-4 cursor-pointer shadow-[0_0_40px_rgba(233,176,161,0.15)] hover:shadow-[0_0_60px_rgba(233,176,161,0.3)] rounded-sm"
              >
                 <span className="relative z-10 text-[#fdfbf7] uppercase tracking-[0.25em] text-xs font-semibold group-hover:text-white transition-colors">
                   Send Enquiry
                 </span>
                 <MessageCircle className="w-5 h-5 text-[#e9b0a1] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#e9b0a1] via-[#f7e2d7] to-[#e9b0a1] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out" />
              </button>
             
            </motion.div>
          </div>
        </div>
      </div>
      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
