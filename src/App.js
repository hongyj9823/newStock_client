import React from 'react'
import HeadLogo from './components/HeadLogo.js';
import Footer from './components/Footer.js';
// import News from './components/News.js';
import TreemapChart from './components/TreemapChart.js';
import './App.css';


function App() {
  return (
    <div className = 'Frame'>
      <HeadLogo title = "newStock" />
      <TreemapChart/>
      <Footer/>
    </div>
  );
}

export default App;
