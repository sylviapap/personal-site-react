import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Link component={RouterLink} to="/"
          variant="body2" color="inherit">
          Home
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link component={RouterLink} to="/about"
          variant="body2" color="inherit">
          About
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link component={RouterLink} to="/projects"
          variant="body2" color="inherit">
          Projects
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link component={RouterLink} to="/resume"
          variant="body2" color="inherit">
          Resume
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link component={RouterLink} to="/contact"
          variant="body2" color="inherit">
          Contact
          </Link> 
        </Grid>
      </Grid>     
    </div>
    );
  }