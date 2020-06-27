import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link component={RouterLink} to="/" >
        Home
      </Link>
      <Link component={RouterLink} to="/about" >
        About
      </Link>
      <Link component={RouterLink} to="/projects" >
        Projects
      </Link>
      <Link component={RouterLink} to="/resume" >
        Resume
      </Link>
      <Link component={RouterLink} to="/contact" >
        Contact
      </Link>      
    </div>
    );
  }