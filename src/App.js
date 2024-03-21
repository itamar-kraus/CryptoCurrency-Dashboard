import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { FAQ } from "./pages/FAQ/FAQ";
import { News } from "./pages/News/News";
import "./app.css";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <BrowserRouter>
      {isStarted ? (
        <div className="App dark:bg-gray-700 h-screen overflow-y-auto flex flex-col">
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
          className="h-screen bg-gray-700"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "140px",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "'Monospace', 'Courier New', Courier, monospace",
            }}
          >
            WELCOME TO B1 PROJECT
          </h1>
          <div className="h-96 w-96">
            <img src="/CryptoNice.png" alt="appLogo" />
          </div>
          <button className="start-button" onClick={() => setIsStarted(true)}>
            Get started
          </button>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
