import React, { Component } from 'react';
import {data} from '../services/data'

import Typography from '@material-ui/core/Typography';

class Contact extends Component {
  render() {
    const email = data.email;
    const phone = data.phone;

    return (
      <section id="contact">
        <Typography variant="h2" component="h2" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          {email}<br></br>
          {phone}
        </Typography>
      </section>
    );
  }
}

export default Contact;