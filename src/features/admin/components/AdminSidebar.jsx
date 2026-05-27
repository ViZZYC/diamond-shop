"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut,
} from 'lucide-react';
import { logoutAction } from '@/app/(admin-login)/admin/login/actions';
import { toast } from 'sonner';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    toast.success("Logging out...");
  };

  return (
    <aside className="w-64 bg-[#3A3241] h-screen flex flex-col fixed left-0 top-0 z-40 transition-all duration-300 shadow-xl border-r border-[#544850]">
      <div className="h-24 flex items-center px-8 border-b border-[#544850]">
        <Link href="/admin" className="flex flex-col group w-full">
          <span 
            className="text-3xl font-semibold tracking-tight text-[#fdfbf7] group-hover:text-[#e9b0a1] transition-colors"
          >
            Amiee
          </span>
          <span 
            className="text-sm italic text-[#e9b0a1] -mt-1 ml-4"
          >
            Admin Portal
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-8 px-4 flex flex-col gap-2">
        <div className="text-[10px] font-semibold text-[#e8b4a4]/50 uppercase tracking-[0.2em] mb-4 px-4">
          Menu
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/admin');
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-gradient-to-r from-[#e9b0a1]/20 to-transparent text-[#e9b0a1] border border-[#e9b0a1]/20' 
                  : 'text-[#f2d7cfb3] hover:bg-[#544850]/50 hover:text-[#fdfbf7]'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-110'}`} />
              <span className="font-medium tracking-wide text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-6 border-t border-[#544850]">
        <form action={logoutAction} onSubmit={handleLogout}>
          <button type="submit" className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-[#f2d7cfb3] hover:bg-rose-500/10 hover:text-rose-400 transition-all duration-300 group">
            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium tracking-wide text-sm">Sign Out</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
