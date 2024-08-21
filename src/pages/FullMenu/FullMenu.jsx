import React, { useState } from "react";
import menuList from "../../assets/data/fullmenu";
import Main from "../Main/Main.jsx";

const FullMenu = (props) => {
  const [modal, setModal] = useState(true);
  const closeBtn = () => {
    setModal(false);
  };

  if (!modal) {
    return null;
  }

  return (
    <div className="full-container">
      <button
        id="closebtn"
        onClick={() => {
          closeBtn();
        }}
      >
        X
      </button>

      <ol className="full-menu-wrap">
        {menuList.map((item, index) => {
          return (
            <li className="items" key={index}>
              {item}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default FullMenu;
