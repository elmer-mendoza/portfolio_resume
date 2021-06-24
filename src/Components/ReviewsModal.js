import React, { useState,useEffect } from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import FilteredReviews from './FilteredReviews';
import {reviews} from "./data";
import SortReviewsHeader from "./SortReviewsHeader";
import {connect} from 'react-redux';
import {fetchReviewDataRequest} from '../redux/reviews/reviewActions';
import {FETCH_REVIEWDATA_REQUEST} from '../redux/reviews/reviewActionTypes'




const ReviewsModal = (props) => {

 useEffect(() => {
  fetchReviewDataRequest()
 }, [])
  
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [filteredReviews,setFilteredReviews] = useState(reviews);
   
  
  const sortDate =(e)=> {
    
    if (e.target.value === "Ascending") {
      const sortedDate=filteredReviews.sort((a,b)=> a.date<b.date ? -1:1);
      return setFilteredReviews([...sortedDate]);
    }
     if (e.target.value === "Descending") {
      const sortedDate=filteredReviews.sort((a,b)=> a.date>b.date ? -1:1);
      return setFilteredReviews([...sortedDate]);
    }  
   }

  const numStar = (e) =>{
    if (e.target.value === "All") {
      setFilteredReviews(reviews)
    }
    else{
      const filteredReviews = reviews.filter(review => review.numStar === e.target.value );
      setFilteredReviews([...filteredReviews]);
    }
  }

  
 
  return (
    <div>
      <button className="revModal" onClick={toggle}>see reviews</button>
      <Modal isOpen={modal} toggle={toggle} className={'revModal'}>
        <ModalHeader className="fixed-top bg-light" toggle={toggle}>
           <SortReviewsHeader sortDate={sortDate} numStar={numStar} />
        </ModalHeader>
        <ModalBody className="mt-5 pt-5">
            <FilteredReviews  filteredReviews={filteredReviews}/>
        </ModalBody>
       </Modal>
    </div>
  );
}

const mapStateToProps =(state)=>{
  return{
    reviews:state.reviews
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchReviewDataRequest:()=>dispatch({type:"GOOD"})
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ReviewsModal)