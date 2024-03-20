import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { FAQ } from "./FAQ/FAQ";
import { News } from "./News/News";

function App() {
  return (
    <BrowserRouter > 
      <div className="App dark:bg-gray-700">
        <Header />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

