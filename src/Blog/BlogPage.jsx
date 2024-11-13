import React from 'react'
import Blog from './Blog'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Nav2 from '../Components/Nav2'

export default function BlogPage() {
  document.title = "Portfolio Website || Blog"
  return (
    <div >
      <Nav2 />
      <div style={{ height: "20vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#fff" }}>
        <Link to='/' style={{ textDecoration: "none", color: "#000", paddingRight: ".2rem" }}>Home</Link> &gt; Blog</div>
      <Blog />
      <Footer />
    </div>
  )
}
