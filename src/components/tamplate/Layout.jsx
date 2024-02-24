import React from "react";
import Header from "../organism/Header.org";
import SideBar from "../organism/SideBar.org";

function Layout({ children }) {
  return (
    <div className="font-vazirFont">
      <div>
        <Header />
      </div>
      <div className="flex w-full gap-7">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="w-full p-5">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
