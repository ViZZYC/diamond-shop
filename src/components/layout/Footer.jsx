  "use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FOOTER_LINKS = {
  shop: [
    { name: "All Diamonds", href: "/explore" },
    { name: "Engagement Rings", href: "/explore?category=rings" },
    { name: "Fine Jewelry", href: "/explore?category=jewelry" },
    { name: "Custom Design", href: "/customize" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "Diamond Guarantee", href: "/guarantee" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "Our Story", href: "/about" },
   
  ],
};

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#" },
  { name: "Pinterest", href: "#" },
  { name: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#271c31] text-white pt-24 lg:pt-32 pb-12 overflow-hidden border-t border-[#e9b0a1]/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#231b2a]/30 to-[#120c17]" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e9b0a1]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 lg:mb-28">

          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-12">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-4 group">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-white/20 shadow-[0_0_20px_rgba(233,176,161,0.15)] transition-transform duration-500 group-hover:scale-110">
                  <Image src="/assets/logo.png" alt="Amiee Jewelry Logo" fill sizes="48px" className="object-cover" />
                </div>
                <span className="text-[14px] uppercase tracking-[0.4em] font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                  Amiee Jewelry
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-loose max-w-sm font-light">
              Crafting extraordinary diamond masterpieces for the modern era. Experience true elegance and unparalleled brilliance in every cut.
            </p>

            <div className="pt-4 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#e9b0a1]">Join Our Exclusive List</span>
              <div className="relative max-w-sm flex items-center border-b border-white/20 focus-within:border-[#e9b0a1] transition-colors duration-500 pb-2">
                <input type="email" placeholder="Email Address" className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none" />
                <button className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/80 hover:text-[#e9b0a1] transition-colors duration-300 ml-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-8 xl:gap-16 pt-2">
            <div className="flex flex-col gap-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white">Collections</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.shop.map((link) => (
                  <li key={link.name}><Link href={link.href} className="text-sm font-light text-white/50 hover:text-white transition-colors duration-300">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white">Client Care</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.name}><Link href={link.href} className="text-sm font-light text-white/50 hover:text-white transition-colors duration-300">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 col-span-2 sm:col-span-1">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white">Maison</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.name}><Link href={link.href} className="text-sm font-light text-white/50 hover:text-white transition-colors duration-300">{link.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} Amiee Jewelry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.name} href={social.href} className="text-[10px] uppercase tracking-[0.2em] font-light text-white/40 hover:text-white transition-colors duration-300 relative group">
                {social.name}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[10px] uppercase tracking-[0.2em] font-light text-white/40 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] uppercase tracking-[0.2em] font-light text-white/40 hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
