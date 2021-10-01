import React from "react";
import './styles.css';
import profilePic from '../../img/selfie_Lucas.jpg';

const About = () => {
  return (
    <section className="about section" id="About">
      <h2 className="section-title about-title">About</h2>
      <div className="content-cntl">
        <div className="about-img">
          <img src={profilePic} alt="lucas paz" />
        </div>
        <div>
          <h1 className="about__title">Hi There!</h1>
          <h2 className="about__subtitle">A little bit about me</h2>
          <p className="about__text">
            I'm a web developement student, completely in love with doing technology. I'm studing
            to become a full-stack web developer; doing resposives, scalable, legible and full of
            smart solutions pages, I'm completely in with programming. I studied engineering before
            getting started in coding, but the constant challenges and the infinite possibilities
            that comes with coding facsinated me.
          </p>
          <div className="contact-icons">
            <a href="https://github.com/LucasH-Paz" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/lucas-paz-dev/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/lucasofpeace/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
