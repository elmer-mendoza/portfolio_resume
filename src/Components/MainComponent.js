import React,{useEffect} from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import Experiences from './Experiences';
import Education from './Education';
import Reviews from './Reviews';
import Skills from './Skills';
import { connect } from 'react-redux';
import {fetchData} from "../redux/ActionsCreator"


const mapStateToProps = state => {
   return {
      data : state.data
   } 
}

const mapDispatchToProps = {
     fetchData
}

function App(props) {
   useEffect(() => {
         props.fetchData();
 },[]);
  console.log(props.data.data[0].projects)
  return (
    <>
        <Nav/>
        <Hero />
        <Projects projects={props.data.data[0].projects} isLoading={props.data.isLoading}/>
         <Skills />
        <Experiences />
        <Education />
        <Reviews/>
    </>
    
    );
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);;