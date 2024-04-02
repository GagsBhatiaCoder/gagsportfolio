import React,{useState, useEffect} from 'react'
import './OurService.css'

export default function OurServiceCard(props) {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const serviceCard = document.querySelector('.our-service-card');
      if (serviceCard) {
        const cardTop = serviceCard.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold based on when you want the animation to start
        const threshold = windowHeight * 0.7;

        if (cardTop < threshold) {
          setIsVisible(true);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
            <div className={`our-service-card ${isVisible ? 'slide-in-elliptic-bottom-fwd' : ''}`}>
                <i style={{ fontSize: "4rem", padding: "1rem" }} className={props.icon}></i>
                <h3 className='service-card-title'>{props.title}</h3>
                <p className='service-card-para'>{props.description}</p>
            </div>
        </>
    )
}
