import React from 'react';
import {BrowserRouter,Route, Routes } from "react-router-dom";
import Menu from './Header/Menu';
import Contact from './Header/Contact';
import About from './Header/About';
import Footer from './Footer/Footer';
import Services from './Header/Services';
import Home from './Header/Home';

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about"  element={<About />} />
      <Route path="/contact"  element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;


/*
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>
*/