import React, { Component } from 'react';
import {data} from '../services/data'

import Typography from '@material-ui/core/Typography';

class Projects extends Component {
  render() {
    const projects = data.projects;

    return (
      <section id="projects">
        <Typography variant="h2" component="h2" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1" gutterBottom>
          {}
        </Typography>
      </section>
    );
  }
}

export default Projects;