import React, { Component } from 'react';
import {data} from '../services/data'

class About extends Component {
  render() {
    const bio = data.bio;

    return (
      <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
         </div>
      </div>
      </section>
    );
  }
}

export default About;