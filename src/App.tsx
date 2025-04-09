import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import SnowEffect from './components/snoweffect.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="animated-background" />
        <SnowEffect />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;