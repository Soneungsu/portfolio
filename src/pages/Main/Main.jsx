import React, { useEffect, useState, useRef } from "react";
import Project from "../Project/Project.jsx";
import Contact from "../Contact/Contact.jsx";
import Skills from "../Skills/Skills.jsx";
import txt from "../../assets/data/txt.jsx";

const Main = () => {
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
            <h1 className="webportfolio">WEB PORTFOLIO</h1>
            <section className="info-wrapper">
              <p>{text}</p>
            </section>
          </section>
        </section>
        {/* skill section */}
        <Skills />
        {/* project section */}
        <Project />
        {/* Contact section */}
        <Contact />
      </main>
    </>
  );
};

export default Main;
