import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './BlogData';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Blog.css'
import FloatWatsappBtn from '../Components/FloatWatsappBtn';

export default function FullArtical() {

    const { id } = useParams();
    const post = blogPosts.find((post) => post.id === parseInt(id));
  
    if (!post) {
      return <div>Article not found</div>;
    }
    document.title = `Portfolio Website || ${post.title}`
  return (
    <div >
      <Navbar />
      <FloatWatsappBtn />
      <div className='fullartical container'>
        <div className='fullartical-img-box'>
        <img src={post.img} alt={post.title} className='m-1 rounded' style={{width:"100%"}}/>
        <div className=' d-sm-flex justify-content-between' >
        <span className='fullartical-span'><i className="fa-regular fa-user blog-icon"></i> {post.admin}</span>
           <span className='fullartical-span'><i className="fa-regular fa-calendar blog-icon"></i>{post.date}</span>
        </div>
        </div>
      <h2 className='p-2 m-2 text-center'>{post.title}</h2>
      <p className='fs-5'>{post.content}</p>
     
      </div>
      <Footer />
    </div>
  )
}
