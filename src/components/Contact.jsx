import React, { useEffect} from "react";
import "./Contact.css";
function Contact({ nameProp, emailId, about }) {

  useEffect(() => {
    const interval = setInterval(() => {
      let str = document.querySelector(".contact__description").textContent;
      if (str) {
        document.querySelector(".contact__description").innerHTML = str
          .split(",")
          .join(", <br/>");
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return (
    <div className="contact">
      <h1 className="section__header">Get in touch</h1>
      <p className="contact__description">{about?.getInTouchDescription}</p>
      <div className="contact__buttons">
        <a href={`mailto:${emailId}`}><i className="fas fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/sherilynkoshy/"><i className="fab fa-linkedin"></i></a>
        
        </div>
    </div>
  );
}

export default Contact;
