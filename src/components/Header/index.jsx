import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="header">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/contact" className="link">Contact</Link>
      </nav>
    );
  }
}

export default Header;
