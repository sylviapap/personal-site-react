import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Nav = () => {
    return (
      <div className="nav">
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
      </div>
    );
  }

export default Nav