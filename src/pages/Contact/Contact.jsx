import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onClickSendMessage = async () => {
    console.log(name, email, message);

    try {
      const response = await axios.post("http://localhost:3000/CryptoInfo", {
        name,
        email,
        message,
      });

      if (response.status >= 200 && response.status < 300) {
        console.log(response.data.message); // Log the response message from the server
        alert(`${name}, thank you for sending us a message!`);
      } else {
        console.error("Failed to insert data into the database");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const validateForm = () => {
    return name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    onClickSendMessage();
  };

  return (
    <div className="tab-content">
      <p>Have questions or feedback? We'd love to hear from you!</p>
      <div id="contact-details">
        <strong>Email: </strong>
        <p>info@b1_crypto.com</p>
        <strong>Phone: </strong>
        <p>+1 (555) 123-4567</p>
      </div>
      <div className="form-container">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Your Message:</label>
            <textarea
              rows="3"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              style={{ border: "1px solid black" }}
              className="px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
