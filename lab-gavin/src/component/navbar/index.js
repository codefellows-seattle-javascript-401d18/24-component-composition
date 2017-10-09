import './_navbar.scss';

import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <header>
        <section className="title">
          <h1 className="titleName">NOTERAMA</h1>
          {// want to make a nav here why not scott?
          }
        </section>
      </header>
    );
  }
}

export default Navbar;
