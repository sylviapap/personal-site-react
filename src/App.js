import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;