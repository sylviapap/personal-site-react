import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import ResumePage from './pages/ResumePage';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: "100%"
  },
  footer: {
    padding: "2%",
    marginTop: 'auto',
    marginLeft: 'auto',
  }
})

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />      
      <Container className={classes.root}>
        <Box my={5}>
          <Nav />
        </Box>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={ResumePage} />
        <footer className={classes.footer}>
          <Footer/>
        </footer>
      </Container>
    </div>
  )
}