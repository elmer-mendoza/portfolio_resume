import React from 'react';
import {Form,Label,Input } from 'reactstrap';

const Sort_header = ({sortDate,numStar}) => {


 
  return (
    <Form >
        <Label className="ml-3" for="numStar">No of stars
          <Input type="select" name="numStar" id="numStar" onChange={numStar} >
           {/* {[...Array(5)].map((_,index)=>{
             let i = index +=1;
             return `<option>${i}</option>`
           })};             */}
           
            <option>All</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
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

export default Sort_header;


