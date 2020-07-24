import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {data} from '../services/data'

const useStyles = makeStyles({
  links: {
    color: "black",
    borderBottomStyle: "dotted",
    border: "thin",
  }
});
export default function Footer() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link className={classes.links} href={data.website} underline="none">
        {data.firstName + " " + data.lastName}
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}