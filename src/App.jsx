import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  return (
    <>
      <div className="md:block hidden">
        <Navbar />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
