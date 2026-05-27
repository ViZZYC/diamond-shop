"use client";

import { ArrowUpRight, DollarSign, Package, ShoppingBag, Users, Download } from 'lucide-react';
import { toast } from 'sonner';

const stats = [
  { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: DollarSign },
  { name: 'Active Orders', value: '356', change: '+12.5%', icon: ShoppingBag },
  { name: 'Total Products', value: '1,245', change: '+3.2%', icon: Package },
  { name: 'New Customers', value: '89', change: '+18.4%', icon: Users },
];

export default function AdminDashboard() {
  const handleDownload = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Generating report...',
        success: 'Report downloaded successfully!',
        error: 'Failed to download report.',
      }
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-[#3A3241]">Dashboard</h1>
          <p className="text-[#7F677A] mt-1 text-sm font-medium">Overview of your store's performance.</p>
        </div>
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 bg-[#3A3241] text-[#fdfbf7] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#544850] transition-colors shadow-lg shadow-[#3A3241]/20 active:scale-[0.98]"
        >
          <Download className="w-4 h-4" />
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-3xl shadow-sm border border-[#e9b0a1]/20 hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#fff3ee] text-[#c78b7a] flex items-center justify-center group-hover:bg-[#e9b0a1] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg text-xs font-bold">
                  <ArrowUpRight className="w-4 h-4" />
                  {stat.change}
                </div>
              </div>
              <h3 className="text-[#7F677A] text-sm font-medium">{stat.name}</h3>
              <p className="text-3xl font-semibold text-[#3A3241] mt-1">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 p-8 min-h-[400px] flex flex-col">
          <h2 className="text-2xl font-semibold text-[#3A3241] mb-6">Revenue Overview</h2>
          <div className="flex-1 flex items-center justify-center border-2 border-dashed border-[#e9b0a1]/30 rounded-lg bg-[#fff3ee]/30">
            <p className="text-[#7F677A] font-medium text-sm">Revenue Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 p-8 flex flex-col">
          <h2 className="text-2xl font-semibold text-[#3A3241] mb-6">Recent Orders</h2>
          <div className="flex-1 flex items-center justify-center border-2 border-dashed border-[#e9b0a1]/30 rounded-lg bg-[#fff3ee]/30">
            <p className="text-[#7F677A] font-medium text-sm">Orders List Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
