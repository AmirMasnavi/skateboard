
import ProductCard from './ProductCard';

import santaCruzDeck from '../assets/deck-santacruz.jpg';
import powellDeck from '../assets/deck-powell.jpg';
import elementDeck from '../assets/deck-element2.jpg';
import bakerDeck from '../assets/deck-baker.jpg';

const mockProducts = [
  { id: 1, imageUrl: santaCruzDeck, brand: 'Santa Cruz', name: 'Classic Dot Skateboard Deck', price: 65.00 },
  { id: 2, imageUrl: powellDeck, brand: 'Powell-Peralta', name: 'Ripper Skateboard Deck', price: 72.50 },
  { id: 3, imageUrl: elementDeck, brand: 'Element', name: 'Seal Skateboard Deck', price: 59.99 },
  { id: 4, imageUrl: bakerDeck, brand: 'Baker', name: 'Brand Logo Skateboard Deck', price: 68.00 },
];

// Asymmetric 12-column layout — zine/gallery style
// col-span and row offset per item to break the grid
const gridConfig = [
  { colSpan: 'md:col-span-7', rowSpan: 'md:row-span-2', height: 'h-[520px]' }, // Wide hero
  { colSpan: 'md:col-span-5', rowSpan: '',               height: 'h-[240px]' }, // Standard top-right
  { colSpan: 'md:col-span-3', rowSpan: '',               height: 'h-[300px] md:mt-8' }, // Small, offset down
  { colSpan: 'md:col-span-2', rowSpan: '',               height: 'h-[260px]' }, // Narrow accent
];

const FeaturedProducts = () => {
  return (
    <div id="shop" className="bg-[#121212] py-16">
      <div className="container mx-auto px-4">

        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#F5F5F5] uppercase tracking-widest">
            The Vault
          </h2>
          <span className="text-[#999999] text-xs uppercase tracking-widest">
            {mockProducts.length} pieces
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {mockProducts.map((product, i) => {
            const cfg = gridConfig[i] ?? { colSpan: 'md:col-span-3', rowSpan: '', height: 'h-[300px]' };
            return (
              <div key={product.id} className={`col-span-1 ${cfg.colSpan} ${cfg.rowSpan} ${cfg.height}`}>
                <ProductCard
                  imageUrl={product.imageUrl}
                  brand={product.brand}
                  name={product.name}
                  price={product.price}
                />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FeaturedProducts;