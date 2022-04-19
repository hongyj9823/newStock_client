import React from 'react'
import HeadLogo from './components/HeadLogo.js';
import Footer from './components/Footer.js';
import MyComponent from './components/MyComponent.js';
import { keywords } from './components/keywords.js';
import TreemapChart from './components/TreemapChart.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <div className = 'Frame'>
      <Router>
        <HeadLogo title = "newStock" />        
        <Routes>
          <Route path = "/" element = {<MyComponent data = {keywords}/>}></Route>
          <Route path =  "/stock" element = {<TreemapChart/>}></Route>
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
