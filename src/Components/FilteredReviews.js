import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import {FaStar} from 'react-icons/fa';



const FilteredReviews = ({filteredReviews}) => {
    return (
        <Container >
            <Row className="justify-content-center ">
                  {filteredReviews.map((review) => {
                    const {image,name,date,comment,id,numStar} = review;
                    return (
                          <Col className="fback_card p-1 m-2 shadow" key={id}>
                            <Row >
                                <Col className="col-4">
                                    <img src={image} className="fback_img shadow m-1"  alt="" />
                                </Col>
                                <Col className="col-8">
                                    <Row>
                                        {name}
                                    </Row>
                                    <Row>
                                        {date} 
                                    </Row>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="m-0  p-2">
                                {[...Array(5)].map((_,index) => {
                                let  i = index +=1;
                                let color;
                                (i<=numStar) ? color = "yellow" : color = "grey"
                                return  (
                                    <FaStar key={i} style={{color}}/>
                                )})}
                            </Row>
                            <Row className="m-0 text-justify p-2">
                                    {comment}
                            </Row>
                        </Col>
                    )   
                   })}
             </Row>
        </Container>
    )
}

export default FilteredReviews;
