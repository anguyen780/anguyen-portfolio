import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email"){
      setEmail(inputValue)
    } else if (inputType === "userName"){
      setUserName(inputValue)
    } else if (inputType === "message"){
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setErrorMessage("Please enter a valid email")
      return;
    } else if (!userName){
      setErrorMessage("Please enter your name")
      return;
    } else if (!message){
      setErrorMessage("Please enter a message")
      return;
    }

    if(validateEmail(email) && userName && message){
      setTimeout(() => {
        setErrorMessage("Thank You");
      }, "1000") 
    }

    setEmail("");
    setUserName("");
    setMessage("");

  }

  return (
    <div className='contact mt-5'> 
      <h1>Contact Me</h1>
      <form className='container mt-5'>
        <div className="form-group mb-3">
          <label htmlFor="Name" >Name</label>
          <input type="text" className="form-control" name="userName" placeholder="Enter name" value={userName}
          onChange={handleChange}/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" >Email address</label>
          <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email"
          value={email}
          onChange={handleChange}/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor='Message'>Message</label>
          <textarea className="form-control" name="message" rows="3" placeholder='Enter message' 
          value={message}
          onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-dark" onClick={handleFormSubmit}>Submit</button>
        <div className='pt-5'>
          <p>{errorMessage}</p>
        </div>
      </form>
    </div>
  );
}
