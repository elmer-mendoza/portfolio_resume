import React,{useState} from 'react'; 
import {Container,Row,Col, Button, Form, FormGroup, Input, FormText } from 'reactstrap';

import {FaStar} from 'react-icons/fa'


const Submit = () => {
     const [rating,setRating] =useState(null)
     const [hover,setHover] =useState(null)
     const [formData, setFormData] = useState({})
     const [selectedFile, setSelectedFile] = useState(null);

    
    
     const formSubmit = (e) =>{
        e.preventDefault();
         console.log({...formData,selectedFile});
         e.target.reset()  
         setRating(null)
         
         }
 

     const {textArea,name,rate,profilePic}= formData;

     const changeHandler =(e) => {
        
         setFormData({...formData,
             [e.target.name]:e.target.value
         })
       
         
        }
     


    
    return (
        <Container>
            <Row >
                <Col className="col-9 mx-auto">
                    
                    <Form  id="myForm" onSubmit={formSubmit}>
                        <FormGroup >
                                {[...Array(5)].map((_,i)=> {
                                    const ratingValue = i + 1;
                                    ;
                                    return (
                                        <label key={ratingValue}>
                                            <input 
                                            type="radio" 
                                            name="rate" onChange={changeHandler}
                                            value={ratingValue}
                                            onClick={()=> setRating(ratingValue)} 
                                            
                                             required   />
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
                            <Input type="textarea" name="textArea"  onChange={changeHandler} id="textArea" placeholder="Write your comment" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="" name="name" id="name"  onChange={changeHandler} placeholder="Name" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="file" name="profilePic"  id="profilePic" onChange={(e) =>setSelectedFile(e.target.files[0])} />
         
                            <FormText color="muted">
                            Upload your profile picture
                            </FormText>
                        </FormGroup>
                        
                        <Button className="my-1" >Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    ) 
}

export default Submit









