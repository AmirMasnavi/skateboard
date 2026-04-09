import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDrawer, { Product } from './ProductDrawer';

import santaCruzDeck from '../assets/deck-santacruz.jpg';
import powellDeck    from '../assets/deck-powell.jpg';
import elementDeck   from '../assets/deck-element2.jpg';
import bakerDeck     from '../assets/deck-baker.jpg';

const mockProducts: Product[] = [
  { id: 1, imageUrl: santaCruzDeck, brand: 'Santa Cruz',     name: 'Classic Dot Skateboard Deck', price: 65.00, category: 'Hardware'   },
  { id: 2, imageUrl: powellDeck,    brand: 'Powell-Peralta', name: 'Ripper Skateboard Deck',       price: 72.50, category: 'Limited'    },
  { id: 3, imageUrl: elementDeck,   brand: 'Element',        name: 'Seal Skateboard Deck',         price: 59.99, category: 'Hardware'   },
  { id: 4, imageUrl: bakerDeck,     brand: 'Baker',          name: 'Brand Logo Skateboard Deck',   price: 68.00, category: 'Soft Goods' },
];

// Asymmetric 12-column layout — zine/gallery style
const gridConfig = [
  { colSpan: 'md:col-span-7', height: 'h-[520px]' }, // Wide hero
  { colSpan: 'md:col-span-5', height: 'h-[240px]' }, // Standard top-right
  { colSpan: 'md:col-span-3', height: 'h-[300px] md:mt-8' }, // Small, offset
  { colSpan: 'md:col-span-2', height: 'h-[260px]' }, // Narrow accent
];

interface Props {
  activeFilter?: string;
}

const FeaturedProducts: React.FC<Props> = ({ activeFilter = 'All' }) => {
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = activeFilter === 'All'
    ? mockProducts
    : mockProducts.filter((p) => p.category === activeFilter);

  return (
    <>
      <div id="shop" className="bg-[#121212] py-16">
        <div className="container mx-auto px-4">

          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-3xl font-bold text-[#F5F5F5] uppercase tracking-widest">
              The Vault
            </h2>
            <span className="text-[#999999] text-xs uppercase tracking-widest">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-[#333333] text-xs uppercase tracking-[0.3em]">Nothing in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {filtered.map((product, i) => {
                const cfg = gridConfig[i] ?? { colSpan: 'md:col-span-3', height: 'h-[300px]' };
                return (
                  <div key={product.id} className={`col-span-1 ${cfg.colSpan} ${cfg.height}`}>
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

        </div>
      </div>

      <ProductDrawer product={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default FeaturedProducts;
