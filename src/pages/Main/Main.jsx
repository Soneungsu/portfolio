import React, { useEffect, useState, useRef } from "react";
import Project from "../Project/Project.jsx";
import Contact from "../Contact/Contact.jsx";
import Skills from "../Skills/Skills.jsx";
import txt from "../../assets/data/txt.jsx";

const Main = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const homeRef = useRef(null);

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
        {/* skill sectioc */}
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
