import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; 
import heroImage from '../assets/background3.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute top-0 left-0 w-full h-full scale-105 animate-ken-burns">
        <img
          src={heroImage}
          alt="Skateboarder in action"
          className="w-full h-full object-cover grayscale contrast-125 brightness-[0.4]"
        />
        {/* Film grain overlay */}
        <div className="absolute inset-0 film-grain opacity-20 pointer-events-none"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-4 max-w-5xl">
        <p className="text-[#FCEE09] text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-6 animate-fade-in-down">
          Est. The Streets — The Vault
        </p>
        <h1 className="text-7xl md:text-[10rem] font-bold text-white uppercase leading-none tracking-tighter mb-8 animate-fade-in">
          STAY<br />MELLOW
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 opacity-0 animate-fade-in delay-500 fill-mode-forwards">
          <Link
            to="/shop"
            className="group relative inline-flex items-center justify-center bg-[#FCEE09] text-[#121212] font-bold text-sm uppercase py-5 px-10 tracking-widest transition-all duration-300 hover:scale-105"
          >
            <span>Enter the Vault</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/mellow-tape"
            className="text-[#F5F5F5] text-xs uppercase tracking-widest font-semibold hover:text-[#FCEE09] transition-colors border-b border-transparent hover:border-[#FCEE09] pb-1"
          >
            Watch the latest drop
          </Link>
        </div>
      </div>

      {/* Side "Performance" signal - like a Rolex bezel/dial detail */}
      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-2 items-start opacity-40">
        <div className="w-12 h-px bg-[#FCEE09]"></div>
        <p className="text-[10px] text-white uppercase tracking-widest vertical-text">Signal: Online</p>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-2 items-end opacity-40 text-right">
        <p className="text-[10px] text-white uppercase tracking-widest">Built for the ride.</p>
        <div className="w-12 h-px bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;