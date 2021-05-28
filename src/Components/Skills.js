import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdLanguage} from 'react-icons/md'
import {
Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Container,Row,Col
} from 'reactstrap';
import {skills} from './data';

import { FaLinkedin } from 'react-icons/fa';

const Skills = () => {
  return (
        <div className="container">
            
      
            <div className=" title row pt-5 text-center">
                        <div className="col pt-5">
                            <h2>Skills</h2>
                            <div className="underline"></div>
                        </div>
                    </div>
                <div  className="row justify-content-center">
                    {skills.map(skill => {
                        const {id,icon} = skill;
                            return (
                                
                                     <>   
                                    <div key={id} style={{maxWidth:"200px"},{fontSize:"100px"}} className=" text-center col  m-2">
                                    {skill.icon}<p className="text-center" style={{fontSize:"20px"}} >{skill.name}</p>
                                    </div>
                                    
                                    </>
                                       
             
                     ) } ) }
            </div>
            
       </div> 
    
  )  
}

export default Skills;
