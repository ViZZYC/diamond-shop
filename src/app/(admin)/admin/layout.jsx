import AdminSidebar from "@/features/admin/components/AdminSidebar";
import AdminHeader from "@/features/admin/components/AdminHeader";
import { Toaster } from "sonner";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#3A3241]/5 flex font-sans">
      <Toaster position="top-right" richColors />
      <AdminSidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
