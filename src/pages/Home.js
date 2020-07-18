import {data, contactItems} from '../services/data'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  row: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center"
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center"
  },
  media: {
    width: "100%",
    height: "100%",
  },
  skills: {
    fontVariant: "all-small-caps",
    fontSize: "large",
    border: "thin",
    borderStyle: "dotted",
    borderRadius: "5px",
    padding: "5px",
    margin: "5px"
  },
  items: {
    margin: "5px 5px 5px 8px",
    padding: "5px"  
  },
  links: {
    color: "black",
    borderBottomStyle: "dotted",
    border: "thin",
  },
});

export default function Home() {
  const name = data.firstname;
  const profilepic= "images/"+data.image;
  const skills = data.skills

  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={12}>
        <Card>
          <Grid container spacing={1} className={classes.root}>
          <Grid item xs={6}>
            <CardMedia
              className={classes.media}
              image={profilepic}
            /></Grid>
            <Grid item xs={6}>
            <CardContent>
              <Typography gutterBottom variant="h2" component="h2">
                Hi, I'm {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                I am a Software Engineer and recent graduate of Flatiron School's Full Stack Web Development <Link className={classes.links} underline="none" href="https://flatironschool.com/career-courses/coding-bootcamp/san-francisco">program</Link>.
                </Typography>
            </CardContent>
            </Grid>
            </Grid>
        </Card>
      </Grid>

      <Grid item xs={12} >
        <Card className={classes.root}>
            <CardContent>
              <Typography variant="body2" gutterBottom>
              Previously, I studied <strong>philosophy, psychology, economics</strong>, and some <strong>math</strong>. I worked as a paralegal, got a degree in <strong>International Relations</strong>, and tutored high school students in <strong>Mexico City</strong>. 
              <br></br>
              <br></br>
              I've always been interested in <strong>computer science</strong>, and when I learned more about bootcamps, I decided to make the switch. I moved back to <strong>San Francisco</strong> to pursue it full time, and have been loving it ever since.
              <br></br>
              <br></br>
              Other passions include my dogs, piano, kickboxing, and attempting to learn programming through <Link className={classes.links} underline="none" href="https://www.instagram.com/p/B-AJtycgYKU/?igshid=12f3s8qalj71s">memes</Link>.
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
              {skills.map(skill => <span key={skills.indexOf(skill)} className={classes.skills}>{skill}</span>)}
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
              {contactItems.map(item => <Button
                variant="contained"
                className={classes.items}
                startIcon={<Icon className={item.icon}/>}
                href={item.href}
                key={contactItems.indexOf(item)}
                aria-label={item.text}
              />)}
              
            </CardActions>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
}