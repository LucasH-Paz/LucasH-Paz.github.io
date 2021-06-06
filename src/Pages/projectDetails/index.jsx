import React from 'react';
import { Redirect } from 'react-router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import pages from '../projects/data';

class ProjectDetails extends React.Component {
  render() {
    const { match: { params: { name } } } = this.props;
    const project = pages.find((page) => page.name === name);

    return (
      <>
        <Header />
        <h1>Project Details</h1>
        <div className="info-container">
          {
            !project
              ? <Redirect to="/notFound" />
              : (<>
                <h1>{project.name}</h1>
                <img src={project.image} alt={project.name} />
              </>
              )
          }
        </div>
        <Footer />
      </>
    );
  }
}

export default ProjectDetails;
