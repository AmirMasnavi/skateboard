import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDrawer from './ProductDrawer';
import type { Product } from './ProductDrawer';

import santaCruzDeck  from '../assets/deck-santacruz.jpg';
import santaCruzDeck2 from '../assets/deck-santacruz2.jpg';
import powellDeck     from '../assets/deck-powell.jpg';
import powellDeck2    from '../assets/deck-powell2.jpg';
import elementDeck    from '../assets/deck-element.jpg';
import elementDeck2   from '../assets/deck-element2.jpg';
import elementDeck3   from '../assets/deck-element3.jpg';
import bakerDeck      from '../assets/deck-baker.jpg';
import bakerDeck2     from '../assets/deck-baker2.jpg';
import bakerDeck3     from '../assets/deck-baker3.jpg';
import { Link } from 'react-router-dom';

const mockProducts: Product[] = [
  // Hardware
  { id: 1,  imageUrl: santaCruzDeck,  brand: 'Santa Cruz',     name: 'Classic Dot',       price: 65.00, category: 'Hardware'   },
  { id: 5,  imageUrl: santaCruzDeck2, brand: 'Santa Cruz',     name: 'Wave Dot',           price: 70.00, category: 'Hardware'   },
  { id: 3,  imageUrl: elementDeck2,   brand: 'Element',        name: 'Seal',               price: 59.99, category: 'Hardware'   },
  { id: 9,  imageUrl: elementDeck,    brand: 'Element',        name: 'Raw Cut',            price: 57.00, category: 'Hardware'   },
  // Limited
  { id: 2,  imageUrl: powellDeck,     brand: 'Powell-Peralta', name: 'Ripper',             price: 72.50, category: 'Limited'    },
  { id: 6,  imageUrl: powellDeck2,    brand: 'Powell-Peralta', name: 'Flight',             price: 85.00, category: 'Limited'    },
  { id: 7,  imageUrl: elementDeck3,   brand: 'Element',        name: 'Reserve',            price: 64.50, category: 'Limited'    },
  // Soft Goods
  { id: 4,  imageUrl: bakerDeck,      brand: 'Baker',          name: 'Brand Logo',         price: 68.00, category: 'Soft Goods' },
  { id: 8,  imageUrl: bakerDeck2,     brand: 'Baker',          name: 'Street Series',      price: 62.00, category: 'Soft Goods' },
  { id: 10, imageUrl: bakerDeck3,     brand: 'Baker',          name: 'Midnight',           price: 66.00, category: 'Soft Goods' },
];

// Asymmetric 12-column layout — each row sums to 12
// Row 1: 7+5=12 · Row 2: 3+4+5=12 · Row 3: 6+3+3=12 · Row 4: 7+5=12
// Heights use inline style to bypass Tailwind JIT purging of arbitrary values
const gridConfig = [
  { colSpan: 'md:col-span-7', heightPx: 500 },
  { colSpan: 'md:col-span-5', heightPx: 380 },
  { colSpan: 'md:col-span-3', heightPx: 320 },
  { colSpan: 'md:col-span-4', heightPx: 360 },
  { colSpan: 'md:col-span-5', heightPx: 300 },
  { colSpan: 'md:col-span-6', heightPx: 440 },
  { colSpan: 'md:col-span-3', heightPx: 300 },
  { colSpan: 'md:col-span-3', heightPx: 360 },
  { colSpan: 'md:col-span-7', heightPx: 480 },
  { colSpan: 'md:col-span-5', heightPx: 350 },
];

interface Props {
  activeFilter?: string;
  limit?: number;
  showVol01?: boolean;
}

const FeaturedProducts: React.FC<Props> = ({ activeFilter = 'All', limit, showVol01 }) => {
  const [selected, setSelected] = useState<Product | null>(null);

  let filtered = activeFilter === 'All'
    ? mockProducts
    : mockProducts.filter((p) => p.category === activeFilter);

  if (showVol01) {
    // Vol. 01 products (extended to 5 to fill the grid row)
    const vol01Names = ['Classic Dot', 'Wave Dot', 'Ripper', 'Seal', 'Brand Logo'];
    filtered = mockProducts.filter(p => vol01Names.includes(p.name));
  }

  const displayedProducts = limit ? filtered.slice(0, limit) : filtered;

  return (
    <>
      <div id="shop" className="bg-[#121212] py-16">
        <div className="container mx-auto px-4">

          <div className="flex items-baseline justify-between mb-10">
            <Link to="/shop" className="group flex items-center gap-3">
              <h2 className="text-3xl font-bold text-[#F5F5F5] uppercase tracking-widest group-hover:text-[#FCEE09] transition-colors">
                {limit ? 'New Drops' : 'The Vault'}
              </h2>
              <div className="w-8 h-px bg-[#333333] group-hover:bg-[#FCEE09] transition-all group-hover:w-12" />
            </Link>
            <div className="text-right flex flex-col items-end gap-1">
              <span className="text-[#999999] text-xs uppercase tracking-widest">
                {limit ? mockProducts.length : filtered.length} { (limit ? mockProducts.length : filtered.length) === 1 ? 'piece' : 'pieces'}
              </span>
              {limit && (
                <span className="text-[9px] text-[#FCEE09]/60 uppercase tracking-[0.2em] font-medium">
                  Click heading to enter
                </span>
              )}
            </div>
          </div>

          {displayedProducts.length === 0 ? (
            <div className="py-24 text-center border-t border-[#333333]">
              <p className="text-[#333333] text-xs uppercase tracking-[0.3em]">
                Nothing in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {displayedProducts.map((product, i) => {
                const cfg = gridConfig[i % gridConfig.length];
                return (
                  <div
                    key={product.id}
                    className={`col-span-1 ${cfg.colSpan}`}
                    style={{ height: `${cfg.heightPx}px` }}
                  >
                    <ProductCard
                      imageUrl={product.imageUrl}
                      brand={product.brand}
                      name={product.name}
                      price={product.price}
                      onClick={() => setSelected(product)}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {limit && filtered.length > limit && (
            <div className="mt-16 flex justify-center">
              <a
                href="/shop"
                className="group inline-flex items-center justify-center border border-[#333333] text-[#999999] font-bold text-xs uppercase py-4 px-12 tracking-widest hover:border-[#FCEE09] hover:text-[#FCEE09] transition-all duration-300"
              >
                Explore Full Archive
              </a>
            </div>
          )}

        </div>
      </div>

      <ProductDrawer product={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default FeaturedProducts;
