import React from "react";
import './styles.css';

import js from '../../img/js_logo.png';
import html from '../../img/html_logo.png';
import css from '../../img/css_logo.png';
import react from '../../img/react_logo.webp';
import redux from '../../img/redux_logo.png';
import bootstrap from '../../img/bootstrap_logo.png';
import bulma from '../../img/bulma_logo.png';
import git from '../../img/git_logo.png';
import github from '../../img/github_logo.png';
import jest from '../../img/jest_logo.png';
import hooks from '../../img/reactHooks_logo.png';

const logos = [
  {
    image: js,
    name: 'JavaScript'
  },
  {
    image: html,
    name: 'HTML 5'
  },
  {
    image: css,
    name: 'CSS 3'
  },
  {
    image: react,
    name: 'React JS'
  },
  {
    image: redux,
    name: 'Redux'
  },
  {
    image: bootstrap,
    name: 'Bootstrap'
  },
  {
    image: bulma,
    name: 'Bulma'
  },
  {
    image: git,
    name: 'Git'
  },
  {
    image: github,
    name: 'Github'
  },
  {
    image: jest,
    name: 'Jest'
  },
  {
    image: hooks,
    name: 'Hooks'
  }
];

const Skills = () => {
  return (
    <section id="Skills" className="section">
      <h2 className="section-title about-title">Skills</h2>
      <div>
        <div className="content-cntl-skills">
          <h2 className="about__subtitle">My programing skills</h2>
          <p>
            In this section you can check some of the languages and tools I've been working with.
            I'm always learning new things, so, even if you do not see what your looking on this list,
            let's get in touch! It's always a pleasure for me to learn new abilities!
          </p>
          <div className="skills-galery">
            {logos.map(
              ({ image, name }) => (
                <abbr title={name} key={name}>
                  <img src={image} alt={`${name} logo`} />
                </abbr>)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
