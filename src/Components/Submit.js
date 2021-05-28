import React,{useState} from 'react'; 
import {Container,Row,Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {FaStar} from 'react-icons/fa'


const Submit = () => {
     const [rating,setRating] =useState(null)
     const [hover,setHover] =useState(null)

    return (
        <Container>
            <Row >
                <Col className="col-9 mx-auto">

          <Form>
             <FormGroup >
           {[...Array(5)].map((_,i)=> {
               const ratingValue = i + 1;
              ;
               return (
                   <label key={ratingValue}>
                       <input 
                       type="radio" 
                       name="rating" 
                       value={ratingValue}
                       onClick={()=> setRating(ratingValue)} 
                        />
                       <FaStar className="star" 
                       color={ratingValue <= (hover || rating) ? "#ffc107" : "rgb(128,128,128)"}
                       onMouseEnter={()=>setHover(ratingValue)}
                       onMouseLeave={()=>setHover(null)}
                       />
                   </label>
               )
           } 
              )}
             </FormGroup>
            <FormGroup>
                <Input type="textarea" name="text" id="exampleText" placeholder="Write your comment"/>
            </FormGroup>
            <FormGroup>
                <Input type="" name="textName" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <Input type="file" name="profilePic" id="profilePic" />
                <FormText color="muted">
                Upload your profile picture
                </FormText>
            </FormGroup>
            
            <Button className="my-1">Submit</Button>
            </Form>
                </Col>
            </Row>
        </Container>
    ) 
}

export default Submit









