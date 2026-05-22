import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import JoinUs from './pages/JoinUs';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
