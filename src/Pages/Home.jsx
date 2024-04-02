import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MainSection from '../Components/MainSection'
import OurServices from '../OurServices/OurServices'
import AboutMe from '../Components/AboutMe'
import Blog from '../Blog/Blog'
import FloatWatsappBtn from '../Components/FloatWatsappBtn'
import { useLocation } from 'react-router-dom'




export default function Home() { 
  const location = useLocation();
  useEffect(() => {
    document.title = "Portfolio Website"
  },[location.pathname])
  
   return (
    <>
      <Navbar />
      <FloatWatsappBtn />
      <MainSection />
      <AboutMe />
      <OurServices />
      <Blog />
      <Footer />
     </ >
  )
}
