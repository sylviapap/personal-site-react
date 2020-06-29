import React from 'react';
import {data} from '../services/data'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ForumIcon from '@material-ui/icons/Forum';
import TwitterIcon from '@material-ui/icons/Twitter';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
}));

export default function Contact() {
  const classes = useStyles();
  const email = data.email;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={11}>
          <Paper className={classes.paper}>
            <Typography variant="h2" component="h2" gutterBottom>
              Contact Me
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Link href="mailto:sylviapap1@gmail.com" color="inherit">
            <Avatar >
              <MailIcon/>
            </Avatar>
            {email}
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Link href={data.linkedin} color="inherit">
              <Avatar>
              <LinkedInIcon /> 
              </Avatar>
              LinkedIn
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <Link href={data.github} color="inherit">
            <Avatar>
              <GitHubIcon />
            </Avatar>
            GitHub
          </Link>
        </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <Link href={data.blog} color="inherit">
            <Avatar>
              <ForumIcon />
            </Avatar>
            Blog
          </Link>
        </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <Link href={data.twitter} color="inherit">
            <Avatar>
              <TwitterIcon />
            </Avatar>
            Twitter
          </Link>
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
}