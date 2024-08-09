import { useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import "./global.scss";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
