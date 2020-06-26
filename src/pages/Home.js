import React, { Component } from 'react';
import {data} from '../services/data'

class Home extends Component {
  render() {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const bio = data.bio;
    const profilepic= "images/"+data.image;

    return (
      <section id="home">
         <header>Hi, I'm {name}</header>
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
						   <span>{phone}</span><br />
                     <span>{email}</span>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Home;