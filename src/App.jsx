import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#01322c]">
      <NavBar />
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
