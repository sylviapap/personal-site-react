import {data} from '../services/data'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: "100%"
  },
  media: {
    height: 250,
    width: 250
  },
});

export default function Home() {
  const name = data.firstname;
  const description = data.description;
  const profilepic= "images/"+data.image;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={profilepic}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="h2">
          Hi, I'm {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          I'm a {description}
        </Typography>
      </CardContent>
    </Card>
  );
}