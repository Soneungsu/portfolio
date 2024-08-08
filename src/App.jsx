import { useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import "./global.scss";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
