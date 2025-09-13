import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Countdown from './components/Countdown';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <About />
      <Countdown />
      <EmailSignup />
      <Footer />
    </div>
  );
}

export default App;