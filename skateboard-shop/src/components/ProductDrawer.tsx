import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export interface Product {
  id: number;
  imageUrl: string;
  brand: string;
  name: string;
  price: number;
  category: string;
}

interface Props {
  product: Product | null;
  onClose: () => void;
}

const ProductDrawer: React.FC<Props> = ({ product, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = product ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-500 ${
          product ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[440px] bg-[#0d0d0d] z-50 border-l border-[#333333] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          product ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header row */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#333333] shrink-0">
          <span className="text-[#999999] text-[10px] uppercase tracking-[0.3em]">
            Private Viewing
          </span>
          <button
            onClick={onClose}
            className="text-[#F5F5F5] hover:text-[#FCEE09] transition-colors duration-300"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {product && (
          <>
            {/* Image — takes available space */}
            <div className="flex-1 overflow-hidden min-h-0">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Details */}
            <div className="shrink-0 px-6 py-6 border-t border-[#333333] flex flex-col gap-4">
              <div>
                <p className="text-[#999999] text-[10px] uppercase tracking-[0.3em] mb-1">
                  {product.brand} — {product.category}
                </p>
                <h2 className="text-[#F5F5F5] text-lg font-bold uppercase tracking-wide leading-tight">
                  {product.name}
                </h2>
              </div>

              <p className="text-[#FCEE09] text-2xl font-bold tracking-widest">
                €{product.price.toFixed(2)}
              </p>

              <button className="w-full flex items-center justify-center gap-3 bg-[#FCEE09] text-[#121212] font-bold text-xs uppercase py-5 tracking-[0.2em] hover:bg-white transition-colors duration-300 group">
                Add to Vault
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-[#333333] text-[10px] uppercase tracking-widest text-center">
                Press ESC to close
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDrawer;
