import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../Contact/Contact.jsx";
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
        {/* skill sectioc */}

        {/* Contact section */}

        <Contact />
      </main>
    </>
  );
};

export default Main;
