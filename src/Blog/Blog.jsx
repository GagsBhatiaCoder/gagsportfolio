import React from 'react';
import blogPosts from './BlogData';
import BlogPosts from './BlogPost';
import './Blog.css'

const Blog = () => {
    return (
        <>
            <div className='py-3' style={{background:"#fff"}} id='blog'>
                <h2 className='blog-title text-center' >Latest Story From Our Blogs</h2>
                <div className="blog-container">
                    {blogPosts.map((post) => (
                        <BlogPosts key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;