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

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
 
  },
  media: {
    width: 250,
    height: 250,
  },
  skills: {
    fontVariant: "all-small-caps",
    fontSize: "large",
    border: "thin",
    borderStyle: "dotted",
    borderRadius: "5px",
    padding: "5px",
    margin: "auto"
  }
});

export default function Home() {
  const name = data.firstname;
  const description = data.description;
  const profilepic= "images/"+data.image;

  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={12} >
        <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={profilepic}
              title="hi"
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
              {data.skills.map(skill => <span className={classes.skills}>{skill}</span>)}
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
                className={classes.button}
                startIcon={<Icon className={item.icon}/>}
                href={item.href}
              />)}
              
            </CardActions>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
}