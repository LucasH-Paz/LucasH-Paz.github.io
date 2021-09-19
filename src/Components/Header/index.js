import React from 'react';
import './styles.css';

const navOptions = ['Home', 'About', 'Skills', 'Work', 'Contact'];

const toggleOpitions = ({ target }) => {
  const element = target.parentElement.previousElementSibling.style;
  return element.display === 'none'
  ? element.display = 'block'
  : element.display = 'none';
};

function Header() {
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#xablau" className="nav__logo">Lucas</a>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            { navOptions.map( option => (
              <li className="nav__item" key={option}>
                <a href={`#${option}`} className="nav__link">{option}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={ (e) => toggleOpitions(e) }
        >
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;
