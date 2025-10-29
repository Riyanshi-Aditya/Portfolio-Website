import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import FadeInSection from "./FadeInSection";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_evbcs7a", // ✅ Your Service ID
        "template_q6ey1i9", // ✅ Your Template ID
        form.current,
        "_5ZT7ECizTgzHR-L3" // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          if (form.current) form.current.reset(); // ✅ safe check
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-title">/ contact-me</span>
      </div>

      <FadeInSection>
        <div className="contact-container">
          <h2 className="contact-heading">Let's Connect ✉️</h2>
          <p className="contact-subtext">
            Have a question, idea, or collaboration in mind? Drop me a message
            below — I’ll get back to you soon.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Message subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
            <p id="status">{status}</p>
          </form>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
