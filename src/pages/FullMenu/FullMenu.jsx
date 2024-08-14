import React from "react";
import menuList from "../../assets/data/fullmenu";

const FullMenu = (props) => {
  return (
    <div className="full-container">
      <ol className="full-menu-wrap">
        {menuList.map((item, index) => {
          <li className="items" key={index}>
            {item}
          </li>;
        })}
      </ol>
    </div>
  );
};

export default FullMenu;
