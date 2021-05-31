import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import {FaStar} from 'react-icons/fa';
import {feedBacks} from "./data";

const Feedback = () => {
    const [id,image,name,date,comment,numStar] = feedBacks;
    
    return (

    <Container >
            <Row className="justify-content-center ">
                {feedBacks.map( fB => {
            
                    return (
            
                        <Col className="fback_card p-1 m-2 shadow" key={fB.id}>
                            <Row >
                                <Col className="col-4">
                                    <img src={fB.image} className="fback_img shadow m-1"  alt="" />
                                </Col>
                                <Col className="col-8">
                                    <Row>
                                        {fB.name}
                                    </Row>
                                    <Row>
                                        {fB.date} 
                                    </Row>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="m-0  p-2">
                                {[...Array(5)].map((_,index) => {
                                let  i = index +=1;
                                                            let color;
                                (i<=fB.numStar) ? color = "yellow" : color = "grey"
                                return  (
                                    <FaStar key={i} style={{color:color}}/>
                                )})}
                            </Row>
                            <Row className="m-0 text-justify p-2">
                                    {fB.comment}
                            </Row>
                        </Col>
            )   
            
        })}
 
            </Row>
        </Container>
)}

export default Feedback;
