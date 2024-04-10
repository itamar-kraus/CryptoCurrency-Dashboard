import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import { News } from "./pages/News/News";
import "./app.css";

function App() {
  const [isStarted, setIsStarted] = useState(false); // State to track whether the app has been started

  return (
    <BrowserRouter>
      {isStarted ? (
        // Main application content
        <div className="App dark:bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-950 via-neutral-900 to-zinc-950 h-screen overflow-y-auto flex flex-col">
          <Header />
          <div className="p-4 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </div>
      ) : (
        // Welcome screen content
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="min-h-screen  bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-950 via-neutral-900 to-zinc-950 flex flex-col items-center p-10 sm:p-28 gap-12 sm:gap-24"
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: "normal",
            }}
            className="text-4xl sm:text-6xl mb-4 bg-purple-300 inline-block text-transparent bg-clip-text"
          >
            WELCOME TO B1 PROJECT
          </h1>
          <div className="logo h-64 w-64 sm:h-96 sm:w-96">
            <img src="/CryptoNice.png" alt="appLogo" />
          </div>
          <button
            className="start-button flex justify-center items-center h-20 w-40 sm:w-96"
            onClick={() => setIsStarted(true)}
          >
            Get started
          </button>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
