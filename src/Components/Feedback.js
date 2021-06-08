import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import {FaStar} from 'react-icons/fa';



const Feedback = ({filterFeedbacks}) => {

    return (
        
        <Container >
            <Row className="justify-content-center ">
            
                {filterFeedbacks.map((fb) => {
                    return (
            
                        <Col className="fback_card p-1 m-2 shadow" key={fb.id}>
                            <Row >
                                <Col className="col-4">
                                    <img src={fb.image} className="fback_img shadow m-1"  alt="" />
                                </Col>
                                <Col className="col-8">
                                    <Row>
                                        {fb.name}
                                    </Row>
                                    <Row>
                                        {fb.date} 
                                    </Row>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="m-0  p-2">
                                {[...Array(5)].map((_,index) => {
                                let  i = index +=1;
                                let color;
                                (i<=fb.numStar) ? color = "yellow" : color = "grey"
                                return  (
                                    <FaStar key={i} style={{color:color}}/>
                                )})}
                            </Row>
                            <Row className="m-0 text-justify p-2">
                                    {fb.comment}
                            </Row>
                        </Col>
            )   
            
        })}
 
            </Row>
        </Container>
)}

export default Feedback;
