"use client";

import { Bell, Search, User } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminHeader() {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      toast.info(`Searching for: ${e.target.value}`);
      e.target.value = '';
    }
  };

  const handleNotifications = () => {
    toast.success("You have 3 new orders to review!");
  };

  const handleProfile = () => {
    toast.message("Profile settings clicked");
  };

  return (
    <header className="h-24 bg-white/60 backdrop-blur-xl border-b border-[#e9b0a1]/20 flex items-center justify-between px-10 sticky top-0 z-30 shadow-sm">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7F677A] group-focus-within:text-[#e9b0a1] transition-colors duration-300" />
          <input
            type="text"
            onKeyDown={handleSearch}
            placeholder="Search products, orders, customers (Press Enter)"
            className="w-full bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-lg py-3.5 pl-14 pr-6 text-sm font-medium focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all duration-300 placeholder:text-[#7F677A]/60 text-[#3A3241]"
          />
        </div>
      </div>

      <div className="flex items-center gap-8 ml-8">
        <button 
          onClick={handleNotifications}
          className="relative p-2 text-[#7F677A] hover:text-[#e9b0a1] transition-colors duration-300"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-[#e8b4a4] rounded-lg border-2 border-white animate-pulse"></span>
        </button>

        <div className="h-8 w-px bg-[#e9b0a1]/20"></div>

        <button onClick={handleProfile} className="flex items-center gap-4 group">
          <div className="text-right hidden md:block">
            <div className="text-sm font-bold text-[#3A3241]">Admin User</div>
            <div className="text-xs font-medium text-[#7F677A]">Super Admin</div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#e9b0a1] to-[#c78b7a] text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md shadow-[#e9b0a1]/30">
            <User className="w-5 h-5" />
          </div>
        </button>
      </div>
    </header>
  );
}
