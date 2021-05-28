import React, {useState} from 'react';
import {Container,Col,Row, Progress,Tooltip} from 'reactstrap';
import Submit from './Submit'
import Progress_modal from './Progress_modal'

const Reviews = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
      const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <Container  >
            <Row className="py-4 my-4">
                <Col className="title py-4 my-4">
                <h2>Reviews</h2>
                 <div className="underline"></div>
                </Col>
            </Row>
            
            <Row className="mx-auto px-auto">
                <Col className="py-5"  sm="12" md="6">
                   {[...Array(5)].map((_,i) => {
                     const index = i+1;
                     return (
                         <Col className=" ">

                            <Row >
                            <div className="col-3 pl-5  my-auto">
                                <span >{index}star</span>
                            </div>
                            <div className="col-6 mb-3">
                                <Progress_modal/>
                                <Tooltip placement="top" isOpen={tooltipOpen} target="progressTooltip" toggle={toggle}>
                                    click to see review!
                                </Tooltip>
                            </div>
                            <div className="col-3 my-auto">
                                <span >{index}star</span>
                            </div>
                            </Row>
                         </Col>
                      )})}
                </Col>
                <Col text-align-left sm="12" md="6">
                    <Submit/>
                </Col>
            </Row>
         </Container>
    )
}

export default Reviews
