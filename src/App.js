import React from 'react'
import HeadLogo from './components/HeadLogo.js';
import Footer from './components/Footer.js';
import News from './components/News.js';
import './App.css';


function App() {
  return (
    <div class = 'Frame'>
      <HeadLogo title = "newStock" />

      <Footer/>
    </div>
  );
}

export default App;
