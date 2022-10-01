import "./App.css";
import CourseContainer from "./components/CourseContainer";

function App() {
  return (
    <div className="App">
      <main>
        <CourseContainer
          header={"Expand your career opportunities with Python"}
          details={
            "Take one of Udemy`s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike..."
          }
          explore={"Python"}
        ></CourseContainer>
      </main>
    </div>
  );
}

export default App;
