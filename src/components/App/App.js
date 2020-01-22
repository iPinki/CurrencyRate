import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header   from "../Header/Header";
import Footer   from "../Footer/Footer";
import Rate     from "../Rate/Rate";
import About    from "../About/About";
import Contacts from "../Contacts/Contacts";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='site'>
        <Header />

        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contacts" component={Contacts}/>
              </Switch>
            </Router>
          </main>
        </div>

        {/*<div className="container" id="cookie_ifo">*/}
        {/*  <div className="site-content">*/}
        {/*    <div className="well">*/}
        {/*      On uor website we use cookie to collect technical info. <br/>*/}
        {/*      In particular? to personalize the operation of the site, we process the IP address of the region of your location.&nbsp;<button className="btn btn-primary btn-sm">OK</button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <Footer/>
      </div>
    );
  }
}

export default App;
