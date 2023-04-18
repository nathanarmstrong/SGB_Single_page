import "./App.css";
import { Home } from "pages";
import { Nav, Footer } from "components";

function App() {
  return (
    <div className="App">
      {/* NAV */}
      <Nav />
      {/* PAGE */}
      <Home />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
