import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import logo from '../assets/logo-mellow-2.jpg';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-[#333333] transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center gap-8">

        <Link to="/">
          <img src={logo} alt="Mellow Skateboard" className="h-12 w-auto object-contain" />
        </Link>

        <p className="text-[#999999] text-sm uppercase tracking-wider max-w-xs">
          For the love of the ride. Built for the community.
        </p>

        <nav>
          <ul className="flex flex-wrap justify-center gap-8">
            <li>
              <Link to="/shop" className="text-sm uppercase font-semibold text-[#121212] dark:text-[#F5F5F5] hover:text-[#FCEE09] transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/brands" className="text-sm uppercase font-semibold text-[#121212] dark:text-[#F5F5F5] hover:text-[#FCEE09] transition-colors">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm uppercase font-semibold text-[#121212] dark:text-[#F5F5F5] hover:text-[#FCEE09] transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/mellow.skateboard/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#121212] dark:text-[#F5F5F5] hover:text-[#FCEE09] transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-[#121212] dark:text-[#F5F5F5] hover:text-[#FCEE09] transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Youtube"
            className="text-[#121212] dark:text-[#F5F5F5] hover:text-[#FCEE09] transition-colors"
          >
            <Youtube size={20} />
          </a>
        </div>

        <p className="text-[#999999] text-sm">
          © {new Date().getFullYear()} Mellow Skateboard. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
