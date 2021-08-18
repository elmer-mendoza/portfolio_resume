import React,{useState} from 'react'; 
import {Container,Row,Col, Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import {FaStar} from 'react-icons/fa'
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond';
import FileBase64 from 'react-file-base64';



const Submit = () => {
     const [rating,setRating] =useState(null)
     const [hover,setHover] =useState(null)
     const [formData, setFormData] = useState({})
    //  const [reviewerImage, setReviewerImage] = useState({});

    
    
     const formSubmit = (e) =>{
        e.preventDefault();
        const data = ({...formData});
        // const data = ({...formData,reviewerImage
        // });
        
        console.log(data)
        
        // data.append('reviewerImage',reviewerImage,reviewerImage.name)
         
        axios.post(`http://localhost:5001/api/items`,data)
            .then(res=> {console.log(res)})
            .catch(err=>console.log(err));
        alert(`Thank you for your review ${formData.name}`)
         e.target.reset()  
         setRating(null)
     }

     const changeHandler =(e) => {
         setFormData({...formData,
             [e.target.name]:e.target.value
         })
     }
 
    return (
        <Container>
            <Row >
                <Col className="col-9 mx-auto">
                     <Form  id="myForm" onSubmit={formSubmit} method='post' encType='multipart/form-data'>
                        <FormGroup >
                                {[...Array(5)].map((_,i)=> {
                                    const ratingValue = i + 1;
                                     return (
                                        <label key={ratingValue}>
                                            <input 
                                                type="radio" 
                                                name="numStar" onChange={changeHandler}
                                                value={ratingValue}
                                                onClick={()=> setRating(ratingValue)} 
                                                required  />
                                            <FaStar className="star" 
                                                color={ratingValue <= (hover || rating) ? "#ffc107" : "rgb(128,128,128)"}
                                                onMouseEnter={()=>setHover(ratingValue)}
                                                onMouseLeave={()=>setHover(null)} />
                                        </label>
                                    )
                                })}
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="comment"  onChange={changeHandler} id="textArea" placeholder="Write your comment" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="name" id="name"  onChange={changeHandler} placeholder="Name" required/>
                        </FormGroup>
                            {/* <FilePond
                                files={reviewerImage}
                                onupdatefiles={setReviewerImage}
                                allowMultiple={false}
                                maxFiles={3}
                                server="http://localhost:5001/api/items"
                                name="reviewerImage"
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                            /> */}
                        <FormGroup>
                            {/* <Input type="file" name="reviewerImage"  id="reviewerImage" className="filepond" onChange={(e) =>setReviewerImage(e.target.files[0])} />  */}
                               <FileBase64 type = "file"
                                    multiple={ false }
                                onDone={ ({base64}) => setFormData({...formData,reviewerImage:base64})} /> 
                             <FormText color="muted">
                                Upload your profile picture
                            </FormText>
                                <Button className="my-1" >Submit</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    ) 
}

export default Submit









