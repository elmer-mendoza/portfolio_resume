import React from 'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Experiences from './Components/Experiences';
import Reviews from './Components/Reviews';
import Skills from './Components/Skills';
import {Provider} from 'react-redux';
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <Nav/>
        <Hero/>
        <Projects/>
        <Skills/>
        <Experiences/>
        <Reviews/>
    </Provider>
    
  );
}

export default App;
