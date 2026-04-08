import { useState, useEffect } from 'react';
import { Search, Sun, Moon, ShoppingCart, Menu, X } from 'lucide-react';
import logo from '../assets/logo-mellow-1.jpg';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <>
      <header className="bg-white dark:bg-[#121212] text-[#121212] dark:text-[#F5F5F5] p-4 fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-[#333333] transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero">
            <img src={logo} alt="Mellow Skateboard" className="h-10 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex">
            <ul className="flex space-x-8 items-center">
              <li><a href="#shop" className="hover:text-[#FCEE09] transition-colors text-sm uppercase font-semibold">Shop</a></li>
              <li><a href="#shop" className="hover:text-[#FCEE09] transition-colors text-sm uppercase font-semibold">New Arrivals</a></li>
              <li><a href="#shop" className="hover:text-[#FCEE09] transition-colors text-sm uppercase font-semibold">Brands</a></li>
              <li><a href="#about" className="hover:text-[#FCEE09] transition-colors text-sm uppercase font-semibold">About</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hover:text-[#FCEE09] transition-colors"><Search size={20} /></button>
            <button onClick={toggleTheme} className="hover:text-[#FCEE09] transition-colors">
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="relative hover:text-[#FCEE09] transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#FCEE09] text-[#121212] text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button
              className="md:hidden hover:text-[#FCEE09] transition-colors z-50"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- THIS IS THE MOBILE MENU CONTENT --- */}
      {/* It only shows up when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div 
          // We added text-[#F5F5F5] here to make sure the links are visible!
          className="md:hidden fixed inset-0 bg-white dark:bg-[#121212] text-[#121212] dark:text-[#F5F5F5] z-40 flex items-center justify-center transition-colors duration-300"
        >
          <nav>
            <ul className="flex flex-col items-center space-y-8">
              <li><a href="#shop" onClick={toggleMobileMenu} className="hover:text-[#FCEE09] transition-colors text-3xl uppercase font-semibold">Shop</a></li>
              <li><a href="#shop" onClick={toggleMobileMenu} className="hover:text-[#FCEE09] transition-colors text-3xl uppercase font-semibold">New Arrivals</a></li>
              <li><a href="#shop" onClick={toggleMobileMenu} className="hover:text-[#FCEE09] transition-colors text-3xl uppercase font-semibold">Brands</a></li>
              <li><a href="#about" onClick={toggleMobileMenu} className="hover:text-[#FCEE09] transition-colors text-3xl uppercase font-semibold">About</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;