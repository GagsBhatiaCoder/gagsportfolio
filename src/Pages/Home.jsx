import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import MainSection from '../Components/MainSection'
// import Blog from '../Blog/Blog'
import FloatWatsappBtn from '../Components/FloatWatsappBtn'
import { useLocation } from 'react-router-dom'
import PortFolio from '../Components/PortFolio'
import Skills from '../Components/Skills'
import Experience from '../Components/Experience'
import Nav2 from '../Components/Nav2'
import Education from '../Components/Education'




export default function Home() {
  const location = useLocation();
  useEffect(() => {
    document.title = "Portfolio Website"
  }, [location.pathname])

  return (
    <>
      <Nav2 />
      <FloatWatsappBtn />
      <MainSection />
      <Skills />
      <Experience />
      {/* <Blog /> */}
      <PortFolio />
      <Education />
      <Footer />
    </ >
  )
}
