import React, { Component } from 'react';
import {resumeData} from '../services/resumeData'

class Home extends Component {
  render() {
    const name = resumeData.name;
    const email = resumeData.email;
    const phone = resumeData.phone;
    const bio = resumeData.bio;
    const profilepic= "images/"+resumeData.image;

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