"use client"

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/product/ProductCard'

const CATEGORIES = ['All', 'Ring', 'Necklace', 'Earring', 'Bracelet']

export default function ExploreClient({ products }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory, products])

  return (
    <div className="relative w-full min-h-screen bg-linear-to-tr from-[#7F677A] via-[#544850] to-[#7F677A] overflow-hidden text-[#fdfbf7]">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5 -mt-1 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[60%] left-[-5%] w-[500px] h-[500px] bg-[#7F677A]/60 rounded-full blur-[80px]" />
        <div className="absolute top-[60%] right-[-5%] w-[500px] h-[500px] bg-[#3A3241]/15 rounded-full blur-[60px]" />
        <div className="absolute top-[30%] left-1/2 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-stone-200/10 rounded-full blur-[50px]" />
      </div>

      <main className="relative z-10 pt-16 pb-24 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <section className="max-w-3xl mx-auto text-center mb-14 md:mb-18 lg:mb-20 relative group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#e9b0a1] rounded-full blur-[120px] opacity-10 group-hover:opacity-25 transition-opacity duration-1000 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="flex items-center gap-1">
              <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#e9b0a1]" />
              <div className="w-1 h-1 rotate-45 bg-[#e9b0a1]" />
            </div>

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e9b0a1] to-[#d6c5b3] text-xs md:text-sm uppercase tracking-[0.4em] font-medium">
              Explore Collection
            </span>

            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rotate-45 bg-[#e9b0a1]" />
              <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#e9b0a1]" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-[#fdfbf7]/80 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto"
          >
            Explore every piece in the Amiee collection and refine by category
            to find rings, necklaces and earrings that move with your light.
          </motion.p>
        </section>

        {/* Category filters */}
        <section className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] rounded-full border transition-all duration-400 ${
                  isActive
                    ? 'border-[#e9b0a1] bg-gradient-to-r from-[#e9b0a1] to-[#c78b7a] text-black shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
                    : 'border-white/20 text-[#fdfbf7]/80 hover:border-[#e9b0a1]/70 hover:text-[#e9b0a1]'
                }`}
              >
                {category}
              </button>
            )
          })}
        </section>

        {/* Results meta */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-[#fdfbf7]/60 mb-6">
          <span>
            Showing {filteredProducts.length} piece
            {filteredProducts.length !== 1 ? 's' : ''}{' '}
            {activeCategory !== 'All' && `in ${activeCategory}`}
          </span>
        </div>

        {/* Product grid */}
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </section>
      </main>
    </div>
  )
}
