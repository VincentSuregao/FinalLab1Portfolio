import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/" element={<About />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
