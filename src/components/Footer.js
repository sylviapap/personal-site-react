import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
  render() {
    return (
      <Typography variant="caption" display="block" gutterBottom>
        <footer>&copy; Sylvia Pap | 2020</footer>
      </Typography>
    );
  }
}

export default Footer;