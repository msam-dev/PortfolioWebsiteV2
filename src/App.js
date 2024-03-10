import React from 'react';
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return( 
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Resume" element={<Resume />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Projects" element={<Projects />}/>
          </Routes>
        </Router>
    );
}

export default App;