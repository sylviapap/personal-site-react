import React, { Component } from 'react';
import {data} from '../services/data'

class Contact extends Component {
  render() {
    const email = data.email;

    return (
      <section id="contact">
        <div className="row">
          <h2>Contact Me</h2>
          <p>{email}</p>
        </div>
      </section>
    );
  }
}

export default Contact;