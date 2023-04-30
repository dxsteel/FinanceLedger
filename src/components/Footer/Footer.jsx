import './Footer.scss';
import facebook from '../img/Facebook.svg';
import twitter from '../img/Twitter.svg';
import youtube from '../img/youtube.svg';
import linkedin from '../img/linkedin.svg';

export const Footer = () => {
  return (
    <div className="container">
      <div className="section-footer">
        <div className="section-footer__position">
          <a 
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} className='section-footer__hover' alt="facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} className='section-footer__hover' alt="twitter" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} className='section-footer__hover' alt="youtube" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className='section-footer__hover' alt="linkedin" />
          </a>
        </div>
        <h3 className="section-footer__inform">
          Copyright © 2021 - FinanceLedger
        </h3>
      </div>
    </div>
  );
};

export default Footer;
