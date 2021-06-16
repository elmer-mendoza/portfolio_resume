import React, { useState,useEffect } from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Feedback from './Feedback';
import {feedBacks} from "./data";
import SortHeader from "./SortHeader";
import {fetchReview} from '../redux';
import {connect} from 'react-redux';


const ProgressModal = (props) => {
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [filterFeedbacks,setFilterFeedbacks] = useState(feedBacks);
  
  useEffect(()=>{
      fetchReview()
  },[])
  
  
  
  
  const sortDate =(e)=> {
    
    if (e.target.value === "Ascending") {
      const sortedDate=filterFeedbacks.sort((a,b)=> a.date<b.date ? -1:1);
      return setFilterFeedbacks([...sortedDate]);
    }
     if (e.target.value === "Descending") {
      const sortedDate=filterFeedbacks.sort((a,b)=> a.date>b.date ? -1:1);
      return setFilterFeedbacks([...sortedDate]);
    }  
      
  }

  const numStar = (e) =>{
    if (e.target.value === "All") {
      setFilterFeedbacks(feedBacks)
    }
    else{
      const filteredFeedbacks = feedBacks.filter(feedback => feedback.numStar === e.target.value );
      setFilterFeedbacks([...filteredFeedbacks]);

    }
  }

  
 
  return (
    <div>
      <button className="revModal" onClick={toggle}>see reviews</button>
      <Modal isOpen={modal} toggle={toggle} className={'revModal'}>
        <ModalHeader className="fixed-top bg-light" toggle={toggle}>
           <SortHeader sortDate={sortDate} numStar={numStar} />
        </ModalHeader>
        <ModalBody className="mt-5 pt-5">
            <Feedback  filterFeedbacks={filterFeedbacks}/>
        </ModalBody>
       </Modal>
    </div>
  );
}
const mapStateToProps = state=>{
  return{
    reviews : state.reviews.reviews
  }
}

 const mapDispatchToProps = dispatch =>{
    return {
      fetchReview : ()=> dispatch(fetchReview())
    }    
 } 



export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ProgressModal)