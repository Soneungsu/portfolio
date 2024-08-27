import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import FullMenu from "../../pages/FullMenu/FullMenu";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const categoryRef = useRef();
  const navigate = useNavigate();
  const navItems = [
    {
      label: "HOME",
      path: "/",
    },
    { label: "SKILLS", path: "/skills" },
    {
      label: "PROJECT",
      path: "/project",
    },
    {
      label: "CONTACT",
      path: "/contact",
    },
  ];

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const closeBtn = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <nav className={isMobile ? "mo-nav" : "nav-wrapper"}>
          <div className="main-titlename">SON PORTFOLIO</div>
          {isMobile ? (
            <>
              <button
                className="mo-togglemenubtn"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                ☰
              </button>
            </>
          ) : (
            <ol className="list-items">
              {navItems.map((item, index) => {
                return (
                  <li key={item.path} onClick={() => navigate(item.path)}>
                    {item.label}
                  </li>
                );
              })}
            </ol>
          )}
        </nav>
      </header>
      {isMobile && menuOpen && <FullMenu closeBtn={closeBtn} />}
    </>
  );
};

export default Header;
