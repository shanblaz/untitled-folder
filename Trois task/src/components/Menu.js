import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <ul className="nav flex-column">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.title}>
          <a className="nav-link" href="#">
            {item.title}
          </a>
          {item.children && <Menu menuItems={item.children} />}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
