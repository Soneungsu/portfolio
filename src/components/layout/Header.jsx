import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav className="nav-wrapper">
          <div className="main-titlename">SON PORTFOLIO</div>
          <ol className="list-items">
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </li>
            <li
              onClick={() => {
                navigate("/skills");
              }}
            >
              SKILLS
            </li>
            <li
              onClick={() => {
                navigate("/project");
              }}
            >
              PROJECT
            </li>
            <li
              onClick={() => {
                navigate("/contact");
              }}
            >
              CONTACT
            </li>
          </ol>
        </nav>
      </header>
    </>
  );
};

export default Header;
