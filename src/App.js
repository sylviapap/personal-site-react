import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer/>
      </div>
      )
    }
}

export default withRouter(App);