import React from 'react'
import ReactLogo from "../assets/React.svg"
import ReduxLogo from "../assets/redux.svg"
import HTMLLogo from "../assets/html5-badge-h-solo.png"
import CSSLogo from "../assets/CSS3_logo_and_wordmark.svg.png"
import JSLogo from "../assets/JavaScript-logo.png"
import MUILogo from "../assets/MI logo.png"
import BootstrapLogo from "../assets/bootstrap-logo-shadow.png"
import NodeLogo from "../assets/nodejsLight.svg"
import MYSqlLogo from "../assets/mysql-original-wordmark.svg"
import FirebaseLogo from "../assets/firebase-icon.svg"
import GitLogo from "../assets/git.png"
import GitHubLogo from "../assets/GitHub-Mark.png"
import NetlifyLogo from "../assets/netlify-logo-BD8F8A77E2-seeklogo.com.png"
import VSCodeLogo from "../assets/Visual_Studio_Code_1.35_icon.svg.png"



function Skills() {
    return (
        <div className='container' id='skills'>
            <h2 className='sec-title'>Skills</h2>
            <p className='sec-subtitle'>Here are some of my skills on which I have been working on for the past 3 years.</p>
            <div className='container d-flex flex-wrap'>
                <div className='skills-containers container'>
                    <h2 className='text-light text-center'>Frontend</h2>
                    <div className='skills-box'>
                        <div className='skills-btn'><img src={ReactLogo} alt="React Logo" className='skills-icons' /> <span className='text-light'>React</span></div>
                        <div className='skills-btn'><img src={ReduxLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>Redux</span></div>
                        <div className='skills-btn'><img src={HTMLLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>HTML</span></div>
                        <div className='skills-btn'><img src={CSSLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>CSS</span></div>
                        <div className='skills-btn'><img src={JSLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>JavaScript</span></div>
                        <div className='skills-btn'><img src={BootstrapLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>Bootstrap</span></div>
                        <div className='skills-btn'><img src={MUILogo} alt="Logo" className='skills-icons' /> <span className='text-light'>Material UI</span></div>
                    </div>
                </div>
                <div className='skills-containers container'>
                    <h2 className='text-light text-center'>Backend</h2>
                    <div className='skills-box'>
                        <div className='skills-btn'><img src={NodeLogo} alt="React Logo" className='skills-icons' /> <span className='text-light'>Node Js</span></div>
                        <div className='skills-btn'><img src={MYSqlLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>MYSql</span></div>
                        <div className='skills-btn'><img src={FirebaseLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>Firebase</span></div>

                    </div>
                </div>
                <div className='skills-containers container'>
                    <h2 className='text-light text-center'>Others</h2>
                    <div className='skills-box'>
                        <div className='skills-btn'><img src={GitLogo} alt=" Logo" className='skills-icons' /> <span className='text-light'>Git </span></div>
                        <div className='skills-btn'><img src={GitHubLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>GitHub</span></div>
                        <div className='skills-btn'><img src={NetlifyLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>Netlify</span></div>
                        <div className='skills-btn'><img src={VSCodeLogo} alt="Logo" className='skills-icons' /> <span className='text-light'>VS Code</span></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
