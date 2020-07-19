import React from 'react';
import {data} from '../services/data'
import ProjectCard from '../components/ProjectCard'
import Typography from '@material-ui/core/Typography';
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
      <div>
      <Typography variant="h2" component="h2" gutterBottom>
          Projects
      </Typography>
      <Grid container spacing={1} className={classes.root}>
        {projects.map(project => 
        <Grid item sm={4} key={projects.indexOf(project)}>
          <ProjectCard project={project} />
        </Grid>)}
      </Grid>
      </div>
  );
}