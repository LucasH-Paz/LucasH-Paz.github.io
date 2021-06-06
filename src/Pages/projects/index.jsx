import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import pages from './data';
import './style.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: pages,
      filter: 'all',
    }
  }


  handleChange = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  }


  render() {
    let { filter, projects } = this.state;
    const filtered = (filter === 'all')
      ? pages
      : pages.filter(page => page.type === filter);
    projects = filtered;

    return (
      <>
        <div className="project-container-1">
          <Header />
          <h1 className="title is-1">Projetos</h1>
          <div className="project-container-2">
            <div className="select is-large">
              <select onChange={this.handleChange}>
                <option value="all">Todos</option>
                <option value="front-end">Front-End</option>
                <option value="back-end">Back-End</option>
              </select>
            </div>
            <div className="project-list content">
              {
                projects.length === 0
                  ? <span>Nenhum projeto encontrado</span>
                  : <ul>
                    {projects.map((page, index) => (
                      <Link
                        to={`/projects/${page.name}`}
                        key={index}
                      >
                        <li className="subtitle is-3 is-spaced">
                          {page.name}
                          <img src={page.image} alt={page.name} />
                        </li>
                      </Link>
                    ))}
                  </ul>
              }
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Projects;
