import { useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import Footer from "./components/layout/Footer.jsx";
import "./global.scss";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
