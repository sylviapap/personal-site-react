import React, { Component } from 'react';
import {data} from '../services/data'

class Contact extends Component {
  render() {
    const email = data.email;
    const phone = data.phone;

    return (
      <section id="contact">
        <div className="row">
          <h2>Contact Me</h2>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </section>
    );
  }
}

export default Contact;