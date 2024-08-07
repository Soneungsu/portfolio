import { useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Main from "./pages/Main.jsx";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className="nav-wrapper">
          <div className="main-titlename">SON PORTFOLIO</div>
          <ol className="list-items">
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </li>
            <li
              onClick={() => {
                navigate("/skills");
              }}
            >
              SKILLS
            </li>
            <li
              onClick={() => {
                navigate("/project");
              }}
            >
              PROJECT
            </li>
          </ol>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
