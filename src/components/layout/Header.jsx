import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FullMenu from "../../pages/FullMenu/FullMenu";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      <header>
        <nav className={isMobile ? "mo-nav" : "nav-wrapper"}>
          <div className="main-titlename">SON PORTFOLIO</div>
          {isMobile ? (
            <>
              <button className="mo-togglemenubtn" onClick={handleMenuToggle}>
                ☰
              </button>
            </>
          ) : (
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
          )}
        </nav>
      </header>
      {isMobile && menuOpen ? <FullMenu /> : null}
    </>
  );
};

export default Header;
