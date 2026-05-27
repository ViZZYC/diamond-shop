"use client";

import { Settings as SettingsIcon, Shield, Bell, CreditCard } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminSettings() {
  const handleSettingClick = (settingName) => {
    toast.message(`Opening ${settingName} settings...`, { description: 'This form will be available once connected to the backend.' });
  };

  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-[#3A3241]">Settings</h1>
        <p className="text-[#7F677A] mt-1 text-sm font-medium">Manage your store preferences and configurations.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 p-6">
        <div 
          onClick={() => handleSettingClick('General Information')}
          className="flex items-start gap-5 p-6 rounded-lg hover:bg-[#fff3ee]/50 transition-colors cursor-pointer border-b border-[#e9b0a1]/10 last:border-0 group"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50/50 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <SettingsIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#3A3241]">General Information</h3>
            <p className="text-sm text-[#7F677A] mt-1 font-medium">Update your store name, currency, and basic details.</p>
          </div>
        </div>

        <div 
          onClick={() => handleSettingClick('Security & Permissions')}
          className="flex items-start gap-5 p-6 rounded-lg hover:bg-[#fff3ee]/50 transition-colors cursor-pointer border-b border-[#e9b0a1]/10 last:border-0 group"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-50/50 text-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#3A3241]">Security & Permissions</h3>
            <p className="text-sm text-[#7F677A] mt-1 font-medium">Manage admin access, API keys, and authentication settings.</p>
          </div>
        </div>

        <div 
          onClick={() => handleSettingClick('Notifications')}
          className="flex items-start gap-5 p-6 rounded-lg hover:bg-[#fff3ee]/50 transition-colors cursor-pointer border-b border-[#e9b0a1]/10 last:border-0 group"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-50/50 text-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#3A3241]">Notifications</h3>
            <p className="text-sm text-[#7F677A] mt-1 font-medium">Configure email alerts for new orders and low stock.</p>
          </div>
        </div>

        <div 
          onClick={() => handleSettingClick('Payment Gateways')}
          className="flex items-start gap-5 p-6 rounded-lg hover:bg-[#fff3ee]/50 transition-colors cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-xl bg-purple-50/50 text-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#3A3241]">Payment Gateways</h3>
            <p className="text-sm text-[#7F677A] mt-1 font-medium">Connect Stripe, PayPal, or other payment providers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
