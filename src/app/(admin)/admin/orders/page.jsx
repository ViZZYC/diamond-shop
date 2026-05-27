"use client";

import { Search, Filter, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminOrders() {
  const handleAction = (actionName) => {
    toast.message(`${actionName} triggered`, { description: 'Connect this to your Python backend.' });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-[#3A3241]">Orders</h1>
          <p className="text-[#7F677A] mt-1 text-sm font-medium">Manage and track customer orders.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 overflow-hidden">
        <div className="p-6 border-b border-[#e9b0a1]/20 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7F677A]" />
            <input
              type="text"
              placeholder="Search orders..."
              onKeyDown={(e) => e.key === 'Enter' && handleAction(`Search for "${e.target.value}"`)}
              className="w-full pl-10 pr-4 py-3 bg-[#fff3ee]/50 border border-[#e9b0a1]/20 rounded-lg text-sm focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241] placeholder:text-[#7F677A]"
            />
          </div>
          <button 
            onClick={() => handleAction('Filter Orders')}
            className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#3A3241]  bg-transparent border border-[#e9b0a1]/30 hover:bg-[#fff3ee] rounded-lg transition-colors"
          >
            <Filter className="w-4 h-4 text-[#c78b7a]" />
            Filter
          </button>
        </div>

        <div className="p-20 flex flex-col items-center justify-center text-center bg-[#fff3ee]/10">
          <div className="w-20 h-20 bg-gradient-to-br from-[#fff3ee] to-[#e9b0a1]/20 rounded-lg flex items-center justify-center mb-6 shadow-inner shadow-[#e9b0a1]/20 text-[#c78b7a]">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-[#3A3241] mb-2">No orders yet</h3>
          <p className="text-[#7F677A] text-sm max-w-sm leading-relaxed">When customers place orders, they will appear here. This page is ready to be connected to your Python backend.</p>
        </div>
      </div>
    </div>
  );
}
