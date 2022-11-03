import React from 'react';

const style = {
  about: {
    paddingTop: '90px'
  }
}

export default function About() {
  return (
    <div style={style.about} className='container'>
      <div className='container-fluid '>
      <h1>About Me</h1>
      <p>
        I'm a Full-Stack Web Developer from Chicago, IL looking for a role in the tech field. I am currently attending Northwestern Universities Full-Stack Web Development bootcamp in order to learn and hone the skills I attain. 
      </p>
      </div>
    </div>
  );
}