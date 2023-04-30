import './Blog.scss';


export const Blog = () => {
  return (
    <div className='container section-blog__color'>
      <div className='section-blog__position'>
      <div className='section-blog__photo'/>
      <div className='section-blog__title'>
        <p className='section-blog__date'>April 16 2020</p>
        <h2 className='section-blog__name'>Blog Post One</h2>
        <p className='section-blog__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
        <button className='section-blog__button'>Read Our Blog</button>
      </div>
      </div>
    </div>
  );
};

export default Blog;