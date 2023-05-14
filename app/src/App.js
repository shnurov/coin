import React from 'react'
import './App.css';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
