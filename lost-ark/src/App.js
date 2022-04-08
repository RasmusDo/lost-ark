import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Market from './components/pages/Market';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/lost-ark" exact element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
