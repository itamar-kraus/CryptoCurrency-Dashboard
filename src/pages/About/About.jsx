
export const About = () => {
    const render_paragraph = () => {
        return (
            <p>
                Welcome to B1, your trusted source for comprehensive cryptocurrency insights. At B1, we are committed to providing you with a cutting-edge Cryptocurrency Dashboard that empowers you with real-time and historical data of various cryptocurrencies. Our mission is to simplify the complexities of the cryptocurrency market and offer you a user-friendly platform.
            </p>
        );
    };

    const render_key_features = () => {
        return (
            <div>
                <h2>Key Features:</h2>
                <ul>
                    <li>Real-time Price Tracking: Stay updated with live cryptocurrency prices across the market.</li>
                    <li>Daily Changes: Monitor daily fluctuations and trends in the cryptocurrency market.</li>
                    <li>Interactive Charts: Explore detailed and interactive charts for in-depth analysis.</li>
                    <li>Cryptocurrency Profiles: Dive into comprehensive profiles for a closer look at each digital asset.</li>
                </ul>
            </div>
        );
    };

    const render_ourteam = () => {
        return (
            <div>
                <h2>Our Team:</h2>
                <ul>
                    <li>Alon</li>
                    <li>Itamar</li>
                    <li>Tomer</li>
                    <li>Nadav</li>
                </ul>
            </div>
        );
    };

    return (
        <div id="tab-About" className="tab-content">
            {render_paragraph()}
            {render_key_features()}
            {render_ourteam()}
        </div>
    );
};

export default About;





