import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import CourseAboutPage from "./components/CourseAboutPage";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/:category/:id"
          element={<CourseAboutPage></CourseAboutPage>}
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      <footer>
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
}

export default App;
