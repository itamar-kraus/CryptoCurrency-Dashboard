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
        setName("");
        setEmail("");
        setMessage("");
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
    <div className="tab-content font boldtext-gray-800 dark:text-white">
      <div id="contact-header">
        <h1 className="center-align text-4xl font-bold mb-4 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-800 via-purple-500 to-purple-800 text-transparent bg-clip-text">
          Contact Us
        </h1>
      </div>
      <div id="contact-details" className="text-gray-800 dark:text-white mb-4">
        {/* <strong className="text-xl sm:text-2xl">Email: </strong> */}
        <div className="flex items-center text-xl sm:text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          Email
        </div>
        <p>info@b1_crypto.com</p>
        <div className="flex items-center text-xl sm:text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          Phone
        </div>
        <p>+972 (55) 123-4567</p>
      </div>
      <div class="flex flex-col items-end gap-6 w-96 ml-2">
        <form onSubmit={handleSubmit} class="w-full">
          <div class="relative w-full min-w-[200px] mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              class="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label class="pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all">
              {/* Decorative label */}
            </label>
          </div>
          <div class="relative w-full min-w-[200px] mb-7">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
              class="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all">
              {/* Decorative label */}
            </label>
          </div>
          <div class="relative w-full min-w-[200px] mb-4">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
              class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            ></textarea>
            <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all">
              {/* Decorative label */}
            </label>
          </div>
          <button
            type="submit"
            class="px-4 py-2 rounded transition-all hover:bg-blue-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-gray-400 focus:ring-opacity-50 border border-blue-gray-200 bg-transparent font-sans text-sm font-normal text-blue-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
