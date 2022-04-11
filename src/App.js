import React from 'react'
import HeadLogo from './components/HeadLogo.js';
import Footer from './components/Footer.js';
import MyComponent from './components/MyComponent.js';
import { keyword } from './components/keyword.js';
// import TreemapChart from './components/TreemapChart.js';
import './App.css';


function App() {

  return (
    <div className = 'Frame'>
      <HeadLogo title = "newStock" />
      {/* <TreemapChart/> */}
      <MyComponent data = {keyword} />
      <Footer/>
    </div>
  );
}

export default App;
