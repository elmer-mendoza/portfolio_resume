import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdLanguage} from 'react-icons/md'
import {
Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle
} from 'reactstrap';
import projects from './data';
import { FaLinkedin } from 'react-icons/fa';


const Project=({projects}) => {
    return (
    projects.map(project => {
        const {id,title,img,desc} = project;
        return (
            <div key={id}  className=" m-4 ">
            {/* <div key={id} style={{maxWidth:"200px"}} className="col  m-5"> */}
                <Card >
                    <div className="row card-img">
                        <CardImg top  width="100%" height="150px"  src={img} alt="Card image cap" />
                        <p className="row link">
                            <a href=""><i><MdLanguage /></i></a>
                            <a href=""><i><FaLinkedin /></i></a>
                            <a href=""><i><FaGithub /></i></a>
                        </p>
                    </div>  
                    <CardBody>
                        <CardTitle tag="h5">{title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>{desc.substring(0,50)}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }))
}



const Projects = () => {
  return (
        <div className="container">
                <div className=" title row pt-5 text-center">
                    <div className="col pt-5">
                        <h2>Projects</h2>
                        <div className="underline"></div>
                    </div>
                </div>
                <div  className="row justify-content-center">
                    <Project projects={projects}/>
                </div>
       </div> 
    
  );  
};

export default Projects;
