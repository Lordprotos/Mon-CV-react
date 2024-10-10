"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function RootLayout({ children }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          console.log('scrolling');
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
          setShowButton(true);
      } else {
          setShowButton(false);
      }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth' });
  };

  return (
    <html lang="en">
      <head>
      </head>
      <body className="body">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {showButton &&(
                        <button 
                        id="scrollBtn"
                        onClick={scrollToTop}
                        style={{
                            position:'fixed',
                            bottom:'20px',
                            right:'20px',
                            backgroundColor:'#298eff',
                            color:'#EEE',
                            border:'none',
                            padding:'15px',
                            barderRadius:'5px',
                            cursor:'pointer',
                            zIndex:'100'
                        }}
                        >Remonter en haut</button>
                    )}
      </body>
    </html>
  );
}
