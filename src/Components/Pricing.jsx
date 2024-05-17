import React from 'react'
import { Link } from 'react-router-dom'

function Pricing({ props }) {
    return (
        <div className='conrainer d-flex justify-content-center bg-light'>
            <div class="card me-3" style={{ width: "18rem" }}>
                <div class="card-body ">
                    <h5 class="card-title text-center mt-3">Static Website</h5>
                    <p className="card-text text-center fs-6 mb-3">For Small Business</p>
                    <h6 class="card-subtitle mb-2  text-center fs-3 mb-5"><i class="fa-solid fa-indian-rupee-sign"></i> 5000 </h6>
                    <p class="card-text"><i class="fa-solid fa-circle-check"></i>1 Website </p>
                    <p class="card-text"><i class="fa-solid fa-circle-check"></i>1 Month maintanence </p>
                    <p class="card-text"><i class="fa-solid fa-circle-xmark"></i> No Domain </p>
                    <p class="card-text"><i class="fa-solid fa-circle-xmark"></i> No Hosting</p>
                    <div className='d-flex justify-content-center'>
                    <Link to="/contact" className="btn btn-outline-dark  my-3" >Buy Now</Link>
                    </div>
                  
                </div>
            </div>
            <div class="card me-3" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title text-center mt-3">Dynamic Website</h5>
                    <p className="card-text text-center fs-6 mb-3">For Medium, Large Business</p>
                    <h6 class="card-subtitle mb-2  text-center fs-3 mb-5"> <i class="fa-solid fa-indian-rupee-sign"></i>15000 <span className='fs-6 fw-light'>(starting)</span> </h6>
                    <p class="card-text"><i class="fa-solid fa-circle-check"></i>1 Website </p>
                    <p class="card-text"><i class="fa-solid fa-circle-check"></i>3-6 Month maintanence </p>
                    <p class="card-text"><i class="fa-solid fa-circle-check"></i>1 Year Domain </p>
                    <p class="card-text"><i class="fa-solid fa-circle-xmark"></i>No Hosting </p>
                    <div className='d-flex justify-content-center'>
                    <Link to="/contact" className="btn btn-outline-dark  my-3" >Buy Now</Link>
                    </div>
                </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title">Web App </h5>
                    <p className="card-text">For Informative Business</p>
                    <h6 class="card-subtitle mb-2 text-body-secondary">5000 Rs</h6>
                    <p class="card-text">1 Website </p>
                    <p class="card-text">1 Month maintanence </p>
                    <p class="card-text">1 Website </p>
                    <Link to="/contact" className="btn btn-outline-dark" >Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing