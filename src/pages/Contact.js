import React from 'react';
import {data} from '../services/data'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ForumIcon from '@material-ui/icons/Forum';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  }
}));

export default function Contact() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const email = data.email;
  const phone = data.phone;

  return (
    <Typography variant="h2" component="h2" gutterBottom>
      Contact Me
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar >
            <MailIcon/>
          </Avatar>
        </ListItemAvatar>
        <Link href="mailto:sylviapap1@gmail.com" onClick={preventDefault} color="inherit">
          <ListItemText primary={email} />
        </Link>
      </ListItem>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
          <ListItemText primary={phone} />        
      </ListItem>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkedInIcon />
          </Avatar>
        </ListItemAvatar>
        <Link href="https://www.linkedin.com/in/sylvia-pap/" onClick={preventDefault} color="inherit">
          <ListItemText primary="LinkedIn" />
        </Link>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <Link href="https://github.com/sylviapap" onClick={preventDefault} color="inherit">
          <ListItemText primary="GitHub" />
        </Link>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ForumIcon />
          </Avatar>
        </ListItemAvatar>
        <Link href="https://dev.to/sylviapap" onClick={preventDefault} color="inherit">
          <ListItemText primary="Blog" />
        </Link>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TwitterIcon />
          </Avatar>
        </ListItemAvatar>
        <Link href="https://twitter.com/sylviapapdev" onClick={preventDefault} color="inherit">
          <ListItemText primary="Twitter" />
        </Link>
      </ListItem>
    </List>
    </Typography>
  );
}