import React from 'react';
import './Header.css';

import Nav from "../Nav/Nav";

class Header extends React.Component {

  render() {
    return (
        <header>
          <div className="main-header">
            <div className="container">
              <h1 className="site-title">React. Currency Rate</h1>
            </div>
          </div>
          <Nav/>
        </header>
    );
  }
}

export default Header;
