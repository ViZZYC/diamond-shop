"use client";

import { useState } from 'react';
import { UploadCloud, X, Save } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function ProductForm() {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = () => {
    toast.message("File browser opened", { description: "Select an image to upload." });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: 'Saving product to catalog...',
        success: () => {
          setIsSubmitting(false);
          router.push('/admin/products');
          return 'Product saved successfully!';
        },
        error: () => {
          setIsSubmitting(false);
          return 'Failed to save product.';
        },
      }
    );
  };

  return (
    <form onSubmit={handleSave} className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-[#3A3241]">Add New Product</h1>
          <p className="text-[#7F677A] mt-1 text-sm font-medium">Create a new jewelry item for your store.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin/products" className="px-6 py-3 text-[#3A3241] font-bold text-sm hover:bg-[#fff3ee] rounded-lg transition-colors border border-transparent hover:border-[#e9b0a1]/30">
            Cancel
          </Link>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-[#3A3241] text-[#fdfbf7] px-8 py-3 rounded-lg text-sm font-bold hover:bg-[#544850] transition-colors shadow-lg shadow-[#3A3241]/20 active:scale-[0.98] disabled:opacity-70"
          >
            <Save className="w-4 h-4" />
            {isSubmitting ? 'Saving...' : 'Save Product'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <div className="bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-[#3A3241]">Basic Information</h2>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Product Title</label>
              <input 
                type="text" 
                required
                placeholder="e.g. 18k Gold Solitaire Diamond Ring" 
                className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241] placeholder:text-[#7F677A]/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Description</label>
              <textarea 
                rows="5"
                required
                placeholder="Describe the piece..." 
                className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241] placeholder:text-[#7F677A]/50 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Media Upload */}
          <div className="bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-[#3A3241]">Media</h2>
            
            <div 
              onClick={handleImageUpload}
              className="border-2 border-dashed border-[#e9b0a1]/40 rounded-3xl p-12 flex flex-col items-center justify-center text-center hover:bg-[#fff3ee]/50 hover:border-[#e9b0a1] transition-all cursor-pointer group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#fff3ee] to-[#e9b0a1]/20 text-[#c78b7a] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg shadow-[#e9b0a1]/20 transition-all duration-500">
                <UploadCloud className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-[#3A3241] mb-2 uppercase tracking-wide">Click to upload or drag and drop</h3>
              <p className="text-xs font-medium text-[#7F677A]">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>

          {/* Jewelry Details */}
          <div className="bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-[#3A3241]">Jewelry Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Weight (grams)</label>
                <input 
                  type="number" 
                  step="0.01"
                  placeholder="0.00" 
                  className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241]"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Material</label>
                <select className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241] appearance-none">
                  <option value="">Select material</option>
                  <option value="18k_gold">18k Gold</option>
                  <option value="14k_gold">14k Gold</option>
                  <option value="platinum">Platinum</option>
                  <option value="silver">Silver</option>
                  <option value="rose_gold">Rose Gold</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Diamond Carat</label>
                <input 
                  type="number" 
                  step="0.01"
                  placeholder="0.00" 
                  className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241]"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Gemstone Details</label>
                <input 
                  type="text" 
                  placeholder="e.g. VVS1 Clarity, Color D" 
                  className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar settings */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-[#3A3241]">Pricing & Inventory</h2>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Price (USD)</label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7F677A]">$</span>
                <input 
                  type="number" 
                  required
                  placeholder="0.00" 
                  className="w-full pl-10 pr-4 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Stock Quantity</label>
              <input 
                type="number" 
                required
                placeholder="0" 
                className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241]"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">SKU</label>
              <input 
                type="text" 
                placeholder="e.g. RG-10294" 
                className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241]"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-[#e9b0a1]/20 p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-[#3A3241]">Organization</h2>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Category</label>
              <select className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241] appearance-none">
                <option value="">Select category</option>
                <option value="rings">Rings</option>
                <option value="necklaces">Necklaces</option>
                <option value="earrings">Earrings</option>
                <option value="bracelets">Bracelets</option>
                <option value="diamonds">Diamonds</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#7F677A] uppercase tracking-wider text-[11px]">Status</label>
              <select className="w-full px-5 py-3.5 bg-[#fdfbf7] border border-[#e9b0a1]/20 rounded-2xl focus:ring-2 focus:ring-[#e9b0a1]/30 focus:border-[#e9b0a1] transition-all text-[#3A3241] appearance-none">
                <option value="active">Active</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
