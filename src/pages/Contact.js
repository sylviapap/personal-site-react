import React, { Component } from 'react';
import {resumeData} from '../services/resumeData'

class Contact extends Component {
  render() {
    const email = resumeData.email;

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