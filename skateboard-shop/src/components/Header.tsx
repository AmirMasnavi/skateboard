import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-mellow-2.jpg';

const navLinks = [
  { label: 'Shop',        to: '/shop'        },
  { label: 'Mellow Tape', to: '/mellow-tape' },
  { label: 'Brands',      to: '/brands'      },
  { label: 'Journal',     to: '/journal'     },
  { label: 'About',       to: '/about'       },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="bg-[#121212] text-[#F5F5F5] p-4 fixed top-0 left-0 w-full z-50 border-b border-[#333333]">
        <div className="container mx-auto flex justify-between items-center">

          <Link to="/">
            <img src={logo} alt="Mellow Skateboard" className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex">
            <ul className="flex space-x-8 items-center">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[#FCEE09] transition-colors text-sm uppercase font-semibold tracking-widest">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <button
              className="md:hidden hover:text-[#FCEE09] transition-colors z-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#121212] text-[#F5F5F5] z-40 flex items-center justify-center">
          <nav>
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={toggleMobileMenu}
                    className="hover:text-[#FCEE09] transition-colors text-3xl uppercase font-semibold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
