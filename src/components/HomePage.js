import Panner from "./Panner";
import Courses from "./Courses";
import NavBar from "./NavBar";
function HomePage(props) {
  return (
    <>
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
    </>
  );
}
export default HomePage;
