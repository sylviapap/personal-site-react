import React, {Component, Fragment} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
// import SimpleTabs from './components/TabPanel';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              <Nav />
              {/* <SimpleTabs /> */}
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Footer/>
            </Typography>
          </Box>
        </Container>
      </Fragment>
      )
    }
}

export default App;