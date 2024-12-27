import React from 'react'
import tempImg from "../assets/Account.jpg"

function ProjectModal() {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered text-dark ">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className='p-3'>
                            <img src={tempImg} alt="Project" className='w-100 rounded' />
                        </div>
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        </div>
                        <div className="modal-body">
                            <p className="modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati, quidem neque temporibus similique, maxime ratione, quae praesentium voluptate ducimus magnam vel sint labore voluptatem consequatur eveniet optio atque. Sunt.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectModal
