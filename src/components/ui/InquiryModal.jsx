import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center font-light px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-[#160f1c] border border-[#e9b0a1]/20 rounded-3xl shadow-[0_0_80px_rgba(233,176,161,0.15)] overflow-hidden z-10"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#e9b0a1]/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#c78b7a]/15 rounded-full blur-[80px]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors duration-300 z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-10 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-light text-white/90 tracking-[0.1em] mb-3">
                Request an Inquiry
              </h2>
              <div className="w-12 h-px bg-[#e9b0a1]/50 mx-auto mb-4" />
              <p className="text-sm text-white/50 tracking-widest uppercase">
                Begin your bespoke journey
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#e9b0a1] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white/90 focus:outline-none focus:border-[#e9b0a1] transition-colors duration-300 placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#e9b0a1] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white/90 focus:outline-none focus:border-[#e9b0a1] transition-colors duration-300 placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#e9b0a1] mb-2">
                  Your Message or Vision
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about what you're looking for..."
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white/90 focus:outline-none focus:border-[#e9b0a1] transition-colors duration-300 placeholder:text-white/20 resize-none"
                />
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full group relative mt-4 px-8 py-4 bg-transparent border border-[#e9b0a1]/50 hover:border-[#e9b0a1] transition-colors duration-500 overflow-hidden flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center gap-2 text-[#e9b0a1] tracking-[0.2em] uppercase text-xs font-medium group-hover:text-black transition-colors duration-500">
                  <Send className="w-4 h-4" />
                  Send Request
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#e9b0a1] via-[#f7e2d7] to-[#e9b0a1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
