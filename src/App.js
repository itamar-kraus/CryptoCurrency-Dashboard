import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
// import { FAQ } from "./pages/FAQ/FAQ";
import FAQ from "./pages/FAQ/FAQ";
import { News } from "./pages/News/News";
import "./app.css";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <BrowserRouter>
      {isStarted ? (
        <div className="App dark:bg-gradient-to-r from-gray-800 to-sky-950 h-screen overflow-y-auto flex flex-col">
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            //   padding: "140px",
            //   gap: "100px",
          }}
          className="h-screen bg-gray-700 flex flex-col items-center p-10 sm:p-28 gap-12 sm:gap-24"
        >
          <h1
            style={{
              // fontSize: "60px",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "'Monospace', 'Courier New', Courier, monospace",
            }}
            className="text-4xl sm:text-6xl font-bold font-mono"
          >
            WELCOME TO B1 PROJECT
          </h1>
          <div className="h-64 w-64 sm:h-96 sm:w-96">
            <img src="/CryptoNice.png" alt="appLogo" />
          </div>
          <button
            className="start-button flex justify-center items-center h-20 w-40 sm:h-96 sm:w-96"
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
