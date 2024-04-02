import React from 'react';
import './Blog.css'
import { Link, useNavigate } from 'react-router-dom';
import Img1 from '../assets/Img1.jpg'



export default function BlogPost({admin, id, title, content, date, img }) {
  const navigate = useNavigate()
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const handleClick = () => {
    window.scrollTo(0, 0)
    navigate(`/blog/${id}`)
  }
  return (
    <div className='blog-post' onClick={handleClick} style={{cursor:"pointer"}}>
       <img src={img} alt={title} style={{ width: '100%', borderRadius:"5px" }} />
      <div style={{ padding: '1rem' }}>
        <div className='blog-icon-box'>
          <span><i className="fa-regular fa-user blog-icon"></i>{admin}</span>
           <span><i className="fa-regular fa-calendar blog-icon"></i>{date}</span>
           </div>
        <h3>{title}</h3>
        <p>{content.slice(0, 100)}...</p>
        <Link className='read-more-btn' onClick={scrollToTop} to={`/blog/${id}`}>Read More</Link>
      </div>
    </div>
  )
}
BlogPost.defaultProps = {
  admin:"Author",
  date:"21-03-2023",
  img: Img1
}
