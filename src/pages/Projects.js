import React, { Component } from 'react';
import {data} from '../services/data'
import ProjectCard from '../components/ProjectCard'

import Typography from '@material-ui/core/Typography';

class Projects extends Component {
  render() {
    const projects = data.projects;

    return (
      <section id="projects">
        <Typography variant="h2" component="h2" gutterBottom>
          Projects
        </Typography>
        {projects.map(project => <ProjectCard key={projects.indexOf(project)} project={project} />)}
      </section>
    );
  }
}

export default Projects;