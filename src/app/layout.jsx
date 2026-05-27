import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amiee Jewelry",
  description: "Crafting extraordinary diamond masterpieces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Aapka Header Navigation wagera yahan aayega */}
        
        {children}
        
        {/* Aapka Footer yahan aayega */}
        
        {/* Sabse niche isko laga dein, </body> band hone se pehle */}
        <FloatingWhatsApp />
        
      </body>
    </html>
  );
}