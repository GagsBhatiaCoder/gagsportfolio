import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Blog/Blog';
import FullArtical from './Blog/FullArtical';
import ContactForm from './Components/ContactForm'; import BlogPage from './Blog/BlogPage';
import Loader from './Components/Loader';
import Skills from './Components/Skills';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // After the delay, set isLoading to false to indicate that the page has loaded
      setIsLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout in case the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  // window.onload = () => {

  // }
  return (
    <>
      {isLoading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}><Loader
        loading={isLoading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> </div> :
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/#skills" element={<Skills />} />
            <Route path='/blogpage' element={<BlogPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<FullArtical />} />
          </Routes>
        </Router>
      }
    </>
  )
}

