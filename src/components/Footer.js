// import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
// import {data} from '../services/data'

// class Footer extends Component {
//   render() {
//     return (
//       <Typography variant="caption" display="block" gutterBottom>
//         <footer>&copy; {data.firstname} {data.lastname} | {new Date().getFullYear()}</footer>
//       </Typography>
//     );
//   }
// }

// export default Footer;

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
      {'.'}
    </Typography>
  );
}