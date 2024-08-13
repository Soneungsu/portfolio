import React from "react";
import { skillList } from "../../assets/data/skills";

const Skills = () => {
  return (
    <>
      <section className="skill-container">
        <div className="skill-wrap">
          <section className="skill-title-wrap">
            <h1>SKILLS</h1>
          </section>
          <section className="skills-item-wrap">
            <ul className="skills-items">
              {skillList.map((item, index) => {
                return (
                  <li className="logo" key={index}>
                    <div>
                      <img src={item.src} alt="로고 이미지" />
                    </div>
                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};

export default Skills;
