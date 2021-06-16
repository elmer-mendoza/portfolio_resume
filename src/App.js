import React from 'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Jobs2 from './Components/Jobs2';
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
      <Jobs2/>
      <Reviews/>
    </Provider>
  );
}

export default App;
