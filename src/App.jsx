import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { useRef } from "react";

const App = () => {
  const contactRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <Router>
      <div className={`max-w-[1440px] mx-auto px-10`}>
        <Navbar projectRef={projectRef} contactRef={contactRef} />
        <Routes>
          <Route
            path="/"
            element={<Home projectRef={projectRef} contactRef={contactRef} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
