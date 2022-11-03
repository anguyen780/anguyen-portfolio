import React from 'react';



export default function Contact() {
  return (
    <div className='contact mt-5'>
      <h1>Contact Me</h1>
      <form className='container mt-5'>
        <div className="form-group mb-3">
          <label>Name</label>
          <input type="text" className="form-control" id="username" placeholder="Enter name"/>
        </div>
        <div className="form-group mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group mb-3">
          <label>Message</label>
          <textarea className="form-control" id="textarea" rows="3" placeholder='Enter message'></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
}
