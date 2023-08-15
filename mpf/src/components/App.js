import '../App.css';
import Contact from './Contact';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
