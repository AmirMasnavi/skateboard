
import { ArrowRight } from 'lucide-react'; // Import the icon for the button
import heroImage from '../assets/background3.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image and Overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={heroImage}
          alt="Skateboarder in action"
          className="w-full h-full object-cover"
        />
        {/* This div creates the dark overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white uppercase tracking-wider">
          Built for the Bold
        </h1>
        <p className="text-xl md:text-2xl text-white mt-4 mb-8 max-w-2xl mx-auto">
          Discover Our Fall '25 Collection
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-[#FCEE09] text-[#121212] font-bold text-lg uppercase py-4 px-8 rounded transition-transform hover:scale-105"
        >
          <span>Shop New Arrivals</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Hero;