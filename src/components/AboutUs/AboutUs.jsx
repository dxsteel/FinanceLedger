import './AboutUs.scss';


export const AboutUs = () => {
  return (
    <div className='container section-about__color'>
      <div className='section-about__position'>
      <div className='section-about__photo'/>
      <div className='section-about__title'>
        <p className='section-about'>What are you looking for</p>
        <h2 className='section-about__name'>We provide bespoke solutions</h2>
        <p className='section-about__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
        <button className='section-about__button'>Read More</button>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;