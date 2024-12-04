import React, { useState } from 'react'
import { Link } from 'react-router-dom'




function Nav2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav>
                {/* Toggle button */}
                <label className="logo "><Link className='text-decoration-none text-light' to="/">GagsCoder</Link></label>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                {/* Logo */}


                {/* Menu Links */}
                <ul className={isOpen ? "nav-links open" : "nav-links"}>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#experience"> Experiance </a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#education">Education</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav2
