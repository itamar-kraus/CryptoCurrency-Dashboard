import React, { useState, useEffect } from "react";
import { host, port } from "../../Config/config";

// News Component
// This component fetches and displays cryptocurrency news articles.
// It provides an expand/collapse functionality for each news item.
export const News = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the opened item

  useEffect(() => {
    // Asynchronously fetches news articles from the backend
    const fetchNews = async () => {
      try {
        // Construct the URL for the API request
        const response = await fetch(`https://${host}:${port}/News`);
        if (!response.ok) {
          throw new Error("Failed to fetch news"); // Throw an error if the response is not OK
        }
        const data = await response.json();
        // Transform the fetched data into a more usable format
        const news = [];
        data.forEach((category) => {
          Object.keys(category).forEach((categoryName) => {
            if (categoryName !== "_id") {
              news.push({
                title: categoryName,
                link: null, // Initialize link as null; will be updated if available
              });
            }
            if (Array.isArray(category[categoryName])) {
              // Check if the category contains an array of news items
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

  // Function to toggle the expanded/collapsed state of a news item
  const toggleNewsItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Array of news titles that should not display an expand/collapse arrow
  const noArrowTitles = ["BTC_news", "ETH_news", "Other_news"];

  // Render the news articles
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
