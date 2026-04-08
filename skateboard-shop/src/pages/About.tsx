import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo-mellow-3.jpg';

const values = [
  { label: 'Community', description: 'Built by skaters, for skaters. Every decision we make puts the community first.' },
  { label: 'Quality', description: 'We partner only with brands that meet our standards for performance and craftsmanship.' },
  { label: 'Culture', description: 'Skateboarding is more than a sport. It\'s a way of life, and we honor that.' },
];

const About = () => {
  return (
    <div className="pt-20 bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">

      {/* Hero */}
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-[#FCEE09] text-sm uppercase tracking-widest font-semibold mb-4">
          Who We Are
        </p>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider text-[#121212] dark:text-[#F5F5F5]">
          The Mellow Story
        </h1>
      </div>

      {/* Story Block */}
      <div className="border-t border-gray-200 dark:border-[#333333] transition-colors duration-300">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={logo}
            alt="Mellow Skateboard"
            className="w-full max-w-sm mx-auto rounded-lg object-contain"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-[#121212] dark:text-[#F5F5F5]">
              Born From The Streets
            </h2>
            <p className="text-[#999999] text-base leading-relaxed">
              Born from the streets and built for the community. Mellow isn't just about the gear; it's about the ride, the culture, and the people who keep the spirit of skateboarding alive.
            </p>
            <p className="text-[#999999] text-base leading-relaxed">
              We provide premium decks and apparel for those who live to stay mellow. Not just a shop — a movement.
            </p>
            <Link
              to="/shop"
              className="self-start inline-flex items-center justify-center bg-[#FCEE09] text-[#121212] font-bold text-sm uppercase py-3 px-6 rounded transition-transform hover:scale-105"
            >
              <span>Explore the Collection</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#121212] dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-[#F5F5F5] text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.label} className="flex flex-col gap-3 border-t border-[#333333] pt-6">
                <h3 className="text-[#FCEE09] text-sm uppercase tracking-widest font-semibold">{v.label}</h3>
                <p className="text-[#999999] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
