import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import santaCruzDeck from '../assets/deck-santacruz.jpg';
import powellDeck    from '../assets/deck-powell.jpg';
import elementDeck   from '../assets/deck-element2.jpg';
import bakerDeck     from '../assets/deck-baker.jpg';

const drops = [
  { brand: 'Santa Cruz',     name: 'Classic Dot',  image: santaCruzDeck },
  { brand: 'Powell-Peralta', name: 'Ripper',        image: powellDeck    },
  { brand: 'Element',        name: 'Seal',          image: elementDeck   },
  { brand: 'Baker',          name: 'Brand Logo',    image: bakerDeck     },
];

// Duplicated for seamless infinite loop
const galleryItems = [...drops, ...drops];

const MellowTape = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#121212] text-[#F5F5F5] flex flex-col">

      {/* ─── Page Header ─────────────────────────────── */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="flex justify-between items-start">

          <div>
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-4">
              Vol. 01 — {new Date().getFullYear()}
            </p>
            <h1 className="text-[clamp(4rem,14vw,10rem)] font-bold uppercase leading-none tracking-tighter text-[#F5F5F5]">
              Mellow<br />Tape
            </h1>
          </div>

          <div className="text-right flex flex-col items-end gap-3 pt-2">
            {/* REC indicator */}
            <span className="flex items-center gap-2 text-[#999999] text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#FCEE09] animate-pulse" />
              Playing
            </span>
            <p className="text-[#999999] text-xs uppercase tracking-widest hidden md:block">
              the latest drop.
            </p>
            <p className="text-[#FCEE09] text-xs uppercase tracking-widest">
              {drops.length} items this drop
            </p>
          </div>

        </div>
      </div>

      {/* ─── Gallery Strip ───────────────────────────── */}
      <div className="film-grain vhs-scanlines mt-2 flex-1">
        <div className="flex animate-marquee gap-3 py-3 px-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-64 md:w-80 h-[65vh] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Bottom scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[#999999] text-[10px] uppercase tracking-widest mb-1">
                  {item.brand}
                </p>
                <p className="text-[#F5F5F5] text-sm font-semibold uppercase tracking-wide">
                  {item.name}
                </p>
              </div>

              {/* Hover: yellow top-border flash */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FCEE09] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* ─── Footer Bar ──────────────────────────────── */}
      <div className="container mx-auto px-4 py-8 mt-auto">
        <div className="flex justify-between items-center border-t border-[#333333] pt-6">
          <p className="text-[#999999] text-xs uppercase tracking-widest">
            built for the ride.
          </p>
          <Link
            to="/shop"
            className="flex items-center gap-2 text-[#F5F5F5] text-xs uppercase tracking-widest hover:text-[#FCEE09] transition-colors"
          >
            explore the full collection
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default MellowTape;
