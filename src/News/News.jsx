import React, { useState, useEffect } from 'react';

export const News = () => {
    const [newsArray, setNewsArray] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:3000/News');
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                const news = [];
                data.forEach(category => {
                    Object.keys(category).forEach(categoryName => {
                        if (categoryName !== "_id") {
                            news.push({
                                title: categoryName,
                                link: null
                            });
                        }
                        if (Array.isArray(category[categoryName])) {
                            category[categoryName].forEach(newsItem => {
                                news.push({
                                    title: newsItem.title,
                                    link: newsItem.link
                                });
                            });
                        }
                    });
                });
                setNewsArray(news);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchNews();
    }, []);

    const renderNews = (text, link) => {
        return (
            <div>
                <h3 className={link ? "text-xl font-semibold" : "text-xl font-bold text-blue-500"}>
                    {text}
                    {link && <a href={link} className="text-blue-500 font-bold">Read More</a>}
                </h3>
            </div>
        );
    };

    return (
        <div className="tab-content text-center" id="tab-News">
            <h2 className="text-2xl font-bold mb-4">Get the Latest Crypto News Here</h2>
            <p className="mb-8">Stay informed with our latest updates and crypto articles.</p>
            <div id="news-list">
                {newsArray.map((newsItem, index) => (
                    <div key={index}>
                        {renderNews(newsItem.title, newsItem.link)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;





