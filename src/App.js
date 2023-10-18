import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Info from './components/Info';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Info/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
