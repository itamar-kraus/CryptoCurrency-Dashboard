// import React from "react";
import React, { useState } from "react";
import "./FAQ.css";

const faqArray = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of services including real-time and historical data of various cryptocurrencies, News, and more.",
  },
  {
    question: "Can I contact customer support?",
    answer:
      "You can reach our customer support team by sending us a message. See more at 'Contact'.",
  },
  {
    question: "How often is the cryptocurrency data updated?",
    answer:
      "Our cryptocurrency data is updated in real-time to ensure you have the latest information.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes, our mobile app is available on both iOS and Android platforms, providing full access to our dashboard on the go.",
  },
  {
    question: "Can I track my portfolio with your service?",
    answer:
      "Absolutely! Our platform allows you to track your cryptocurrency portfolio and monitor its performance over time.",
  },
  {
    question: "How can I learn more about cryptocurrency?",
    answer:
      "We offer a variety of educational resources, including articles, tutorials, and webinars, to help you understand the cryptocurrency market.",
  },
  {
    question: "Are there any fees associated with your service?",
    answer:
      "Our basic service is free, but we offer premium features that are accessible through a subscription model.",
  },
];

// export const FAQ = () => {
//   const renderFAQ = (question, answer) => {
//     return (
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
//           {question}
//         </h3>
//         <p className="text-gray-800 dark:text-white">{answer}</p>
//       </div>
//     );
//   };

//   return (
//     <div className="tab-content text-center text-gray-800 dark:text-white">
//       <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
//       <p className="mb-8">
//         Find answers to common questions about our products and services.
//       </p>
//       <div id="faq-list">
//         {faqArray.map((faqItem, index) => (
//           <div key={index} className="text-gray-800 dark:text-white">
//             {renderFAQ(faqItem.question, faqItem.answer)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-start items-center" onClick={toggleFAQ}>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mr-2">
          {question}
        </h3>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && <p className="text-gray-600 dark:text-white mt-2">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="tab-content  text-gray-800 dark:text-white">
      <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-pink-700 to-indigo-400 inline-block text-transparent bg-clip-text">
        Your Questions
      </h2>
      <p className="mb-8 text-2xl">
        Find answers to common questions about our products and services.
      </p>
      <div id="faq-list">
        {faqArray.map((faqItem, index) => (
          <FAQItem
            key={index}
            question={faqItem.question}
            answer={faqItem.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;