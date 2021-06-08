import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup,Label,Input} from 'reactstrap';
import Feedback from './Feedback';
import {feedBacks} from "./data";
import Sort_header from "./Sort_header"

const ProgressModal = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [filterFeedbacks,setFilterFeedbacks] = useState(feedBacks);
    
  
  const result = (e) =>{
    const filteredFeedbacks = feedBacks.filter(feedback => feedback.numStar == e.target.value );
    setFilterFeedbacks(filteredFeedbacks);
  }
  
 
  return (
    <div>
      <button className="revModal" onClick={toggle}>see reviews</button>
      <Modal isOpen={modal} toggle={toggle} className={'revModal'}>
        <ModalHeader toggle={toggle}>
           <Sort_header result={result}/>
        </ModalHeader>
        <ModalBody>
            <Feedback  filterFeedbacks={filterFeedbacks}/>
        </ModalBody>
       </Modal>
    </div>
  );
}

export default ProgressModal;