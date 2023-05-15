import React from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import { Route, Switch } from "react-router";

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Rate from './Rate/Rate'
import About from './About/About'
import Contacts from './Contacts/Contacts';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="site">
        <Header />
        <main>
          <article>
            <Router>
            <Routes>
                <Route exact path='/' Component={Rate} />
                <Route exact path='/about' Component={About} />
                <Route exact path='/contacts' Component={Contacts} />
            </Routes>
            </Router>
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
