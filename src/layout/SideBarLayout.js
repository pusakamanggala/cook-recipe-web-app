import React from "react";
import SideBar from "../components/SideBar";

const SideBarLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
};

export default SideBarLayout;
