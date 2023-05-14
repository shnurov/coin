import React from 'react'
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className='footer container'>
          <p className='footer-logo'>
            Обмен валют
          </p>
          <nav className='footer-nav'>
            <ul className='footer-links'>
              <li><a href="/">Пользовательское соглашение</a></li>
              <li><a href="/">Политика конфиденциальности</a></li>
              <li><a href="/">Условия</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
