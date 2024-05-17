import React, { useState } from 'react'
import projectData from '../Data/projectdata'
import { Link } from 'react-router-dom';

function PortFolio() {
    const [selectedCategory, setSlectedCategory] = useState(null);

    const categories = [...new Set(projectData.map(project => project.category))]

    return (
        <>
            <h2 className='service-title'>My Portfolio</h2>
            <div className='d-flex flex-wrap  justify-content-center'> 
            <button className={`btn btn-light me-3 mb-2 ${selectedCategory === null ? "active" : ""}`}
            onClick={() => setSlectedCategory(null)}>All</button>
            {categories.map(category => (
                <button key={category} className={`btn btn-light me-3 mb-2 ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSlectedCategory(category)}>
                    {category}
                </button>
            ))}
            </div>

            <div className='container mb-5'>
                <div className='row justify-content-center'>
                    {projectData.filter(project => !selectedCategory || project.category === selectedCategory).map(product => (
                        <Link key={product.id} to={product.link} target='_blank' 
                        className=' col-md-3 p-3 bg-light m-2 rounded text-dark text-decoration-none' >
                            <img className='mb-2' src={product.img} alt={product.title} style={{ width: "100%" }} />
                            <h4 className=''>{product.title}</h4>
                        </Link>
                        
                         
                    ))}
                </div>
            </div>
        </>
    )
}

export default PortFolio
