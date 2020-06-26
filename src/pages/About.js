import React, { Component } from 'react';
import {resumeData} from '../services/resumeData'

class About extends Component {
  render() {
    const bio = resumeData.bio;

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