import { Header } from "./Header/Header";
import { Home } from "./Home/Home";

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
