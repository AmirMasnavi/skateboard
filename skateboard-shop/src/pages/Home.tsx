import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />

      {/* Our Story Section */}
      <section className="bg-[#121212] dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
            <p className="text-[#FCEE09] text-sm uppercase tracking-widest font-semibold">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-[#F5F5F5]">
              The Mellow Story
            </h2>
            <p className="text-[#999999] text-base md:text-lg leading-relaxed">
              Born from the streets and built for the community. Mellow isn't just about the gear; it's about the ride, the culture, and the people who keep the spirit of skateboarding alive. We provide premium decks and apparel for those who live to stay mellow.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-[#F5F5F5] text-[#F5F5F5] font-bold text-sm uppercase py-3 px-8 rounded hover:bg-[#FCEE09] hover:text-[#121212] hover:border-[#FCEE09] transition-all duration-300"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
