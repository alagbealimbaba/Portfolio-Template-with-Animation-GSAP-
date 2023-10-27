import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Project from "./Components/Project";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <div className="logo">MY LOGO</div>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/project">
                Project
              </Link>
            </li>
            <li>
              <Link className="link" to="/resume">
                Resume
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
