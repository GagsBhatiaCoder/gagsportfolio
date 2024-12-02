import React from 'react'
import BarkatullahLogo from "../assets/barkatullah.png"
import UdemyLogo from "../assets/udemy-new-20212512.jpg"

function Education() {
    return (
        <div className='container' id='education'>
            <h2 className='sec-title'>Education & Certificates</h2>
            <p className='sec-subtitle'>Here are some of my key educational qualifications and certifications that have contributed to my professional growth.</p>
            <div className='experience-box container mb-3'>
                <div className='company-detail '>
                    <div><img src={BarkatullahLogo} className='company-img' alt="" /></div>
                    <div className=''>
                        <h3 className='text-light exp-job'>Barkatullah University, Bhopal</h3>
                        <h6 className='exp-company mb-0'>BP.ED (Bachelor in Phy. Edu.)</h6>
                        <p className='exp-time'>2018-2020</p>
                    </div>

                </div>
                <div className='company-box'>
                    <p className='s-font-color'>Completed B.P.Ed from Barkatullah University, Bhopal (2018-2020), where I learned about physical education, fitness training, and sports science. Gained valuable skills in teamwork, discipline, and performing under challenging situations, which contribute to personal and professional growth.
                    </p>
                </div>
            </div>

            <div className='experience-box container mb-3'>
                <div className='company-detail '>
                    <div><img src={UdemyLogo} className='company-img' alt="" /></div>
                    <div className=''>
                        <h3 className='text-light exp-job'>The Web Developer Boot Camp  </h3>
                        <h6 className='exp-company mb-0'> Colt Steel- Udemy</h6>
                        <p className='exp-time'>March 2023</p>
                    </div>

                </div>
                <div className='company-box'>
                    <p className='s-font-color'>Successfully completed 'The Web Developer Boot Camp' by Colt Steele on Udemy in March 2023. Acquired practical skills in HTML, CSS, JavaScript, React, and Bootstrap, with a focus on responsive design, problem-solving, and building dynamic web projects.</p>
                </div>
            </div>

        </div>
    )
}

export default Education
