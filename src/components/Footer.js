import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
  render() {
    return (
      <Typography variant="caption" display="block" gutterBottom>
        <footer>&copy; Sylvia Pap | {new Date().getFullYear()}</footer>
      </Typography>
    );
  }
}

export default Footer;