import FeaturedProducts from '../components/FeaturedProducts';

const Shop = () => {
  return (
    <div className="pt-20 bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-[#FCEE09] text-sm uppercase tracking-widest font-semibold mb-4">
          Mellow Collection
        </p>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider text-[#121212] dark:text-[#F5F5F5]">
          Full Collection
        </h1>
        <p className="mt-4 text-[#999999] text-lg max-w-xl mx-auto">
          Premium hardware and soft goods curated for quality and performance.
        </p>
      </div>
      <FeaturedProducts />
    </div>
  );
};

export default Shop;
