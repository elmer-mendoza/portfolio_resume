import React from 'react';
import {Form,Label,Input } from 'reactstrap';

const SortReviewsHeader = ({sortDate,numStar}) => {

  return (
    <Form >
        <Label className="ml-3" for="numStar">No of stars
          <Input type="select" name="numStar" id="numStar" onChange={numStar} >
              <option>All</option> 
              {[...Array(5)].map((_,index)=>{
                let i = index +=1;
                return (
                  <option>{i}</option>
                  )
              })};            
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

export default SortReviewsHeader;


