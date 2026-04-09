import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import storyImage from '../assets/background2.jpg';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts limit={5} showVol01={true} />

      {/* Our Story Section - Zine Spread Layout */}
      <section className="bg-[#121212] py-32 overflow-hidden border-t border-[#333333]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-7 relative group">
              <div className="relative aspect-[4/5] md:aspect-video overflow-hidden">
                <img 
                  src={storyImage} 
                  alt="Skate culture" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 film-grain opacity-20"></div>
              </div>
              {/* Decorative label */}
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-[#FCEE09] text-[#121212] p-8 font-bold uppercase tracking-[0.2em] text-sm">
                The Streets Are Talking
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-12">
              <p className="text-[#FCEE09] text-xs uppercase tracking-[0.3em] font-bold">
                01 — The Manifesto
              </p>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#F5F5F5] leading-none">
                Born From<br />The Concrete
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-[#999999] text-lg leading-relaxed font-medium">
                  Mellow isn't just a shop. It's a digital archive of the graphics, the shapes, and the grit that define our culture. 
                </p>
                <p className="text-[#999999] text-base leading-relaxed italic">
                  "We curate for those who see a skateboard as more than wood and wheels—we see it as a piece of the city's soul."
                </p>
              </div>
              <Link
                to="/about"
                className="group self-start inline-flex items-center justify-center border border-[#F5F5F5] text-[#F5F5F5] font-bold text-xs uppercase py-4 px-10 tracking-widest hover:bg-[#FCEE09] hover:text-[#121212] hover:border-[#FCEE09] transition-all duration-300"
              >
                <span>Read the Archive</span>
                <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
