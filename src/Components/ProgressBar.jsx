import React from 'react';
import './Comp.css'

export default function ProgressBar(props){
    const skillClassName = `skills ${props.skill.toLowerCase()}`;
  return (
    <div>
      <div className="progress-item">
          <h4>
            {props.skill} <span>{props.progress}</span>
          </h4>
          <div className="progress-bar">
            <div className={skillClassName}></div>
          </div>
        </div>
    </div>
  )
}
