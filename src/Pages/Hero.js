import React from 'react';
import LinkComp from '../Components/link/LinkComp';
import Navbar from '../Components/header/Navbar';
import Footer from '../Components/footer/Footer';
import './Hero.css'
import Conversion from '../Components/convertComp/Conversion';
import GetStarted from '../Components/getmore/GetStarted';
import About from '../Components/about/About';
import Questions from '../Components/questions/Questions';
function Hero() {
  return (
    <div className="hero">
      <div className='Container' >
        <Navbar />
        <Conversion />
        <LinkComp />
      </div>
      <GetStarted />
      <About />
      <Questions />
      <Footer />


    </div>
  );
}

export default Hero;
