import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import deck2 from '../assets/deck-powell.jpg';
import deck4 from '../assets/deck-element2.jpg';
import lifestyleImg from '../assets/background.jpg';
import logo from '../assets/logo-mellow-4.jpg';

const entries = [
  { year: '1958', label: 'The Board', text: 'Clay wheels. Wooden planks. The first generation didn\'t have a manual — they figured it out on the asphalt.' },
  { year: '1970s', label: 'The Streets Take Over', text: 'Empty pools. Concrete banks. Skateboarding escaped the suburbs and went underground.' },
  { year: '1980s', label: 'The Deck Becomes Art', text: 'Powell, Santa Cruz, Vision — graphics became the language. The board was a canvas.' },
  { year: 'Now', label: 'The Mellow Chapter', text: 'We carry what came before. Every deck in our vault has a lineage. We don\'t sell gear. We archive culture.' },
];

const About = () => {
  return (
    <div className="pt-20 bg-[#121212] min-h-screen">

      {/* Archive Header */}
      <div className="container mx-auto px-4 pt-16 pb-4">
        <p className="text-[#FCEE09] text-xs uppercase tracking-[0.3em] font-bold mb-6">
          Established — The Archive
        </p>
        <h1 className="text-[clamp(4rem,13vw,9rem)] font-bold uppercase leading-none tracking-tighter text-[#F5F5F5]">
          Who We<br />Are
        </h1>
      </div>

      {/* The Manifesto Section */}
      <div className="container mx-auto px-4 py-24 border-t border-[#333333]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8">
            <h2 className="text-[#F5F5F5] text-4xl font-bold uppercase tracking-wider leading-tight">
              We are the curators of the street's permanent record.
            </h2>
            <div className="w-24 h-px bg-[#FCEE09]"></div>
            {/* Logo stamp — white bg reads as intentional press mark */}
            <div className="w-36 mt-2">
              <img
                src={logo}
                alt="Mellow Skateboard"
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[#999999] text-xl leading-relaxed">
              Mellow was born out of a simple observation: the most vibrant art in the world isn't in a gallery—it's under the feet of skaters.
            </p>
            <p className="text-[#999999] text-base leading-relaxed">
              We started as a small collective in the city, documenting the graphics and shapes that define different eras of skateboarding. Today, Mellow serves as a bridge between the legends who built this culture and the new generation keeping it alive.
            </p>
            <p className="text-[#999999] text-base leading-relaxed">
              Every board in our shop is hand-picked. We look for technical precision, artistic impact, and cultural weight. When you buy from Mellow, you're not just getting a setup; you're becoming a steward of skate history.
            </p>
          </div>
        </div>
      </div>

      {/* Raw image strip — film grain overlay */}
      <div className="film-grain w-full overflow-hidden border-y border-[#333333]">
        <div className="flex gap-1 h-[50vh]">
          <div className="flex-[2] overflow-hidden">
            <img src={lifestyleImg} alt="" className="w-full h-full object-cover grayscale brightness-50 contrast-125" />
          </div>
          <div className="flex-1 hidden md:block overflow-hidden">
            <img src={deck2} alt="" className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
          </div>
          <div className="flex-1 hidden lg:block overflow-hidden">
            <img src={deck4} alt="" className="w-full h-full object-cover grayscale brightness-50 contrast-125" />
          </div>
        </div>
      </div>

      {/* Timeline entries */}
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {entries.map((e, i) => (
            <div
              key={e.year}
              className="border-t border-[#333333] pt-8 flex flex-col gap-4"
            >
              <p className="text-[#FCEE09] text-xs uppercase tracking-widest font-bold">{e.year}</p>
              <h3 className="text-[#F5F5F5] text-lg font-bold uppercase tracking-wide">{e.label}</h3>
              <p className="text-[#999999] text-sm leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="border-t border-[#333333] bg-[#0d0d0d]">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#F5F5F5] text-3xl font-bold uppercase tracking-widest">
              Ready to ride?
            </h2>
            <p className="text-[#999999] uppercase tracking-widest text-sm">Explore the vault or join the community.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-[#FCEE09] text-[#121212] font-bold text-xs uppercase py-5 px-10 tracking-[0.2em] transition-all duration-300 hover:scale-105"
            >
              Enter the Vault
              <ArrowRight className="w-4 h-4 ml-3" />
            </Link>
            <a
              href="https://www.instagram.com/mellow.skateboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white text-white font-bold text-xs uppercase py-5 px-10 tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#121212]"
            >
              Follow the signal
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
