"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import InquiryModal from "@/components/ui/InquiryModal";

export default function SectionHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isMobileMenuOpen]);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  const navLinks = [
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "Diamond Guide", href: "/know-your-diamond" },
    { name: "Customize", href: "/customize" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 h-24 md:h-28">
        <div className="absolute inset-0 bg-gradient-to-r from-[#160f1c]/70 via-[#231b2a]/55 to-[#1b1522]/70 backdrop-blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e9b0a1]/70 to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 shadow-[0_28px_80px_rgba(0,0,0,0.55)]" />

        <div className="relative w-full h-full flex items-center justify-between px-6 md:px-12 max-w-[1920px] mx-auto">
          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex flex-1 items-center gap-10">
            {navLinks.slice(0, 2).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className="group relative text-[11px] uppercase tracking-[0.36em] font-light transition-colors duration-500">
                  <span className={`relative ${isActive ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                    {link.name}
                    <span className={`absolute left-0 -bottom-2 h-[1px] bg-gradient-to-r from-[#e9b0a1] via-[#f7e2d7] to-transparent transition-all duration-700 ${isActive ? "w-full opacity-90" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-80"}`} />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Center Logo */}
          <Link href="/" className="flex flex-col items-center gap-1 group cursor-pointer z-50 select-none">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden ring-1 ring-white/25 shadow-[0_0_28px_rgba(233,176,161,0.22)] transition-transform duration-700 ease-out group-hover:scale-110">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 to-transparent" />
              <Image src="/assets/logo.png" alt="Amiee Jewelry Logo" fill sizes="48px" priority className="object-cover" />
            </div>
            <span className="text-white text-[10px] md:text-[11px] uppercase tracking-[0.48em] pt-1 font-medium text-center opacity-95 group-hover:opacity-100 transition duration-500">
              Amiee Jewelry
            </span>
          </Link>

          {/* Desktop Right Nav + Hamburger */}
          <nav className="flex-1 flex justify-end items-center gap-8 z-50">
            <div className="hidden lg:flex gap-10 items-center mr-6">
              {navLinks.slice(2).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.name} href={link.href} className="group relative text-[11px] uppercase tracking-[0.36em] font-light transition-colors duration-500">
                    <span className={`relative ${isActive ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                      {link.name}
                      <span className={`absolute left-0 -bottom-2 h-[1px] bg-gradient-to-r from-[#e9b0a1] via-[#f7e2d7] to-transparent transition-all duration-700 ${isActive ? "w-full opacity-90" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-80"}`} />
                    </span>
                  </Link>
                );
              })}
            </div>

            <button className="lg:hidden text-white p-2 focus:outline-none" type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              <motion.div animate={isMobileMenuOpen ? "open" : "closed"} className="w-6 h-6 flex flex-col justify-center items-center gap-[5px]">
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }} className="w-6 h-[1.5px] bg-white block" />
                <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="w-6 h-[1.5px] bg-white block" />
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }} className="w-6 h-[1.5px] bg-white block" />
              </motion.div>
            </button>

            <button type="button" onClick={() => setIsInquiryModalOpen(true)} className="hidden sm:block text-[#2b2433] text-[11px] uppercase tracking-[0.34em] px-7 py-2.5 rounded-full bg-gradient-to-r from-[#e9b0a1] via-[#f7e2d7] to-[#c78b7a] shadow-[0_14px_40px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition-all duration-500 relative overflow-hidden group">
              <span className="relative z-10">Inquiry</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-500" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#160f1c]/90 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8 mt-16">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-xl uppercase tracking-[0.3em] font-light hover:text-[#e9b0a1] transition-colors duration-300">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: navLinks.length * 0.1, duration: 0.5 }} className="mt-8">
                <button type="button" onClick={() => { setIsMobileMenuOpen(false); setIsInquiryModalOpen(true); }} className="text-[#2b2433] text-[12px] uppercase tracking-[0.34em] px-10 py-3.5 rounded-full bg-gradient-to-r from-[#e9b0a1] via-[#f7e2d7] to-[#c78b7a] shadow-[0_14px_40px_rgba(0,0,0,0.6)]">
                  Inquiry
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <InquiryModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />
    </>
  );
}
