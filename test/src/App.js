import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Header';
import MainPage from './MainPage';
import { Button } from 'react-bootstrap';
import './Button.css';
import Footer from './Footer';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    // Show the button when the user has scrolled down 100 pixels
    setShowScrollButton(window.scrollY > 100);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <MainPage />

      {showScrollButton && (
        <Button variant="primary" className="Button" onClick={scrollToTop}>
          ↑
        </Button>
      )}

      <Footer/>
    </div>
  );
}

export default App;
