import React, { Component } from 'react';
import {data} from '../services/data'

import Typography from '@material-ui/core/Typography';

class Home extends Component {
  render() {
    const name = data.firstname;
    const description = data.description;
    const profilepic= "images/"+data.image;

    return (
      <section id="home">
         <Typography variant="h1" component="h2" gutterBottom>
            Hi, I'm {name}
         </Typography>
         <Typography variant="h5" gutterBottom>
            {description}
         </Typography>
         <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
      </section>
    );
  }
}

export default Home;