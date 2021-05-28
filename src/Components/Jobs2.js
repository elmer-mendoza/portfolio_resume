import React, { useState} from 'react';
import  { Container,Row,Col } from 'reactstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';
import {jobs} from './data';


function Jobs2() {
   
  const [value, setValue] = useState(0)
  
  const { company, dates, duties, title } = jobs[value]
  return (
    <Container  >
      <Row>
        <Col  >

      <div className="title my-5">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          {company}
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Jobs2
