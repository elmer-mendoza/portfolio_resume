import React, { useState,useEffect } from 'react';
import {Modal, ModalHeader, ModalBody,Form,Label,Input} from 'reactstrap';
import FilteredReviews from './FilteredReviews';
import {connect} from 'react-redux';
import {fetchReviewDataRequest} from '../redux/reviewActions';
import {FETCH_REVIEWDATA_REQUEST} from '../redux/reviewActionTypes'


const SortReviewsHeader =({numStar,sortDate})=> {
  const options = [...Array(5)].map((_,index)=>{
              let i = index +=1
              return (
                <option>{i}</option>
                )
            });
  return (
      <Form >
          <Label className="ml-3" for="numStar">No of stars
            <Input type="select" name="numStar" id="numStar" onChange={numStar} >
                <option>All</option> 
                {options}           
            </Input>
          </Label>
          <Label className="ml-3" for="sortDate">Date
            <Input type="select" name="sortDate" id="sortDate" onChange={sortDate} >
              <option disabled>Sort</option>
              <option>Descending</option>
              <option>Ascending</option>
          </Input>
          </Label>
      </Form>
);
}
const ReviewsModal = (props) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [filteredReviews,setFilteredReviews] = useState(props.reviews);
  
  const sortDate =(e)=> {
    console.log(e)
    if (e.target.value === "Ascending") {
      const sortedDate=filteredReviews.sort((a,b)=> a.date<b.date ? -1:1);
      return setFilteredReviews([...sortedDate]);
    }
    if (e.target.value === "Descending") {
      const sortedDate=filteredReviews.sort((a,b)=> a.date>b.date ? -1:1);
      return setFilteredReviews([...sortedDate]);
    }  
  }
  
  const numStar =  (e) => {
     if (e.target.value === "All") {
      setFilteredReviews(props.reviews);
     }
    else{
      let filterReviews = props.reviews.filter(review => review.numStar == e.target.value)
      setFilteredReviews(filterReviews);
    }
  }

  
// const resetReviews = ()=> {
// props.setReviews(props.reviews)   
// }


 const handleDisplayReview = ()=> {
   props.fetchReviews()
  //  resetReviews()
   console.log(props.reviews)
   toggle();
   setFilteredReviews(props.reviews)

 }

  return (
    <div>
      <button className="btn btn-sm ml-3 my-auto" onClick={handleDisplayReview}>see reviews</button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader className="fixed-top bg-light" toggle={toggle} >
            {/* <SortReviewsHeader  /> */}
            <SortReviewsHeader sortDate={sortDate} numStar={numStar} />
        </ModalHeader>
        <ModalBody className="mt-5 pt-5" >
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
    fetchReviewDataRequest:(props)=>props.dispatch({type:"GOOD"})
  }
}



export default ReviewsModal
// export default connect(mapStateToProps,mapDispatchToProps)(ReviewsModal)