import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState("")

    const formRef = useRef(null);
    document.title = "PortFolio Website || Contact"
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzOD1JjkWNb1NsIY7nlLetmZF9iD8DsvXoUGwjx7eQPPC2rOWJ6X9pcc4XaGc1IPH1U/exec"

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccessMessage(''); // Clear any previous success message

        fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
            .then(res => {
                setSuccessMessage("Form submitted successfully!")
                setName('');
                setEmail('')
                setNumber('')
                setMessage('')
                setLoading(false)


            })
            .catch(err => console.log(err));

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value)
                break;
            case 'email':
                setEmail(value);
                break;
            case 'number':
                setNumber(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className='contact-container' id='contact'>
                <div className='contact-details'>
                    <h4 className='form-title text-light mb-1'>Lets get in touch</h4>
                    <p className='form-subtitle mb-5'>We are open for any suggestion <br />or just to have a chat...</p>
                    <div>
                        <Link to="https://maps.app.goo.gl/qZZwnYHSDLvnSvPX6" className='form-links' target='_blank'><i className="fa-solid fa-location-dot form-icon" style={{ padding: "9px 12px" }}></i>Bareilly, Uttar Pradesh</Link>
                    </div>
                    <div>
                        <Link to="tel:+918979266475" className='form-links'><i className="fa-solid fa-phone form-icon"></i>+918979266475</Link>
                    </div>
                    <div>
                        <Link to="mailto:dm.gaganbhatia@gmail.com" className='form-links'><i className="fa-regular fa-envelope form-icon"></i> dm.gaganbhatia@gmail.com</Link>
                    </div>
                    <div>
                        <Link to="https://gagsportfolio.netlify.app" className='form-links' target='_blank'><i className="fa-solid fa-globe form-icon"></i>www.gagsthedeveloper.com</Link>
                    </div>
                </div>
                <div className='contact-form'>
                    <h4 className='form-title'>Contact Me</h4>
                    <form onSubmit={handleSubmit} ref={formRef} name='portfolio-data'>
                        <input className='form-input' type="text" value={name} placeholder='Name*'
                            name='name' onChange={handleChange} required /> <br />
                        <input className='form-input' type="mail" value={email} placeholder='Email*'
                            name='email' onChange={handleChange} required /> <br />
                        <input className='form-input' type="text" maxLength={10} pattern="\d{10}" placeholder='Number*'
                            name='number' value={number} onChange={handleChange} required /> <br />
                        <textarea className='form-input' name="message" id="" cols="20" rows="5"
                            placeholder='Message' value={message} onChange={handleChange}></textarea> <br />
                        <div className='d-flex justify-content-center'>
                            <button
                                className="btn submit-btn"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm"
                                            aria-hidden="true"
                                        ></span>
                                        <span role="status" style={{ marginLeft: '8px' }}>
                                            Submitting...
                                        </span>
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </div>
                        {successMessage && (
                            <div className="mt-3 text-center success-msg" >
                                {successMessage}
                            </div>
                        )}

                    </form>
                </div>
            </div>
        </>
    )
}
