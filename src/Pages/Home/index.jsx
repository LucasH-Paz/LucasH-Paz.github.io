import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <div id="home-page">
          <Header />
          <div id="home-parent">
            <div id="home-text">
              <h1 className="title is-1 is-spaced">Olá, eu sou o Lucas</h1>
              <h2 className="subtitle is-5 home-describe">
                Sou de Minas Gerais, Brasil e estudo desenvolvimento web na Trybe.
                Tambem estudei Engenharia Mecânica na Universidade Federal de São João del Rei -UFSJ
                Aqui você pode conhecer um pouco mais da minha trajetória e meus projetos, desenvolvidos
                ao longo da minha formação.
            </h2>
              <Link to="/projects">
                <button
                  className="button is-black is-large"
                  type="button">
                  Saiba mais
              </button>
              </Link>
            </div>
            <aside id="home-image">
              <img
                src="https://i.pinimg.com/originals/ba/fc/ac/bafcacfeba14e942c728c847f94de5ff.jpg"
                alt="Luca paz sorrindo"
              />
            </aside>
          </div>          
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
