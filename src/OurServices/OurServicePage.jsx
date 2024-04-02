import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import OurServices from './OurServices';
import { Link } from 'react-router-dom';

export default function OurServicePage() {
  return (
    <div>
        <Navbar />
        <div className='bg-light'>
      <div style={{ height: "20vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Link to='/' style={{ textDecoration: "none", color: "#000", paddingRight: ".2rem" }}> Home </Link>  &gt; Our Services  </div>
      <OurServices />
      </div>
      <Footer />
      
    </div>
  )
}
