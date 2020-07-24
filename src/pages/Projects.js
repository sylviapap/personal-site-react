import React from 'react';
import {data} from '../services/data'
import ProjectCard from '../components/ProjectCard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexGrow: 1,
  }
});

export default function Projects() {
  const projects = data.projects;
  const classes = useStyles();
    return (
      <Grid container spacing={1} className={classes.root}>
        {projects.map(project => 
        <Grid item sm={4} key={projects.indexOf(project)}>
          <ProjectCard project={project} />
        </Grid>)}
      </Grid>
  );
}