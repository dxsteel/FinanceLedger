import './Cases.scss';


export const Cases = () => {
  return (
    <div className='container'>
      <div className='section-cases__position'>
      <p className='section-cases'>This is what we do</p>
      <h2 className='section-cases__title'>Business Cases</h2>
      <p className='section-cases__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
      <ul className='grid'>
        <li className='grid-item'><img src='' className='grid-photo1' alt=''/></li>
        <li className='grid-item'><img src='' className='grid-photo2' alt=''/></li>
        <li className='grid-item'><img src='' className='grid-photo3' alt=''/></li>
        <li className='grid-item'><img src='' className='grid-photo4' alt=''/></li>
        <li className='grid-item'><img src='' className='grid-photo5' alt=''/></li>
        <li className='grid-item'><img src='' className='grid-photo6' alt=''/></li>
      </ul>
      </div>
    </div>
  );
};

export default Cases;