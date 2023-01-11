import React from "react";
import Menu from "./Menu";

const Sidebar = ({ menuItems }) => {
  return (
    <nav className="col-sm-3 bg-light">
      <h3>Sidebar</h3>
      <Menu menuItems={menuItems} />
    </nav>
  );
};

export default Sidebar;
