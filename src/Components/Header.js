import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {resumeData} from '../services/resumeData'

class Header extends Component {
  render() {
    const name = resumeData.name;

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

export default Header;