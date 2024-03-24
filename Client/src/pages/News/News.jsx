// import React, { useState, useEffect } from 'react';

// export const News = () => {
//     const [newsArray, setNewsArray] = useState([]);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const response = await fetch('http://localhost:3000/News');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch news');
//                 }
//                 const data = await response.json();
//                 const news = [];
//                 data.forEach(category => {
//                     Object.keys(category).forEach(categoryName => {
//                         if (categoryName !== "_id") {
//                             news.push({
//                                 title: categoryName,
//                                 link: null
//                             });
//                         }
//                         if (Array.isArray(category[categoryName])) {
//                             category[categoryName].forEach(newsItem => {
//                                 news.push({
//                                     title: newsItem.title,
//                                     link: newsItem.link
//                                 });
//                             });
//                         }
//                     });
//                 });
//                 setNewsArray(news);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchNews();
//     }, []);

//     const renderNews = (text, link) => {
//         return (
//             <div>
//                 <h3 className={link ? "text-xl font-semibold" : "text-xl font-bold text-blue-500"}>
//                     {text}
//                     {link && <a href={link} className="text-blue-500 font-bold">Read More</a>}
//                 </h3>
//             </div>
//         );
//     };

//     return (
//         <div className="tab-content text-center" id="tab-News">
//             <h2 className="text-2xl font-bold mb-4">Get the Latest Crypto News Here</h2>
//             <p className="mb-8">Stay informed with our latest updates and crypto articles.</p>
//             <div id="news-list">
//                 {newsArray.map((newsItem, index) => (
//                     <div key={index}>
//                         {renderNews(newsItem.title, newsItem.link)}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default News;

import React, { useState, useEffect } from "react";

export const News = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the opened item

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3000/News");
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        const news = [];
        data.forEach((category) => {
          Object.keys(category).forEach((categoryName) => {
            if (categoryName !== "_id") {
              news.push({
                title: categoryName,
                link: null,
              });
            }
            if (Array.isArray(category[categoryName])) {
              category[categoryName].forEach((newsItem) => {
                news.push({
                  title: newsItem.title,
                  link: newsItem.link,
                });
              });
            }
          });
        });
        setNewsArray(news);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, []);

  const toggleNewsItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const noArrowTitles = ["BTC_news", "ETH_news", "Other_news"];

  return (
    <div className="tab-content  text-gray-800 dark:text-white">
      <h2 className="center-align text-4xl font-bold mb-4 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-800 via-purple-500 to-purple-800 text-transparent bg-clip-text">
        Crypto News
      </h2>
      <p className="mb-8 text-2xl">
        Stay informed with the latest updates and crypto articles.
      </p>
      <div id="news-list">
        {newsArray.map((newsItem, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleNewsItem(index)}
            >
              <h3
                className={`text-2xl ${
                  noArrowTitles.includes(newsItem.title)
                    ? "text-purple-300"
                    : "text-gray-800 dark:text-white mr-2"
                }`}
              >
                {newsItem.title}
              </h3>
              {/* Only render the SVG arrow if the title does not match the specified no-arrow titles */}
              {!noArrowTitles.includes(newsItem.title) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
            {openIndex === index && newsItem.link && (
              <p className="text-gray-600 text-xl dark:text-white mt-2">
                <a href={newsItem.link} className="text-blue-500">
                  Read More
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
