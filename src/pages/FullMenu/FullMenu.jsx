import React, { useState } from "react";
import menuList from "../../assets/data/fullmenu";

const FullMenu = (props) => {
  const [closeBtn, setCloseBtn] = useState(false);
  return (
    <div className="full-container">
      <button id="closebtn">X</button>
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
