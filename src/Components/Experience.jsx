import React from 'react'
import AmicusLogo from '../assets/Amicus.png'
import Building from '../assets/building.png'
import '../App.css'


function Experience() {
    return (
        <div className='container' id='experience'>
            <h2 className='sec-title p-font-color'>Experience</h2>
            <p className='sec-subtitle'>My work experience as a software engineer and working on different companies and projects.</p>
            <div className='experience-box container mb-3'>
                <div className='company-detail '>
                    <div><img src={AmicusLogo} className='company-img' alt="" /></div>
                    <div className=''>
                        <h3 className='text-light exp-job'>Frontend Developer</h3>
                        <h6 className='exp-company mb-0'>Amicus Publico LLP</h6>
                        <p className='exp-time'>March 2024 to Present</p>
                    </div>

                </div>
                <div className='company-box'>
                    <p className='s-font-color'>As a Frontend Developer at Amicus Publico LLP, I worked on developing responsive websites using HTML, CSS, JavaScript, React, and Bootstrap. I implemented SEO strategies to improve site visibility and fixed URL errors to enhance user experience. Additionally, I worked on WordPress projects and optimized websites for better performance, ensuring faster load times and improved functionality across devices.
                    </p>
                    <div className='d-flex'>
                        <p className='me-3'><strong>Skills:</strong></p>
                        <div>
                            <p> &diams; React &diams; HTML &diams; CSS &diams; JavaScript &diams; Bootstrap  &diams; WordPress &diams; Web Design &diams; SEO &diams; Digital Marketing</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='experience-box container mb-3'>
                <div className='company-detail '>
                    <div><img src={Building} className='company-img' alt="" /></div>
                    <div className=''>
                        <h3 className='text-light exp-job'>Frontend Developer</h3>
                        <h6 className='exp-company mb-0'>Freelancer</h6>
                        <p className='exp-time'>March 2023 to Feb 2024</p>
                    </div>

                </div>
                <div className='company-box'>
                    <p className='s-font-color'>As a Freelance Frontend Developer, I created responsive websites using HTML, CSS, JavaScript, React, and Bootstrap. I also implemented SEO practices to enhance website visibility, fixed URL errors, and worked on optimizing website performance. Additionally, I developed and customized WordPress sites for various clients, ensuring fast and user-friendly experiences.</p>
                    <div className='d-flex'>
                        <p className='me-3'><strong>Skills:</strong></p>
                        <div>
                            <p> &diams; React &diams; HTML &diams; CSS &diams; JavaScript &diams; Bootstrap  &diams; WordPress &diams; Web Design &diams; SEO &diams; Digital Marketing</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
