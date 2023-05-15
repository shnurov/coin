import React from 'react'
import './Header.css';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <header>
        <div className='header container'>
          <div className='header-logo'>EXCH</div>
          <nav className='header-nav'>
            <ul className='header-links'>
              <li><a href="/">Главная</a></li>
              <li><a href="/about">О нас</a></li>
              <li><a href="/contacts">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
