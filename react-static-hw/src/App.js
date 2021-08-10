import React from 'react';
import './styles/main.scss';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Menus from './components/Menus';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <header>
      <NavBar />
      </header>
      <Hero />
      <Gallery />
      <Menus />
      <About />
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default App;
