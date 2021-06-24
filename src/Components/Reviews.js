import React, {useState} from 'react';
import {Container,Col,Row, Progress,Tooltip} from 'reactstrap';
import SubmitReview from './SubmitReview'
import ReviewsModal from './ReviewsModal'
import {reviews} from "./data";

const Reviews = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const numStarReviews = reviews.map(review => {
       return(
            review.numStar
       )
    })

    console.log(numStarReviews)
    console.log(reviews)
    return (
        <Container  >
            <Row className="py-4 my-4">
                <Col className="title py-4 my-4">
                <h2>Reviews</h2>
                 <div className="underline"></div>
                </Col>
            </Row>
            
            <Row className="mx-auto px-auto">
                <Col className="py-5"  sm="12" md="6" id="progressTooltip"  >
                    <ReviewsModal/>
                    <Tooltip placement="top" isOpen={tooltipOpen} target="progressTooltip" toggle={toggle}>
                        click to see review!
                    </Tooltip>
                   {[...Array(5)].map((_,i) => {
                     const index = i+1;
                     let countOfStar = [];
                     countOfStar = numStarReviews.filter(star=>{
                         return(
                             star == index
                             )
                            })
                            console.log(countOfStar)
                     const rate = Math.trunc((countOfStar.length/(numStarReviews.length))*100)
                    return (
                        <Col key={index} >
                                <Row >
                                <div className="col-3 pl-5  my-auto">
                                    <span >{index}star</span>
                                </div>
                                <div className="col-6 mb-3">
                                    <Progress 
                                    id="progressTooltip"
                                    value={rate}
                                    style={{marginTop:"1.25rem"}}/>
                                </div>
                                <div className="col-3 my-auto">
                                    <span >{rate}%</span>
                                </div>
                                </Row>
                            </Col>
                        )})}
                    </Col>
                <Col text-align-left sm="12" md="6">
                    <SubmitReview/>
                </Col>
            </Row>
         </Container>
    )
}

export default Reviews
