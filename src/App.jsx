import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <p className="text-red-500">frew is about to code up in here!</p>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
