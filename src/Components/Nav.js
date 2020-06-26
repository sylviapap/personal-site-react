import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

class Nav extends Component {
  render() {
    return (
      <nav id="nav-wrap">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
	      <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    );
  }
}

export default Nav;