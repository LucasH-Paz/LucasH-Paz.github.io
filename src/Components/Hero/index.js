import React from 'react';
import './styles.css';

function Hero() {
  return (
    <section id="Home">
      <div className="container-header">
        <h1 className="home__title">
          Hi,
          <br />I'am
          <span className="home__title-color"> Lucas</span>
          <br />Web Developer
        </h1>
        <a href="#Contact" className="button">Contact</a>
      </div>
    </section>
  );
}

export default Hero;
