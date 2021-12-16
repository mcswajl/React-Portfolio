import React from 'react';
import coverImage from '../../assets/cover/headshot2.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Josh McSwain</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        I have been employed by Mecklenburg County for over 18 years. 
        I started as GIS analyst prior to being promoted to the Storm Water department 
        to manage the Flood Information and Notification Systems (FINS). 
        BTW, That's my wife in the picture with me, been married since 2004.
        </p>
      </div>
    </section>
  );
}

export default About;
