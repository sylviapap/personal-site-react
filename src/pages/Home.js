import {data, contactItems, blogPosts} from '../services/data'
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
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "65px"
  },
  media: {
    width: "100%",
    height: "100%",
    minHeight: "250px",
    maxWidth: "250px",
  },
  skills: {
    fontVariant: "all-small-caps",
    fontSize: "large",
    border: "thin",
    borderStyle: "dotted",
    borderRadius: "5px",
    padding: "5px",
    margin: "5px 5px 5px 8px"
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
  const profilepic= "images/"+data.image;
  const skills = data.skills
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root}>

{/* Begin main/profile pic card */}
      <Grid item xs={12}>
        <Card>
          {/* Container within the card for flex grid */}
          <Grid container className={classes.root}>
            {/* Profile Picture */}
            <Grid item xs={6}>
              <CardMedia
                className={classes.media}
                image={profilepic}
              />
            </Grid>
            {/* Card title and text */}
            <Grid item xs={6}>
              <CardContent>
                <Typography gutterBottom variant="h2" component="h2">
                  Hi, I'm Sylvia
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Currently a Software Engineer, formerly an aspiring lawyer
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
{/* End main card */}

{/* Begin 'about me' card */}
      <Grid item xs={12} >
        <Card className={classes.root}>
            <CardContent>
              <Typography variant="body2" gutterBottom>
              I've studied <strong>philosophy, psychology, economics, math,</strong> and <strong>international relations</strong>, and I've worked in <strong>finance, law</strong>, and <strong>education</strong>. 
              <br></br>
              <br></br>
              I learned to <strong>code</strong> in 4th grade, making web pages on Neopets with <strong>HTML</strong>. I've investigated many other interests since then, but I realized while studying for the LSAT that I only really enjoyed the logic puzzles section, and was reminded of everything I love about <strong>computer science</strong>. So I moved back to <strong>San Francisco</strong> to pursue Flatiron School's Full Stack Web Development <Link className={classes.links} underline="none" href="https://flatironschool.com/career-courses/coding-bootcamp/san-francisco">immersive</Link>, and can finally say I've found my dream job.
              <br></br>
              <br></br>
              Other passions: dogs, piano, kickboxing, travel, weird food, and <Link className={classes.links} underline="none" href="https://www.instagram.com/p/B-AJtycgYKU/?igshid=12f3s8qalj71s">memes</Link>.
                </Typography>
            </CardContent>
        </Card>
      </Grid> 
{/* End about me */}

{/* Begin skills card */}
      <Grid item xs={6}>
        <Card className={classes.root}>
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
{/* End skills */}

{/* Begin contact items card */}
      <Grid item xs={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Contact Me
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
{/* End contact items */}

      <Grid item xs={12} >
        <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
              Blog Posts
              </Typography>
              <CardActions className={classes.paper}>
              <ul>
              {blogPosts.map(item => <li key={blogPosts.indexOf(item)}>
                <Link
                className={classes.links} 
                underline="none"
                href={item.href}
                >
                  {item.title}
                </Link>
              </li>
              )}
              </ul>
            </CardActions>
            </CardContent>
        </Card>
      </Grid>

    </Grid> // End container
  );
}