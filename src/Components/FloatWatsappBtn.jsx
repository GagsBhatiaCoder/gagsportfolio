import React from 'react'

export default function FloatWatsappBtn() {
    const handleClick = () =>{
        const phoneNumber = '+918979266475'; 
    const message = 'Hi there! Im interested in your web development services. Can we chat more?';

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
    }
 
  return (
    <div>
      <button className='btn btn-success' onClick={handleClick}
       style={{background:"#30D24E", color:"#fff",padding: "0.5rem 0.8rem",
       border:"none", position:"fixed", bottom:"20px", right:"20px", borderRadius:"30px", fontSize:"1.5rem", zIndex:"1"}}
      >
        <i className="fa-brands fa-whatsapp"></i></button>
    </div>
  )
}
