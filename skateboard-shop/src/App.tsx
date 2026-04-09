import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import Shop from './pages/Shop';
import MellowTape from './pages/MellowTape';
import Brands from './pages/Brands';
import About from './pages/About';
import Journal from './pages/Journal';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#121212]">
        <Cursor />
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/"             element={<Home />}       />
            <Route path="/shop"         element={<Shop />}       />
            <Route path="/mellow-tape"  element={<MellowTape />} />
            <Route path="/brands"       element={<Brands />}     />
            <Route path="/about"        element={<About />}      />
            <Route path="/journal"      element={<Journal />}    />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
