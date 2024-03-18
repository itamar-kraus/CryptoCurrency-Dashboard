import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { FAQ } from "./FAQ/FAQ";
import { News } from "./News/News";


function App() {
  return (
    <div className="App" style={{ backgroundColor: "#222831" }}>
      <Header />
      <div className="p-4">
        <h1
          id="tab_title"
          className="text-3xl border-b-[10px] border-indigo-500"
          style={{ borderBottom: "10px solid #FFD369" }}
        >
          Home
        </h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
