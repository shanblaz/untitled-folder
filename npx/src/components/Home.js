import React from "react";
import Products from "./Products";
import Sidebar from "./SideBar";
function Home() {
  const menuItems = [
    {
      title: "Products",
      path: "/products",
      children: [
        {
          title: "Page 1",
          path: "/home/page1",
        },
        {
          title: "Page 2",
          path: "/home/page2",
        },
      ],
    },
    {
      title: "About",
      path: "/about",
    },
  ];
  return (
    <div style={{ height: "100vh" }}>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar menuItems={menuItems} />
          <main className="col-sm-9">
            <Products />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
