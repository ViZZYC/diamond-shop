"use client";

import { useActionState } from 'react';
import { Lock, Mail, AlertCircle } from 'lucide-react';
import { loginAction } from './actions';

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3A3241] via-[#544850] to-[#7F677A] p-4 relative overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#e9b0a1] rounded-lg blur-[150px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-1000 z-10 relative">
        <div className="bg-[#3A3241]/40 backdrop-blur-2xl border border-[#e8b4a4]/20 p-10 rounded-3xl shadow-2xl shadow-[#2C1F2A]/50">
          <div className="flex flex-col items-center mb-10 text-center">
            <h1 
              className="text-5xl font-semibold text-[#fdfbf7] tracking-tight mb-2"
            >
              Amiee
            </h1>
            <p 
              className="text-[#e8b4a4] text-lg italic"
            >
              Admin Portal
            </p>
          </div>

          {state?.error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-200 text-sm font-medium">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
              <p>{state.error}</p>
            </div>
          )}

          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#fdfbf7]/80 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#e8b4a4]/60 group-focus-within:text-[#e8b4a4] transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="admin@amieejewellers.com"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-[#2C1F2A]/50 border border-[#e8b4a4]/20 rounded-lg focus:ring-1 focus:ring-[#e8b4a4] focus:border-[#e8b4a4] transition-all text-[#fdfbf7] placeholder:text-[#fdfbf7]/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#fdfbf7]/80 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#e8b4a4]/60 group-focus-within:text-[#e8b4a4] transition-colors" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-[#2C1F2A]/50 border border-[#e8b4a4]/20 rounded-lg focus:ring-1 focus:ring-[#e8b4a4] focus:border-[#e8b4a4] transition-all text-[#fdfbf7] placeholder:text-[#fdfbf7]/30"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-to-r from-[#c78b7a] via-[#e9b0a1] to-[#c78b7a] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-[#2C1F2A] font-bold  text-sm py-4 rounded-lg transition-all shadow-lg shadow-[#e9b0a1]/20 active:scale-[0.98] mt-6 flex justify-center"
            >
              {isPending ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
