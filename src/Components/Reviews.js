import React, {useState,useEffect} from 'react';
import {Container,Col,Row, Progress,Tooltip} from 'reactstrap';
import {FaStar} from 'react-icons/fa'
import SubmitReview from './SubmitReview'
import ReviewsModal from './ReviewsModal'
import axios from 'axios'
// import {reviews} from "./data";

const Reviews = () => {

    const [reviews,setReviews] = useState([{}]);

    const fetchRevs = async()=> {
        const response= await fetch('http://localhost:5001/api/items');
        const reviews = await response.json();
        return (
            setReviews(reviews)
 
        )
        
     };
    console.log(reviews)
    // const [tooltipOpen, setTooltipOpen] = useState(false);
    // const toggle = () => setTooltipOpen(!tooltipOpen);
    useEffect(()=>{
       fetchRevs();
    },[]);



    

    const ratings = reviews.map(review => { return( review.numStar)})
    const aveRating = ratings.reduce((a,b)=> (+a)+(+b))/(ratings.length);
    return (
        <Container  >
            <Row className="py-4 my-4">
                <Col className="title py-4 my-4">
                <h2>Reviews</h2>
                 <div className="underline"></div>
                </Col>
            </Row>
            <Row className="mx-auto px-auto">
                <Col className="pb-sm-5"  sm="12" md="6" id="progressTooltip"  >
                   
                    {/* <Tooltip placement="top" isOpen={tooltipOpen} target="progressTooltip" toggle={toggle}>
                        click to see review!
                    </Tooltip> */}
                    <Row className="justify-content-center">
                         {[...Array(5)].map((_,i)=> {
                            const ratingValue = i+1;
                            return (
                                <label key={ratingValue}>
                                    <FaStar className="starRating"
                                        color={ratingValue <= aveRating ? "#ffc107" : "rgb(128,128,128)"}/>
                                </label>
                                )
                            })} 
                            <ReviewsModal reviews={reviews}/>
                    </Row> 
                   
                   {[...Array(5)].map((_,i) => {
                        const index = 5-i;
                        let countOfStar = [];
                        countOfStar = ratings.filter(star=>{ return(star == index)})
                        const rate = Math.trunc((countOfStar.length/(ratings.length))*100)
                        return (
       
                                <Row key={index}>
                                    <div className="col-3 pl-5  my-auto">
                                        <span >{index}star</span>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Progress id="progressTooltip" value={rate} style={{marginTop:"1.25rem"}}/>
                                    </div>
                                    <div className="col-3 my-auto">
                                        <span >{rate}%</span>
                                    </div>
                                </Row>
                          )
                    })}
                </Col>
                <Col text-align-left sm="12" md="6">
                    <SubmitReview/>
                </Col>
            </Row>
         </Container>
    )
}

export default Reviews
