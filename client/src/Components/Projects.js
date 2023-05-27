import React,{useState} from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdLanguage} from 'react-icons/md'
import {
Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle
} from 'reactstrap';
import { FaLinkedin } from 'react-icons/fa';
import Loading from "./Loading";


const  Project=({project}) => {
    const [readMore, setReadMore] = useState(false);
    const {id,title,category,img,desc,githubLink,website} = project;
         return (
            <div key={id}  className=" m-4 ">
                  <Card >
                    <div className="row card-img">
                        <CardImg top  src={img} alt="Card image cap" />
 {/* --hidden project link-- */}
                            <p className="row link">
                                <a href={website}><i><MdLanguage /></i></a>
                                <a href={githubLink}><i><FaGithub /></i></a>
                                <a href="https://www.linkedin.com/in/elmer-mendoza/"><i><FaLinkedin /></i></a>
                            </p>
                    </div>  
                    <CardBody>
                        <CardTitle tag="h5"><a href={website}>{title}</a></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{category}</CardSubtitle>
                          <CardText>
                            <p >
                               {readMore ? desc : `${desc.substring(0, 50)}`}
                                <button className="text-primary" onClick={() => setReadMore(!readMore)}>
                                    {readMore ? '...show less' : '...read more'}
                                </button>
                            </p>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

const Projects = ({projects,loading}) => {
    if(loading){
    return <Loading/>
    }
  return (
        <div  id="projects" className="container" >
            <div className=" title row pt-5 text-center">
                <div className="col pt-5">
                    <h2>Projects</h2>
                    <div className="underline"></div>
                </div>
            </div>
            <div  className="d-flex flex-wrap justify-content-center ">
                {projects.map((project,index) => {
                    return(
                        <Project key={index} project={project}/>
                    )
                })} 
            </div>
       </div> 
    
  );  
};

export default Projects;