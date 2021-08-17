import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
require("dotenv").config();

export default function Contact() {
  
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    console.log(process.env);
  }

  return (
    <div onSubmit={sendEmail} className="contact" id="contact">
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Your message has been succesfully sent</span>}
        </form>
      </div>
      </div>
  );
}
