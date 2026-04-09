import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  brand: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, brand, name, price }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden h-full">
      {/* Image */}
      <div className="w-full h-full overflow-hidden bg-[#1a1a1a]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Curiosity Hover Overlay — hidden by default, fades in on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <p className="text-[#999999] text-[10px] uppercase tracking-widest mb-1">{brand}</p>
        <p className="text-[#F5F5F5] text-sm font-semibold uppercase tracking-wide truncate">{name}</p>
        <p className="mt-2 text-[#FCEE09] text-base font-bold tracking-widest">€{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;