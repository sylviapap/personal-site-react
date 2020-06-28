import React, { Component } from 'react';
import {data} from '../services/data'

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class About extends Component {
  render() {
    const bio = data.bio;

    return (
      <section id="about">
        <Typography variant="h2" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" gutterBottom>
        I am a recent graduate of <Link href="https://flatironschool.com/">Flatiron School</Link>'s Full Stack Immersive Software Engineering <Link href="https://flatironschool.com/career-courses/coding-bootcamp/san-francisco">program</Link>, voted #1 Coding Bootcamp by <Link href="https://www.coursereport.com/best-coding-bootcamps">Course Report</Link>.
        <br></br>
        When not coding, you can find me with my dogs, eating weird foods, traveling, playing piano, kickboxing, and/or attempting to learn more about coding through <Link href="https://www.instagram.com/p/B-AJtycgYKU/?igshid=12f3s8qalj71s">memes</Link>. 
        </Typography>
      </section>
    );
  }
}

export default About;