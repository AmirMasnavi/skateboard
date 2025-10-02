import Hero from './components/Hero';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div className="bg-[#121212]"> {/* <-- Add background color here */}
      <Header />
      <main>
        <Hero />
        <FeaturedProducts /> {/* <-- Add this component */}
      </main>
    </div>
  )
}

export default App