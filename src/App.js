import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import CourseAbout from "./components/CourseAbout";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/course/:id" element={<CourseAbout></CourseAbout>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
