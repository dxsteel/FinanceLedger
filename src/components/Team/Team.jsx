import './Team.scss';

export const Team = () => {
  return (
    <div className='container'>
      <div className='section-team__position'>
      <p className='section-team'>Who we are</p>
      <h2 className='section-team__title'>Our Professional Team</h2>
      <p className='section-team__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
      <ul className='grid'>
        <li className='grid-item'>
          <img src='' className='grid-photo7' alt=''/>
          <h3 className='section-team__name'>John Doe</h3>
          <p className='section-team__employee'>President</p>
        </li>
        <li className='grid-item'>
          <img src='' className='grid-photo8' alt=''/>
          <h3 className='section-team__name'>Jane Doe</h3>
          <p className='section-team__employee'>Vice President</p>
          </li>
        <li className='grid-item'>
          <img src='' className='grid-photo9' alt=''/>
          <h3 className='section-team__name'>Steve Smith</h3>
          <p className='section-team__employee'>Marketing Head</p>
          </li>
      </ul>
      </div>
    </div>
  );
};

export default Team;