import './Team.scss';
import facebook from '../img/Facebook.svg';
import twitter from '../img/Twitter.svg';
import youtube from '../img/youtube.svg';
import linkedin from '../img/linkedin.svg';

export const Team = () => {
  return (
    <div className="container">
      <div className="section-team__position">
        <p className="section-team">Who we are</p>
        <h2 className="section-team__title">Our Professional Team</h2>
        <p className="section-team__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className="grid">
          <li className="grid-item">
            <img src="" className="grid-photo7" alt="" />
            <div className="svg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="youtube" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
            <h3 className="section-team__name">John Doe</h3>
            <p className="section-team__employee">President</p>
          </li>
          <li className="grid-item">
            <img src="" className="grid-photo8" alt="" />
            <div className="svg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="youtube" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
            <h3 className="section-team__name">Jane Doe</h3>
            <p className="section-team__employee">Vice President</p>
          </li>
          <li className="grid-item">
            <img src="" className="grid-photo9" alt="" />
            <div className="svg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="youtube" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
            <h3 className="section-team__name">Steve Smith</h3>
            <p className="section-team__employee">Marketing Head</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
