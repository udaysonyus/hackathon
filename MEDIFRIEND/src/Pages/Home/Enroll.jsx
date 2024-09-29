import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Enrolls() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm("service_8btw2ui", "template_hg03n4i", form.current, "vRhkTXXLiujrV0FLE")
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error);
      }).then(alert("EMAIL SENT"));
  };

  return (
    <section id="Enrolls" className="contact--section">
      <div>
        <h2>Enroll</h2>
        <p className="text-lg">
        </p>
      </div>
      <form className="contact--form--container" ref={form}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Age</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Salary</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Comorbidities</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" onClick={(e) => sendEmail(e)}>Submit</button>
        </div>
      </form>
    </section>
  );
}



