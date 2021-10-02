import React,{useState} from 'react';
import  { Container,Row,Col,Modal, ModalHeader, ModalBody} from 'reactstrap';
import {education} from './data';
import reactCert from "./backgroundImage/React-Course-Certificate.jpg"
import reactNativeCert from "./backgroundImage/React-Native-Course-Certificate.jpg"
import reactFrontEndCert from "./backgroundImage/Front-End-Web-and-Mobile-Development-Certificate.jpg"
import pythonCert from "./backgroundImage/CertificateOfCompletion_Learning-Python.png"

 
function Education() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
    
    return (
      <Container id='education'>
          <Row>
            <Col  >
              <div className="title pt-5 my-5">
               <button className="button-glow" onClick={()=>toggle()}><h2>Education And Licenses</h2></button>
               <div className="underline"></div>
              </div>
              
              <div >
                  {education.map(educ =>{
                      const {school,accomplishment,year} = educ;
                      return (
                        <article className="job-info">
                            <h3>{accomplishment}</h3>
                             <h6> {school}<span>   {year}</span></h6>
                               <div/>
                        </article>
                      )
                    })}
               </div>
            </Col>
          </Row>
          <div>
            <Modal isOpen={modal} toggle={toggle} >
                 <ModalBody className="mt-5 certificate " style={{paddingTop: 50}}toggle={toggle} >
                    <img src={reactFrontEndCert}  alt="" img/>
                    <img src={reactCert}  alt="" img/>
                    <img src={reactNativeCert}  alt="" img/>
                    <img src={pythonCert}  alt="" img/>
                </ModalBody>
            </Modal>
     </div>
      </Container>
    )
}

export default Education