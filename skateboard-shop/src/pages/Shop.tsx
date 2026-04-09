import { useState } from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

const filters = ['All', 'Hardware', 'Soft Goods', 'Limited'];

const Shop = () => {
  const [active, setActive] = useState('All');

  return (
    <div className="pt-20 bg-[#121212] min-h-screen">

      {/* Entry statement */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#333333] pb-10">
          <div>
            <p className="text-[#999999] text-xs uppercase tracking-[0.3em] mb-4">
              Private Viewing — Members Only
            </p>
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-bold uppercase leading-none tracking-tighter text-[#F5F5F5]">
              The<br />Vault
            </h1>
          </div>
          <p className="text-[#999999] text-sm max-w-xs leading-relaxed md:text-right">
            Not everything ends up here. Only what passes.<br />
            Premium decks. Curated for the culture.
          </p>
        </div>

        {/* Text-only filter row */}
        <div className="flex gap-8 pt-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs uppercase tracking-[0.3em] pb-1 border-b transition-colors duration-300 ${
                active === f
                  ? 'text-[#FCEE09] border-[#FCEE09]'
                  : 'text-[#999999] border-transparent hover:text-[#F5F5F5]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <FeaturedProducts activeFilter={active} />

    </div>
  );
};

export default Shop;
