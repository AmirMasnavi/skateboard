
import ProductCard from './ProductCard';

// Import the new product images
import santaCruzDeck from '../assets/deck-santacruz.jpg';
import powellDeck from '../assets/deck-powell.jpg';
import elementDeck from '../assets/deck-element2.jpg';
import bakerDeck from '../assets/deck-baker.jpg';


// Update the mock data to use the imported images
const mockProducts = [
  { id: 1, imageUrl: santaCruzDeck, brand: 'Santa Cruz', name: 'Classic Dot Skateboard Deck', price: 65.00 },
  { id: 2, imageUrl: powellDeck, brand: 'Powell-Peralta', name: 'Ripper Skateboard Deck', price: 72.50 },
  { id: 3, imageUrl: elementDeck, brand: 'Element', name: 'Seal Skateboard Deck', price: 59.99 },
  { id: 4, imageUrl: bakerDeck, brand: 'Baker', name: 'Brand Logo Skateboard Deck', price: 68.00 },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-[#121212] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#F5F5F5] uppercase mb-10">
          Best Sellers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              brand={product.brand}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;