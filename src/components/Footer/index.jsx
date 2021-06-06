import React from 'react';
import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-1">
        <h1 className="title is-4">Lucas Henrique Paz</h1>
        <p className="subtitle is-6 is-spaced">Para contato, me encontre nos canais:</p>
        <div className="contact-info">
          <a href="https://github.com/LucasH-Paz" target="_blank" rel="noreferrer">
            <i class="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-paz-dev/" target="_blank" rel="noreferrer">
            <i class="fab fa-linkedin" />
          </a>
          <a href="mailto:lucas.hpaz@outlook.com" target="_blank" rel="noreferrer">
            <i class="fas fa-envelope-open-text" />
          </a>
        </div>
        <p className="copyright">
          Copyright© 2021 Lucas Paz. Todos os direitos reservados
        </p>
      </div>
    );
  }
}

export default Footer;