import React from 'react';

const faqArray = [
    {
        question: "What services do you offer?",
        answer: "We provide a range of services including real-time and historical data of various cryptocurrencies, News and more."
    },
    {
        question: "Can I contact customer support?",
        answer: "You can reach our customer support team by sending us a message. See more at 'Contact'."
    }
];

export const FAQ = () => {

    const renderFAQ = (question, answer) => {
        return (
            <div>
                <h3 className="text-xl font-semibold">{question}</h3>
                <p>{answer}</p>
            </div>
        );
    };

    return (
        <div className="tab-content text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="mb-8">Find answers to common questions about our products and services.</p>
            <div id="faq-list">
                {faqArray.map((faqItem, index) => (
                    <div key={index}>
                        {renderFAQ(faqItem.question, faqItem.answer)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;





