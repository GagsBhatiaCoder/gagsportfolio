import React from 'react';
import { Link } from 'react-router-dom';
import './Comp.css';
import Logo from '../assets/Gagslogo.png'


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand ms-1" to="/"><img style={{width:"85px"}} src={Logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ marginLeft: "auto", marginRight: "auto" }}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/service">Services</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/blogpage">Blog</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="https://gagsecom.netlify.app/" target='_blank'>Ecommerce Website</Link></li>
            <li><Link className="dropdown-item" to="https://gags-weather-app.netlify.app/" target='_blank'>Weather App</Link></li>
            <li><Link className="dropdown-item" to="https://samaylegal.netlify.app/" target='_blank'>Legal Service Website</Link></li>
          </ul>
        </li>
      </ul>
    <div className="d-flex">
      <Link className='btn btn-outline-light me-1' to="/contact">Contact Us</Link>
    </div>
    </div>
  </div>
</nav>
    </>
  )
}
