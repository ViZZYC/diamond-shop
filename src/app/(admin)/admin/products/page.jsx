"use client";

import Link from 'next/link';
import { Plus, Search, Filter, ArrowUpDown, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

// Placeholder data
const products = [
  { id: '1', name: 'Solitaire Diamond Ring', category: 'Rings', price: '$2,499', stock: 15, status: 'Active' },
  { id: '2', name: 'Pearl Drop Earrings', category: 'Earrings', price: '$850', stock: 8, status: 'Active' },
  { id: '3', name: 'Gold Chain Necklace', category: 'Necklaces', price: '$1,200', stock: 0, status: 'Out of Stock' },
  { id: '4', name: 'Diamond Tennis Bracelet', category: 'Bracelets', price: '$4,100', stock: 5, status: 'Active' },
  { id: '5', name: 'Vintage Emerald Ring', category: 'Rings', price: '$3,200', stock: 2, status: 'Low Stock' },
];

export default function AdminProducts() {
  const handleAction = (actionName) => {
    toast.message(`${actionName} triggered`, { description: 'This feature will be connected to your Python API.' });
  };

  const handleDelete = (name) => {
    toast.error(`Deleted ${name}`);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-[#3A3241]">Products</h1>
          <p className="text-[#7F677A] mt-1 text-sm font-medium">Manage your jewelry inventory and catalogs.</p>
        </div>
        <Link 
          href="/admin/products/new" 
          className="inline-flex items-center gap-2 bg-[#e9b0a1] text-[#2C1F2A] px-6 py-3 rounded-lg text-sm font-bold  hover:bg-[#c78b7a] transition-colors shadow-lg shadow-[#e9b0a1]/30 active:scale-[0.98]"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 overflow-hidden">
        <div className="p-6 border-b border-[#e9b0a1]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7F677A]" />
            <input
              type="text"
              placeholder="Search products..."
              onKeyDown={(e) => e.key === 'Enter' && handleAction(`Search for "${e.target.value}"`)}
              className="w-full pl-10 pr-4 py-3 bg-[#fff3ee]/50 border border-[#e9b0a1]/20 rounded-lg text-sm focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241] placeholder:text-[#7F677A]"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button onClick={() => handleAction('Filter')} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-[#3A3241] border border-[#e9b0a1]/30 hover:bg-[#fff3ee] rounded-lg transition-colors">
              <Filter className="w-4 h-4 text-[#c78b7a]" />
              Filter
            </button>
            <button onClick={() => handleAction('Sort')} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-[#3A3241] border border-[#e9b0a1]/30 hover:bg-[#fff3ee] rounded-lg transition-colors">
              <ArrowUpDown className="w-4 h-4 text-[#c78b7a]" />
              Sort
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#fff3ee]/50 text-[#7F677A] font-medium border-b border-[#e9b0a1]/20">
              <tr>
                <th className="px-8 py-5">Product Name</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5">Price</th>
                <th className="px-8 py-5">Stock</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e9b0a1]/10">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-[#fff3ee]/30 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e9b0a1]/20 to-[#c78b7a]/20 flex-shrink-0 border border-[#e9b0a1]/30"></div>
                      <span className="font-semibold text-[#3A3241]">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-[#7F677A]">{product.category}</td>
                  <td className="px-8 py-5 text-[#3A3241] font-bold">{product.price}</td>
                  <td className="px-8 py-5 text-[#7F677A]">{product.stock}</td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold ${
                      product.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      product.status === 'Low Stock' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleAction(`Edit ${product.name}`)} className="p-2 text-[#7F677A] hover:text-[#3A3241] hover:bg-[#e9b0a1]/20 rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(product.name)} className="p-2 text-[#7F677A] hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-[#e9b0a1]/20 flex items-center justify-between text-sm text-[#7F677A]">
          <div>Showing 1 to 5 of 12 items</div>
          <div className="flex gap-2">
            <button onClick={() => handleAction('Previous Page')} className="px-4 py-2 rounded-xl hover:bg-[#fff3ee] font-medium transition-colors border border-transparent hover:border-[#e9b0a1]/30">Prev</button>
            <button className="px-4 py-2 rounded-xl bg-[#3A3241] text-white font-medium transition-colors shadow-md">1</button>
            <button onClick={() => handleAction('Page 2')} className="px-4 py-2 rounded-xl hover:bg-[#fff3ee] font-medium transition-colors border border-transparent hover:border-[#e9b0a1]/30">2</button>
            <button onClick={() => handleAction('Page 3')} className="px-4 py-2 rounded-xl hover:bg-[#fff3ee] font-medium transition-colors border border-transparent hover:border-[#e9b0a1]/30">3</button>
            <button onClick={() => handleAction('Next Page')} className="px-4 py-2 rounded-xl hover:bg-[#fff3ee] font-medium transition-colors border border-transparent hover:border-[#e9b0a1]/30">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
