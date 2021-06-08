import React from 'react';
import {Form, FormGroup,Label,Input } from 'reactstrap';

const Sort_header = ({result}) => {


 
  return (
    <Form>
        <Label for="numStar">Select</Label>
        <Input type="select" name="select" id="numStar" onChange={result}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </Form>
  );
}

export default Sort_header;


