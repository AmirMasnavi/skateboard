import santaCruzDeck from '../assets/deck-santacruz2.jpg';
import powellDeck    from '../assets/deck-powell2.jpg';
import elementDeck   from '../assets/deck-element3.jpg';
import bakerDeck     from '../assets/deck-baker3.jpg';

const partners = [
  {
    index: '01',
    name: 'Santa Cruz',
    founded: 'Est. 1973',
    origin: 'Santa Cruz, CA',
    tagline: 'Legends of the street.',
    body: 'The oldest skate company still in continuous operation. Their graphics defined an era — the Screaming Hand is not a logo, it is a monument.',
    image: santaCruzDeck,
  },
  {
    index: '02',
    name: 'Powell-Peralta',
    founded: 'Est. 1978',
    origin: 'Santa Barbara, CA',
    tagline: 'Heritage carved in wood.',
    body: 'George Powell and Stacy Peralta built more than a brand. The Bones Brigade was a movement. The Ripper is a relic worth carrying.',
    image: powellDeck,
  },
  {
    index: '03',
    name: 'Element',
    founded: 'Est. 1992',
    origin: 'Irvine, CA',
    tagline: 'Skate. Nature. Art.',
    body: 'Born from a commitment to the environment and the culture simultaneously. Element treats the deck as a conversation between craft and conscience.',
    image: elementDeck,
  },
  {
    index: '04',
    name: 'Baker',
    founded: 'Est. 2000',
    origin: 'Los Angeles, CA',
    tagline: 'Raw energy, refined craft.',
    body: 'Andrew Reynolds built Baker with no filter. The graphics are loud, the riders are louder. Pure street — no compromise.',
    image: bakerDeck,
  },
];

const Brands = () => {
  return (
    <div className="pt-20 bg-[#121212] min-h-screen">

      {/* Registry Header */}
      <div className="container mx-auto px-4 pt-16 pb-4">
        <p className="text-[#999999] text-xs uppercase tracking-[0.3em] mb-6">
          Verified Partners — The Registry
        </p>
        <h1 className="text-[clamp(3.5rem,11vw,8rem)] font-bold uppercase leading-none tracking-tighter text-[#F5F5F5]">
          The<br />Registry
        </h1>
      </div>

      {/* Partner entries — editorial list */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col">
          {partners.map((brand) => (
            <div
              key={brand.name}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 border-t border-[#333333] py-10 cursor-pointer hover:border-[#FCEE09] transition-colors duration-500"
            >
              {/* Index */}
              <div className="md:col-span-1 flex items-start pt-1">
                <span className="text-[#333333] text-xs uppercase tracking-widest group-hover:text-[#FCEE09] transition-colors duration-500">
                  {brand.index}
                </span>
              </div>

              {/* Name + meta */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <h2 className="text-[#F5F5F5] text-2xl md:text-3xl font-bold uppercase tracking-wide group-hover:text-[#FCEE09] transition-colors duration-500">
                  {brand.name}
                </h2>
                <div className="flex gap-4">
                  <span className="text-[#999999] text-xs uppercase tracking-widest">{brand.founded}</span>
                  <span className="text-[#333333] text-xs uppercase tracking-widest">{brand.origin}</span>
                </div>
                <p className="text-[#999999] text-xs uppercase tracking-widest mt-2 italic">{brand.tagline}</p>
              </div>

              {/* Body text */}
              <div className="md:col-span-5 md:col-start-6">
                <p className="text-[#999999] text-sm leading-relaxed max-w-md">
                  {brand.body}
                </p>
              </div>

              {/* Hover image reveal */}
              <div className="md:col-span-2 md:col-start-11 overflow-hidden h-20 md:h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}

          {/* Terminal line */}
          <div className="border-t border-[#333333] pt-6 flex justify-between">
            <span className="text-[#333333] text-xs uppercase tracking-widest">End of registry</span>
            <span className="text-[#333333] text-xs uppercase tracking-widest">{partners.length} verified partners</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Brands;
