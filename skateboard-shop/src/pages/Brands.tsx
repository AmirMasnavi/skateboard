const partners = [
  { name: 'Santa Cruz', founded: 'Est. 1973', tagline: 'Legends of the street.' },
  { name: 'Powell-Peralta', founded: 'Est. 1978', tagline: 'Heritage carved in wood.' },
  { name: 'Element', founded: 'Est. 1992', tagline: 'Skate. Nature. Art.' },
  { name: 'Baker', founded: 'Est. 2000', tagline: 'Raw energy, refined craft.' },
];

const Brands = () => {
  return (
    <div className="pt-20 bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-[#FCEE09] text-sm uppercase tracking-widest font-semibold mb-4">
          Curated Partners
        </p>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider text-[#121212] dark:text-[#F5F5F5]">
          Our Partners
        </h1>
        <p className="mt-4 text-[#999999] text-lg max-w-2xl mx-auto">
          We curate only the best. From heritage giants like Santa Cruz and Powell-Peralta to independent local shapers.
        </p>
      </div>

      <div className="border-t border-gray-200 dark:border-[#333333] transition-colors duration-300">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 dark:bg-[#333333]">
            {partners.map((brand) => (
              <div
                key={brand.name}
                className="bg-white dark:bg-[#121212] p-10 flex flex-col gap-3 group hover:bg-[#FCEE09] transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[#999999] text-xs uppercase tracking-widest group-hover:text-[#121212] transition-colors">
                  {brand.founded}
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-wider text-[#121212] dark:text-[#F5F5F5] group-hover:text-[#121212] transition-colors">
                  {brand.name}
                </h2>
                <p className="text-[#999999] text-sm group-hover:text-[#121212] transition-colors">
                  {brand.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
