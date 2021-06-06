import React from 'react';
import Header from '../../components/Header';

import './style.css';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="not-found-parent">
          <img
            src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
            alt="Não foi possível encontrar essa página"
          />
          <h1 className="title is-1">Página não encontrada :(</h1>
        </div>
      </div>
    );
  }
}

export default NotFound;
