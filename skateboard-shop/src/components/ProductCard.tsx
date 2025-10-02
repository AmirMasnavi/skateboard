import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  brand: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, brand, name, price }) => {
  return (
    <div className="group relative cursor-pointer">
      {/* Image Container */}
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-800">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h3 className="text-sm text-gray-300">{brand}</h3>
        <p className="text-base font-semibold text-white truncate">{name}</p>
        <p className="mt-1 text-lg font-medium text-[#FCEE09]">€{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;