import Hero from './components/Hero';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-[#121212] transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  )
}

export default App