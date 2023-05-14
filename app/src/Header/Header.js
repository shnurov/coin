import React from 'react'
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <div className='header container'>
          <div className='header-logo'>EXCH</div>
          <nav className='header-nav'>
            <ul className='header-links'>
              <li><a href="/">Главная</a></li>
              <li><a href="/">Пунткы</a></li>
              <li><a href="/">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
