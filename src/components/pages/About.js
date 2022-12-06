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
        I am a Full-Stack Web Developer from Chicago, IL. I recently earned a certificate in Full-Stack Web Development from Northwestern University's coding bootcamp. Some skills attained while attending this bootcamp include HTML, CSS, JavaScript, React.js and many more. Please head over to the portfolio page to see some of my projects!
      </p>
      </div>
    </div>
  );
}