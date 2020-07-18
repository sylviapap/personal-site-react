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
    Nice things about my bootcamp: <Link className={classes.links} underline="none" href="https://flatironschool.com/" >Flatiron School</Link>'s Full Stack Immersive Software Engineering <Link className={classes.links} underline="none" href="https://flatironschool.com/career-courses/coding-bootcamp/san-francisco">program</Link>, voted #1 Coding Bootcamp by <Link className={classes.links} underline="none" href="https://www.coursereport.com/best-coding-bootcamps">Course Report</Link>.
    <br></br>
    <br></br>
    Like many, I can trace my love of coding back to learning <strong>HTML</strong> as a kid on Neopets and MySpace, but never thought I could make it a career.
    <br></br>
    <br></br>
    In <strong>2019</strong>, while studying for the LSAT, I realized I enjoyed logic puzzles and proofs more than law. This brought me back to the interest I'd always had in Boolean algebra and <strong>computer science</strong>.
    </Typography>
    </Paper>
  </div>
  );
}