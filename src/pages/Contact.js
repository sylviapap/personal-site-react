import React from 'react';
import {contactItems} from '../services/data'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-evenly"
  },
  text: {
    margin: "8px"
  }
}));

export default function Contact() {
  const classes = useStyles();
  const items = contactItems

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center" alignContent="center" >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h2" component="h2" gutterBottom>
              Contact Me
            </Typography>
          </Paper>
        </Grid>
        {items.map(item => <Grid item>
          <Paper className={classes.paper}>
            <Link className={classes.paper} href={item.href} color="inherit">
              <Avatar><Icon className={item.icon} /></Avatar>
            <Typography variant="body1" className={classes.text} gutterBottom>  
            {item.text}
            </Typography>
            </Link>
          </Paper>
        </Grid>)}
      </Grid>
    </div>
  );
}