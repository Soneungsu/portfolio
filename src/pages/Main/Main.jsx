import React from "react";
import { Routes, Route } from "react-router-dom";
import Project from "../Project/Project.jsx";
import Contact from "../Contact/Contact.jsx";
import Skills from "../Skills/Skills.jsx";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main>
        <section className="info-container">
          <section className="info-wrappers">
            <section className="webportfolio">WEB PORTFOLIO</section>
            <section className="info-wrapper">
              <p>꿈을 향해 올라가는 개발자 손응수 입니다.</p>
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
