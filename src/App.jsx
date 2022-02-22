import Home from "./Home";
import Body from "./Body";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav />
      <div className="main-container">
        <Home />
        <Body />
      </div>
    </div>
  );
}

export default App;
