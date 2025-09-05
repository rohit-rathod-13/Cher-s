import React from 'react';
import Header from './pages/Header';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
