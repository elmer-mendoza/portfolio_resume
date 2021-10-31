import  React from 'react';
import image from "./backgroundImage/self.png";


const Hero = () => {
    
    return (
        <div className="hero">
           
            <div className="container ">
                <div className="row  ">
                    <div>
                         <img src={image}  alt="Self" /> 
                    </div>
                    <div className="jobTitle ">
                          <h1>Web Developer</h1>
                    </div>  
                </div>
            </div>
        </div>      
    )
}

export default Hero;




