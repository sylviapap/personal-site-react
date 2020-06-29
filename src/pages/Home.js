import {data} from '../services/data'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ForumIcon from '@material-ui/icons/Forum';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
    flexWrap: "wrap"
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"  
  },
  media: {
    height: 250,
    width: 250
  }
});

export default function Home() {
  const name = data.firstname;
  const description = data.description;
  const profilepic= "images/"+data.image;

  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={12}>
      <Card className={classes.paper}>
        <CardMedia
          className={classes.media}
          image={profilepic}
          title="me"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            Hi, I'm {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
      </Grid>

      <Grid item xs={6}>
        <Card className={classes.paper}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Technical Skills
            </Typography>
            <CardActions className={classes.paper}>
            <Button variant="outlined" disabled>Ruby</Button>
            <Button variant="outlined" disabled>Rails</Button>
            <Button variant="outlined" disabled>JavaScript</Button>
            <Button variant="outlined" disabled>React</Button>
            <Button variant="outlined" disabled>Redux</Button>
            <Button variant="outlined" disabled>Python</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card className={classes.paper}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Find Me On
            </Typography>
            <CardActions className={classes.paper}>
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<GitHubIcon />}
                href={data.github}
              >
                GitHub
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<LinkedInIcon />}
                href={data.linkedin}
              >
                Linkedin
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<TwitterIcon />}
                href={data.twitter}
              >
                Twitter
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<ForumIcon />}
                href={data.blog}
              >
                Dev.To
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
}