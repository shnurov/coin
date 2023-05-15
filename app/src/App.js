import React from 'react'
import './App.css';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Rate from './Rate/Rate'

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
        <Rate />
      </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
