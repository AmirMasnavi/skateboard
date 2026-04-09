import { Link } from 'react-router-dom';
import deck1 from '../assets/deck-powell2.jpg';
import deck2 from '../assets/deck-element.jpg';
import deck3 from '../assets/deck-baker2.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-[#333333]">

      {/* Film-grain image strip */}
      <div className="film-grain w-full overflow-hidden">
        <div className="grid grid-cols-3 h-[280px] md:h-[380px] gap-px">
          {[deck1, deck2, deck3].map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover object-center grayscale contrast-110 brightness-[0.65] hover:brightness-90 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Ghost signal */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        <a
          href="https://www.instagram.com/mellow.skateboard/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5F5F5] text-sm uppercase tracking-widest font-semibold hover:text-[#FCEE09] transition-colors"
        >
          @mellow.skateboard
        </a>

        <nav>
          <ul className="flex gap-8">
            {[['Shop', '/shop'], ['Brands', '/brands'], ['About', '/about']].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-[#999999] text-xs uppercase tracking-widest hover:text-[#FCEE09] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[#333333] text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Mellow
        </p>

      </div>

    </footer>
  );
};

export default Footer;
