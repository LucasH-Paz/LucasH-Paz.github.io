import React from 'react';
import './styles.css';

const navOptions = ['About', 'Skills', 'Work', 'Contact'];

const showMenuCntl = () => {
  const nav = document.getElementById('nav-menu');
  nav.classList.toggle('show');
}

const linkAction = ({ target }) => {
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => link.classList.remove('active'));
  target.classList.add('active');

  showMenuCntl();
};

function Header() {
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#xablau" className="nav__logo">Lucas</a>
        </div>
        <div className="nav__menu show" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item" onClick={linkAction}>
              <a href="#Home" className="nav__link active">Home</a>
            </li>
            {navOptions.map(option => (
              <li
                className="nav__item"
                key={option}
                onClick={linkAction}
              >
                <a href={`#${option}`} className="nav__link">{option}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => showMenuCntl()}
        >
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;
