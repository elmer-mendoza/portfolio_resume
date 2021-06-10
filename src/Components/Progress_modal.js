import React, { useState } from 'react';
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
 
  
  const sortDate =(e)=> {
    
    if (e.target.value == "Ascending") {
      const sortedDate=filterFeedbacks.sort((a,b)=> a.date<b.date ? -1:1);
      return setFilterFeedbacks([...sortedDate]);
    }
     if (e.target.value == "Descending") {
      const sortedDate=filterFeedbacks.sort((a,b)=> a.date>b.date ? -1:1);
      return setFilterFeedbacks([...sortedDate]);
    }  
      
  }

  const numStar = (e) =>{
    if (e.target.value == "All") {
      setFilterFeedbacks(feedBacks)
    }
    else{
      const filteredFeedbacks = feedBacks.filter(feedback => feedback.numStar == e.target.value );
      setFilterFeedbacks([...filteredFeedbacks]);

    }
  }

  
 
  return (
    <div>
      <button className="revModal" onClick={toggle}>see reviews</button>
      <Modal isOpen={modal} toggle={toggle} className={'revModal'}>
        <ModalHeader toggle={toggle}>
           <Sort_header sortDate={sortDate} numStar={numStar} />
        </ModalHeader>
        <ModalBody>
            <Feedback  filterFeedbacks={filterFeedbacks}/>
        </ModalBody>
       </Modal>
    </div>
  );
}

export default ProgressModal;