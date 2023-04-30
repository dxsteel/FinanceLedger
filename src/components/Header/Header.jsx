import logoMobile from '../img/Logo-mobile.svg';
import vector from '../img/Vector.svg';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div id="home" className="header-position">
          <img className="header-logo" src={logoMobile} alt="logo" />
          <ul className="header-nav">
            <li className="header-nav__link"><a href="#home">Home</a></li>
            <li className="header-nav__link"><a href="#about">About</a></li>
            <li className="header-nav__link"><a href="#cases">Cases</a></li>
            <li className="header-nav__link"><a href="#blog">Blog</a></li>
            <li className="header-nav__link"><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <h1 className="header-title">The Sky Is The Limit</h1>
        <h2 className="header-subtitle">
          We provide world class financial assistance
        </h2>
        <button className="header-button">
          {' '}
          <img src={vector} alt="vector" />
          Read More
        </button>
      </div>
    </div>
  );
};

export default Header;
