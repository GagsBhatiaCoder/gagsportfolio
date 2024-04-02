import React from 'react'

export default function ServiceCard(props) {
  return (
    <div>
      <div>
            <i className={props.icon} style={{color:"#3469BB", padding:"1rem"}} ></i>
            <h4 style={{fontWeight:"700", fontSize:"2rem", margin:"0"}}>{props.value}</h4>
            <p style={{color:"grey"}}>{props.description}</p>
          </div>
    </div>
  )
}
