import React from 'react'
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Footer from './Footer';
import { Link } from 'react-router-dom';


export default function AboutMePage() {
  document.title = "Portfolio Website || About"
  return (
    <div >
          <Navbar />
    <div style={{height:"20vh", display:"flex", justifyContent:"center", alignItems:"center", background:"#fff"}}>
         <Link to='/' style={{textDecoration:"none", color:"#000", paddingRight:".2rem"}}>Home</Link> &gt; About Me</div>
    <AboutMe />
    <Footer />
</div>
  )
}
