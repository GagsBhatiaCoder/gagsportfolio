import React from 'react';
import './Blog.css'
import { useNavigate } from 'react-router-dom';
import Img1 from '../assets/Img1.jpg'



export default function BlogPost({ admin, id, title, content, date, img }) {
  const navigate = useNavigate()

  const handleClick = () => {
    window.scrollTo(0, 0)
    navigate(`/blog/${id}`)
  }
  return (
    // <div className='blog-post' onClick={handleClick} style={{ cursor: "pointer" }}>
    //   <img src={img} alt={title} style={{ width: '100%', borderRadius: "5px" }} />
    //   <div style={{ padding: '1rem' }}>
    //     <div className='blog-icon-box'>
    //       <span><i className="fa-regular fa-user blog-icon"></i>{admin}</span>
    //       <span><i className="fa-regular fa-calendar blog-icon"></i>{date}</span>
    //     </div>
    //     <h5>{title}</h5>
    //     <p>{content.slice(0, 100)}...</p>
    //     <Link className='read-more-btn' onClick={scrollToTop} to={`/blog/${id}`}>Read More</Link>
    //   </div>
    // </div>
    <div className="blog-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="card-image">
        <img src={img} alt={title} style={{ width: '100%', borderRadius: "5px" }} />
      </div>
      <p className="card-title">{title}</p>
      <p className="card-body">
        {content.slice(0, 100)}...
      </p>
      <p className="blog-footer">Written by <span className="by-name">{admin}</span> on <span className="date">{date}</span></p>
    </div>
  )
}
BlogPost.defaultProps = {
  admin: "Author",
  date: "21-03-2023",
  img: Img1
}
