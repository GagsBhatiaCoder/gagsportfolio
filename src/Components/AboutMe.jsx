import React from "react";
import "./Comp.css";
import ProgressBar from "./ProgressBar";
import ServiceCard from "./ServiceCard";

export default function AboutMe() {

  return (
    <div className="about-container" id="about">
      <div className="about-info">
        <div className="p-1 p-sm-4">
          <h2 style={{textTransform:"uppercase", textAlign:"center"}}>About Myself</h2>
          <p style={{textAlign:"center"}}>
          Experienced front-end developer specializing in React.js, HTML, CSS,
          JavaScript, and Bootstrap. Dedicated to designing visually appealing
          and user-friendly interfaces that contribute to business success.
          Skilled in leveraging these technologies to develop responsive and
          user-centric web applications, surpassing both client and user 
          expectations. Open to relocation, I am enthusiastic about applying
          my expertise to new environments and opportunities.
          </p>
        </div>
       
        <div className="service-cards">
            <ServiceCard  icon="fa-solid fa-globe" value="100+" description="Cities"/>
            <ServiceCard  icon="fa-solid fa-file" value="100+" description="Projects"/>
            <ServiceCard  icon="fa-solid fa-users" value="1000+" description="Happy Customers"/>
        </div>
      </div>
      <div>
      <ProgressBar skill="HTML" progress="90%" />
      <ProgressBar skill="CSS" progress="80%"/>
      <ProgressBar skill="JAVASCRIPT" progress="70%"/>
      <ProgressBar skill="BOOTSTRAP" progress="80%"/>
      <ProgressBar skill="REACT" progress="70%"/>
      <ProgressBar skill="MYSQL" progress="65%"/>
      </div>
    </div>
  );
}
