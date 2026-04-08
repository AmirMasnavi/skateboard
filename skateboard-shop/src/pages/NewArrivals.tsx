import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  return (
    <div className="pt-20 bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-[#FCEE09] text-sm uppercase tracking-widest font-semibold mb-4">
          Just Dropped
        </p>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider text-[#121212] dark:text-[#F5F5F5]">
          Fresh Off The Truck
        </h1>
        <p className="mt-4 text-[#999999] text-lg max-w-xl mx-auto">
          The latest drops from Mellow and our favorite partners. Stay ahead of the curve.
        </p>
      </div>

      <div className="border-t border-gray-200 dark:border-[#333333] transition-colors duration-300">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center gap-6">
          <p className="text-[#999999] text-sm uppercase tracking-widest">New drops coming soon</p>
          <h2 className="text-3xl font-bold uppercase tracking-wider text-[#121212] dark:text-[#F5F5F5]">
            Explore the Full Collection
          </h2>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-[#FCEE09] text-[#121212] font-bold text-lg uppercase py-4 px-8 rounded transition-transform hover:scale-105"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
