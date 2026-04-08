import Hero from './components/Hero';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div className="bg-white dark:bg-[#121212] transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts /> {/* <-- Add this component */}
      </main>
    </div>
  )
}

export default App