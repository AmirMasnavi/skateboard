import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import santaCruzDeck  from '../assets/deck-santacruz.jpg';
import powellDeck     from '../assets/deck-powell.jpg';
import elementDeck    from '../assets/deck-element2.jpg';
import bakerDeck      from '../assets/deck-baker.jpg';
import santaCruzDeck2 from '../assets/deck-santacruz2.jpg';
import powellDeck2    from '../assets/deck-powell2.jpg';
import elementDeck2   from '../assets/deck-element3.jpg';
import bakerDeck2     from '../assets/deck-baker2.jpg';

const volumes = [
  {
    vol: '01',
    year: 2025,
    drops: [
      { brand: 'Santa Cruz',     name: 'Classic Dot', image: santaCruzDeck  },
      { brand: 'Powell-Peralta', name: 'Ripper',       image: powellDeck     },
      { brand: 'Element',        name: 'Seal',         image: elementDeck    },
      { brand: 'Baker',          name: 'Brand Logo',   image: bakerDeck      },
    ],
  },
  {
    vol: '02',
    year: 2026,
    drops: [
      { brand: 'Santa Cruz',     name: 'Wave Dot',    image: santaCruzDeck2 },
      { brand: 'Powell-Peralta', name: 'Flight',      image: powellDeck2    },
      { brand: 'Element',        name: 'Reserve',     image: elementDeck2   },
      { brand: 'Baker',          name: 'Black Label', image: bakerDeck2     },
    ],
  },
];

const MellowTape = () => {
  const [volIndex, setVolIndex] = useState(volumes.length - 1); // default: latest
  const current = volumes[volIndex];

  // Duplicate drops for seamless infinite loop
  const galleryItems = [...current.drops, ...current.drops];

  return (
    <div className="pt-20 min-h-screen bg-[#121212] text-[#F5F5F5] flex flex-col">

      {/* ─── Page Header ─────────────────────────────── */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="flex justify-between items-start">

          <div>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-[#999999] text-xs uppercase tracking-widest">
                Vol. {current.vol} — {current.year}
              </p>
              {/* Volume switcher */}
              <div className="flex items-center gap-2">
                {volumes.map((v, i) => (
                  <button
                    key={v.vol}
                    onClick={() => setVolIndex(i)}
                    className={`text-[10px] uppercase tracking-widest px-2 py-0.5 border transition-colors duration-300 ${
                      volIndex === i
                        ? 'border-[#FCEE09] text-[#FCEE09]'
                        : 'border-[#333333] text-[#333333] hover:border-[#999999] hover:text-[#999999]'
                    }`}
                  >
                    {v.vol}
                  </button>
                ))}
              </div>
            </div>
            <h1 className="text-[clamp(4rem,14vw,10rem)] font-bold uppercase leading-none tracking-tighter text-[#F5F5F5]">
              Mellow<br />Tape
            </h1>
          </div>

          <div className="text-right flex flex-col items-end gap-3 pt-2">
            <span className="flex items-center gap-2 text-[#999999] text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#FCEE09] animate-pulse" />
              Playing
            </span>
            <p className="text-[#999999] text-xs uppercase tracking-widest hidden md:block">
              the latest drop.
            </p>
            <p className="text-[#FCEE09] text-xs uppercase tracking-widest">
              {current.drops.length} items this drop
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
              className="relative flex-shrink-0 w-64 md:w-80 h-[65vh] overflow-hidden group"
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
