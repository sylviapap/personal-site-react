import React, { Component } from 'react';
import {data} from '../services/data'

import Typography from '@material-ui/core/Typography';

class About extends Component {
  render() {
    const bio = data.bio;

    return (
      <section id="about">
        <Typography variant="h2" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          {bio}
        </Typography>
      </section>
    );
  }
}

export default About;