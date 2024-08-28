import React from "react";
import project from "../../assets/data/project";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <section className="project-container">
        <div className="project-wrapper">
          <div>
            <h2 className="project">PROJECT</h2>
          </div>
          <ul className="project-items">
            {project.map((item, index) => {
              return (
                <li key={index}>
                  <div className="project-imgBox">
                    <img src={item.src} alt="프로젝트로고" />
                  </div>
                  <div className="project-description">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                  <div className="project-skill">
                    {item.program.map((item) => (
                      <div>{item}</div>
                    ))}
                  </div>
                  <div className="project-link">
                    <Link to={item.site}>사이트 바로가기</Link>
                    <Link to={item.href}>코드 보러가기</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Project;
