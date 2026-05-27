import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Eye, Star, MessageCircle } from 'lucide-react' // Added MessageCircle for flair
import Link from 'next/link'

export default function ProductCard({ product, index }) {

  const handleWhatsAppInquiry = (e) => {
    e.stopPropagation();

    const phoneNumber = "9998477789";



    const message = `Inquiry: ${product.name}
Product Category: ${product.category || "Fine Jewelry"}
Price: ${product.price}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative flex flex-col gap-5 cursor-pointer"
    >
      {/* Hover Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#e9b0a1] blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-1000 pointer-events-none" />

      {/* Image Container */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#111] border border-white/5 group-hover:border-[#e9b0a1]/30 transition-colors duration-700 shadow-lg">
        <Link href={`/product/${product.id}`} className="absolute inset-0 z-10" />

        {/* Status Badge */}
        {product.status && (
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-black/40 backdrop-blur-md border border-[#e9b0a1]/40 text-[#fdfbf7] text-[9px] uppercase tracking-[0.3em] px-4 py-1.5">
              {product.status}
            </span>
          </div>
        )}

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover scale-100 group-hover:scale-110 opacity-80 group-hover:opacity-100 transition-all duration-1000"
        />

        {/* Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
          <div className="flex gap-2">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 bg-black/60 backdrop-blur-md border border-[#e9b0a1]/40 text-[#fdfbf7] py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-gradient-to-r hover:from-[#e9b0a1] hover:to-[#c78b7a] hover:text-black transition-all duration-500 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3 h-3" />
              Send Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center text-center space-y-2">
        <Link href={`/product/${product.id}`} className="hover:text-[#e9b0a1] transition-colors duration-300">
          <h3
            className="text-lg sm:text-xl md:text-2xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-br from-[#ffffff] via-[#fdfbf7] to-[#d6c5b3]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {product.name}
          </h3>
        </Link>

        <span className="font-light tracking-[0.15em] text-sm text-[#fdfbf7]/80">
          {product.price}
        </span>

        {/* Rating */}
        <div className="flex gap-1 pt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating)
                ? "fill-[#e9b0a1] text-[#e9b0a1]"
                : "text-white/10"
                }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}