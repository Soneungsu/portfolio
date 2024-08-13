import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    // console.log(menuOpen);
  };

  return (
    <>
      <header>
        <nav className="nav-wrapper">
          <div className="main-titlename">SON PORTFOLIO</div>
          <button className="mo-togglemenubtn" onClick={handleMenuToggle}>
            ☰
          </button>

          {/* 메뉴가 false일 경우 모바일 nav, true일경우 데스크탑 nav */}
          <ol
            className={`list-items ${
              menuOpen || !isMobile ? "list-items" : "mobile-nav"
            }`}
          >
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
