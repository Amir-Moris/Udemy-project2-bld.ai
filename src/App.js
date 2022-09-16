import "./App.css";

import NavBar from "./components/NavBar";
import Panner from "./components/Panner";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        <Panner></Panner>
        <Courses></Courses>
      </main>

      <footer>
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
}

export default App;
