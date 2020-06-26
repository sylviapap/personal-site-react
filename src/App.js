import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <Footer/> */}
        {/* <About/> */}
        {/* <Contact/> */}
      </div>
      )
    }
}

export default withRouter(App);