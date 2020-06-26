import React, { Component } from 'react';
import {resumeData} from '../services/resumeData'

class About extends Component {
  render() {
    const name = resumeData.name;
    const profilepic= "images/"+resumeData.image;
    const bio = resumeData.bio;
    const street = resumeData.address.street;
    const city = resumeData.address.city;
    const state = resumeData.address.state;
    const zip = resumeData.address.zip;
    const phone= resumeData.phone;
    const email = resumeData.email;
    const resumeDownload = resumeData.resumedownload;
    return (
      <section id="about">
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
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;