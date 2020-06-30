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
    I graduated from the <strong>University of Chicago</strong> in <strong>2017</strong>, having studied philosophy, psychology, economics, and some math. I worked in <strong>Washington, D.C.</strong> as a paralegal, went to the <strong>London School of Economics</strong> for a Master's degree in <strong>International Relations</strong>, and then <strong>Mexico City</strong> to teach. 
    <br></br>
    <br></br>
    Like many, I can trace my love of coding back to learning <strong>HTML</strong> as a kid on Neopets and MySpace, but never thought I could make it a career.
    <br></br>
    <br></br>
    In <strong>2019</strong>, while studying for the LSAT, I realized I enjoyed logic puzzles and proofs more than law. This brought me back to the interest I'd always had in <strong>computer science</strong>, and as I learned more about coding bootcamps, I started to think maybe it wasn't that unrealistic of a switch.
    <br></br>
    <br></br>
    In <strong>January 2020</strong>, I moved back to <strong>San Francisco</strong> to commit to this change, and have been loving it ever since.
    <br></br>
    <br></br>
    Other passions include my dogs, traveling, piano, kickboxing, and attempting to learn programming through <Link className={classes.links} underline="none" href="https://www.instagram.com/p/B-AJtycgYKU/?igshid=12f3s8qalj71s">memes</Link>. 
    </Typography>
    </Paper>
  </div>
  );
}