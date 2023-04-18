import "./App.css";
import { Home } from "pages";
import { Nav } from "components";

function App() {
  return (
    <div className="App">
      {/* NAV */}
      <Nav />
      {/* PAGE */}
      <Home />

      {/* FOOTER */}
    </div>
  );
}

export default App;
