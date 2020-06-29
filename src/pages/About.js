import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Paper elevation={3}>
    <Typography variant="h2" component="h2" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1" gutterBottom>
    I am a recent graduate of <Link href="https://flatironschool.com/">Flatiron School</Link>'s Full Stack Immersive Software Engineering <Link href="https://flatironschool.com/career-courses/coding-bootcamp/san-francisco">program</Link>, voted #1 Coding Bootcamp by <Link href="https://www.coursereport.com/best-coding-bootcamps">Course Report</Link>.
    <br></br>
    <br></br>
    In college, I studied philosophy, psychology, economics, and some math. I worked in Washington, D.C. as a paralegal, went to London for a master's degree in International Relations, and then Mexico City to teach. I thought I'd apply to law school, but realized while studying for the LSAT that I missed logic puzzles and proofs, which brought me back to computer science.
    <br></br>
    <br></br>
    When not coding, you can find me with my dogs, traveling, playing piano, kickboxing, and/or attempting to learn about coding through <Link href="https://www.instagram.com/p/B-AJtycgYKU/?igshid=12f3s8qalj71s">memes</Link>. 
    </Typography>
    </Paper>
  </div>
  );
}