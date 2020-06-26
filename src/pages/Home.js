import React, { Component } from 'react';
import {data} from '../services/data'

class Home extends Component {
  render() {
    const name = data.name;
    const description = data.description;
    const profilepic= "images/"+data.image;

    return (
      <section id="home">
         <header>Hi, I'm {name}</header>
         <div className="content">
            <div className="column">
               <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
            </div>
            <div className="column">
               <p>{description}</p>
            </div>
         </div>
      </section>
    );
  }
}

export default Home;