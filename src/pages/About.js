import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    display: 'flex',

    },
    links: {
      color: "black",
      borderBottomStyle: "dotted",
      border: "thin",
    },
    paper: {
      padding: "8px",
      margin: "8px",
    }
  },
);

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Paper elevation={3} className={classes.paper}>
    <Typography variant="h2" component="h2" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1" gutterBottom>
    I am a recent graduate of <Link className={classes.links} underline="none" href="https://flatironschool.com/" >Flatiron School</Link>'s Full Stack Immersive Software Engineering <Link className={classes.links} underline="none" href="https://flatironschool.com/career-courses/coding-bootcamp/san-francisco">program</Link>, voted #1 Coding Bootcamp by <Link className={classes.links} underline="none" href="https://www.coursereport.com/best-coding-bootcamps">Course Report</Link>.
    <br></br>
    <br></br>
    I graduated from the University of Chicago in 2017, having studied philosophy, psychology, economics, and some math. I worked in Washington, D.C. as a paralegal, went to the London School of Economics for a Master's degree in International Relations, and then Mexico City to teach. 
    <br></br>
    <br></br>
    Like many, I can trace my love of coding back to learning HTML as a kid on Neopets and MySpace, but never thought I could make it a career, or felt like I was too far behind.
    <br></br>
    <br></br>
    But, in late 2019, while studying for the LSAT, I realized I enjoyed logic puzzles and proofs more than law. This brought me back to my long-standing interest in computer science, and as I learned more about coding bootcamps, I started to think maybe it wasn't that unrealistic of a goal.
    <br></br>
    <br></br>
    In January 2020, I moved back to San Francisco to commit to this career change, and have been loving it ever since.
    <br></br>
    <br></br>
    Other passions include my dogs, traveling, playing piano, kickboxing, and attempting to learn programming through <Link className={classes.links} underline="none" href="https://www.instagram.com/p/B-AJtycgYKU/?igshid=12f3s8qalj71s">memes</Link>. 
    </Typography>
    </Paper>
  </div>
  );
}