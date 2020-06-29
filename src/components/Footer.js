import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Footer() {
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