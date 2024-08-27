import React from "react";
import project from "../../assets/data/project";

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
                  <div></div>
                  <div className="project-link">
                    <a href="" target="_blank">
                      사이트 바로가기
                    </a>
                    <a href="" target="_blank">
                      코드 보러가기
                    </a>
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
