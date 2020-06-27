import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
      <nav className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={2.5}>
            <NavLink to="/">Home</NavLink>
          </Grid>
          <Grid item xs={2.5}>
            <NavLink to="/about">About</NavLink>
          </Grid>
          <Grid item xs={2.5}>
            <NavLink to="/projects">Projects</NavLink>
          </Grid>
          <Grid item xs={2.5}>
            <NavLink to="/resume">Resume</NavLink>
          </Grid>
          <Grid item xs={2.5}>
            <NavLink to="/contact">Contact</NavLink>
          </Grid>
        </Grid>        
      </nav>
    );
  }