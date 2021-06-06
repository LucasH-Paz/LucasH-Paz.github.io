import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

class Contact extends React.Component {
  render() {
    return (
      <>
        <div id="contact-parent">
          <Header />
          <h1 className="title is-1">Entre em contato:</h1>
          <div className="icons">
            <a href="https://github.com/LucasH-Paz" target="_blank" rel="noreferrer">
              <i className="fab fa-github fa-2x" />
            </a>
            <a href="https://www.linkedin.com/in/lucas-paz-dev/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="https://www.instagram.com/lucasofpeace/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a href="mailto:lucas.hpaz@outlook.com" target="_blank" rel="noreferrer">
              <i className="fas fa-envelope fa-2x" />
            </a>
          </div>
          <p className="content">
            Para mais informações, entre em contato através dos links acima e retornarei o contato de
            assim que possível. Sugestões e feedbacks são muito bem vindos!
          </p>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contact;
