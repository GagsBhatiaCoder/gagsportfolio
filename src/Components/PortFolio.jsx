import React, { useState } from 'react'
import projectData from '../Data/projectdata'
import { Link } from 'react-router-dom';

function PortFolio() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [...new Set(projectData.map(project => project.category))]

    return (
        <div className='container' id='projects'>
            <h2 className='sec-title text-light'>Projects</h2>
            <p className='sec-subtitle'>I have worked on wide range of projects from web apps to ecommerce website</p>
            <div className='d-flex justify-content-center align-items-center '>
                <div className='btn-group mb-3' role="group" aria-label="Basic outlined example">

                    <button
                        className={`btn btn-outline project-btn ${selectedCategory === null ? "active" : ""}`}
                        onClick={() => setSelectedCategory(null)} // Corrected the typo
                    >
                        All
                    </button>

                    {categories.map(category => (
                        <button
                            key={category}
                            className={`btn btn-outline  project-btn ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>


            <div className='container mb-5'>
                {/* <div className='row justify-content-center'>
                    {projectData.filter(project => !selectedCategory || project.category === selectedCategory).map(product => (
                        <Link key={product.id} to={product.link} target='_blank'
                            className=' col-md-3 p-3 bg-light m-2 rounded text-dark text-decoration-none' >
                            <img className='mb-2' src={product.img} alt={product.title} style={{ width: "100%" }} />
                            <h4 className=''>{product.title}</h4>
                        </Link>


                    ))}

                </div> */}
                <div className="row justify-content-center">
                    {projectData.filter(project => !selectedCategory || project.category === selectedCategory).map(product => (
                        <Link className='card me-3 mb-3' key={product.id} to={product.link}>
                            <div className="image_container">
                                <img className='mb-2' src={product.img} alt={product.title} style={{ width: "100%" }} />
                            </div>
                            <div className="title">
                                <h4 className='text-decoration-none text-light'>{product.title}</h4>
                            </div>
                            {/* <div className='skill-set'>
                                <span>React</span>
                                <span>React</span>
                                <span>React</span>
                            </div> */}
                            <div className='portfolio-description'>

                            </div>

                        </Link>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default PortFolio
