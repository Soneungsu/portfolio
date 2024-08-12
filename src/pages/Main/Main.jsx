import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Project from "../Project/Project.jsx";
import Contact from "../Contact/Contact.jsx";
import Skills from "../Skills/Skills.jsx";

const Main = () => {
  const txt = "꿈을 향해 올라가는 개발자 손응수 입니다.";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);

    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <>
      <main>
        <section className="info-container">
          <section className="info-wrappers">
            <section className="webportfolio">WEB PORTFOLIO</section>
            <section className="info-wrapper">
              <p>{text}</p>
            </section>
          </section>
        </section>
        {/* project section */}
        <Project />
        {/* skill sectioc */}
        <Skills />
        {/* Contact section */}
        <Contact />
      </main>
    </>
  );
};

export default Main;
