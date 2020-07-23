import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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
      <Link color="inherit" href="https://sylviapap.com/">
        Sylvia Pap
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}