import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Red, Blue, Home } from "./components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/red">Fire Red</Link>
          <Link to="/blue">Aqua Blue</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/red" element={<Red />}></Route>
            <Route path="/blue" element={<Blue />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
