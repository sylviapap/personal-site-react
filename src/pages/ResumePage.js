import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    paddingTop: "56.25%",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  button: {
    marginTop: "1%",
  }
})

export default function ResumePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Container className={classes.container}>
      <iframe 
        src="Sylvia-Pap-Resume.pdf" 
        title="resume"
        className={classes.iframe}
        >
      </iframe>
    </Container>
      <Button 
        href="Sylvia-Pap-Resume.pdf" 
        variant="contained" 
        color="inherit"
        className={classes.button}
        >
        View Full Screen
      </Button>
    </div>
  );
}