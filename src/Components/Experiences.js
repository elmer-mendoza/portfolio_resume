import React, { useState} from 'react';
import  { Container,Row,Col } from 'reactstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';
import {jobs} from './data';


const JobInfo =(props) =>{
  const { company, dates, duties, title } = props.jobs[props.value]
  return (
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
  )
}


function Experiences() {
    const [value, setValue] = useState(0)
    return (
      <Container >
          <Row>
            <Col  >
              <div className="title my-5">
                <h2>experience</h2>
                <div className="underline"></div>
              </div>
              <div className="jobs-center">
                  {/* btn container */}
                  <div className="btn-container">
                        {jobs.map((job, index) => {
                          return (
                              <button
                                key={job.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`} >
                                {job.company}
                              </button>
                          )
                        })}
                  </div>
                  <JobInfo  jobs={jobs} value={value}/>
               </div>
            </Col>
          </Row>
      </Container>
    )
}

export default Experiences
