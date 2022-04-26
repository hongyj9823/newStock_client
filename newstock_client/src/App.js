import React from 'react'
import HeadLogo from './components/HeadLogo.js';
import Footer from './components/Footer.js';
import MyComponent from './components/MyComponent.js';
import { keywords } from './components/keywords.js';
import TreemapChart from './components/TreemapChart.js';
import { Routes, Route } from 'react-router-dom';
import Dailynews from './components/Dailynews.js';
import './App.css';


function App() {

  return (
    <div className = 'Frame'>
      
        <HeadLogo title = "newStock" />

        <Routes>
          <Route path = "/" element = {<MyComponent data = {keywords}/>}></Route>
          <Route path =  "/stock" element = {<TreemapChart/>}></Route>
          <Route path = "/topic" element = {<Dailynews />}></Route>
        </Routes>
        

      <Footer/>
    </div>
  );
}

export default App;
