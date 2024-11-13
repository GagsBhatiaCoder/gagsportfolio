import React from 'react'
import Gagan from '../assets/gags.png'
import './Comp.css'
import SocialMediaProfile from './SocialMediaProfile'
// import { Link } from 'react-router-dom'

export default function MainSection() {
  return (
    <div className="p-4 " >
      <section className="container d-md-flex p-4 rounded ">

        <div className='d-flex justify-content-center'>
          <img src={Gagan} alt="author_image" className="author-img rounded" />
        </div>
        <div className="author-info slide-in-right text-light d-flex flex-column justify-content-center">
          <p className="title-info mb-3">Hello Everyone I am</p>
          <div class="container p-0">
            <div class="box">

              <div class="title">
                <span class="block"></span>
                <h1>Gagan Bhatia<span></span></h1>
              </div>

              <div class="role">
                <div class="block"></div>
                <p className='mt-3 mb-3'>Frontend Developer</p>
              </div>

            </div>
          </div>


          <p className="about-me mb-3">
            Elevating Businesses through Exceptional Web Development.
            Crafting visually appealing and user-centric digital
            experiences with expertise in React.js, HTML, CSS,
            JavaScript, and Bootstrap.
          </p>
          <div className='d-flex justify-content-start'>
            <a href='https://drive.google.com/file/d/1r8G6_AaX4D4fonTVAAYo43G6-tYHDKXd/view?usp=sharing' className='resume-btn' target="_blank" rel="noopener noreferrer">
              <span className="text">Resume</span>
            </a>

          </div>
          <SocialMediaProfile />
        </div>


      </section>

    </div>
  )
}
