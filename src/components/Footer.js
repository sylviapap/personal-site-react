import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import {data} from '../services/data'

class Footer extends Component {
  render() {
    return (
      <Typography variant="caption" display="block" gutterBottom>
        <footer>&copy; {data.firstname} {data.lastname} | {new Date().getFullYear()}</footer>
      </Typography>
    );
  }
}

export default Footer;