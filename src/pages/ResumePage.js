import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
  }
})

export default function ResumePage() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <iframe 
      src="resume.pdf" 
      width="100%" 
      height="600" 
      title="resume">
    </iframe>
    <CardActions>
      <Button href="resume.pdf" variant="contained" color="inherit">Open in separate window</Button>
    </CardActions>
    </Card>
  );
}