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
    <div className="tab-content font boldtext-gray-800 dark:text-white">
      <div id="contact-header">
        <h1 className="center-align text-4xl font-bold mb-4 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-800 via-purple-500 to-purple-800 text-transparent bg-clip-text">
          Contact Us
        </h1>
      </div>
      <div id="contact-details" className="text-gray-800 dark:text-white">
        <strong className="text-xl sm:text-2xl">Email: </strong>
        <p>info@b1_crypto.com</p>
        <strong className="text-xl sm:text-2xl">Phone: </strong>
        <p>+1 (555) 123-4567</p>
      </div>
      <div class="flex flex-col items-end gap-6 w-96">
        <div class="relative w-full min-w-[200px]">
          <textarea
            placeholder="Your name"
            class="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          ></textarea>
          <label class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Your name
          </label>
        </div>
        <div class="relative w-full min-w-[200px]">
          <textarea
            class="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          ></textarea>
          <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Standard
          </label>
        </div>
        <div class="relative w-full min-w-[200px]">
          <textarea
            class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          ></textarea>
          <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Outlined
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;
//   return (
//     <div className="tab-content font-bold text-gray-800 dark:text-white">
//       <p className="text-xl sm:text-3xl">
//         Have questions or feedback? We'd love to hear from you!
//       </p>
//       <div id="contact-details" className="text-gray-800 dark:text-white">
//         <strong className="text-xl sm:text-2xl">Email: </strong>
//         <p>info@b1_crypto.com</p>
//         <strong className="text-xl sm:text-2xl">Phone: </strong>
//         <p>+1 (555) 123-4567</p>
//       </div>
//         <div className="form-container">
//           <div className="contact-form">
//             <h2 className="headline text-center text-2xl text-gray-800 dark:text-white">
//               Send us a Message
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your Name"
//                 required
//                 className="dark:bg-white dark:text-white dark:border-gray-600"
//               />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your Email"
//                 required
//                 className="dark:bg-white dark:text-white dark:border-gray-600"
//               />
//               <textarea
//                 rows="3"
//                 id="message"
//                 name="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Your Message"
//                 required
//                 className="dark:bg-white dark:text-white dark:border-gray-600"
//               />
//               <button
//                 type="submit"
//                 style={{ border: "1px solid black" }}
//                 className="px-4 py-2 rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default Contact;
