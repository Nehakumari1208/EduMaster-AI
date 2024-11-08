"use client";
import React, { useState } from "react";
import SideBar from "./_components/SideBar";
import Header from "../_components/Header";
import { UserCourseListContext } from "../_context/UserCourseList";

function DashboardLayout({ children }) {
  const [userCourseList, setUserCourseList] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setTimeout(() => {
        setIsSidebarOpen(false);
      }, 200);
    } else {
      setIsSidebarOpen(true);
    }
  };

  return (
    <UserCourseListContext.Provider
      value={{ userCourseList, setUserCourseList }}
    >
      <div className="flex">
        <div
          className={`fixed top-0 left-0 h-full w-3/5 md:w-64 bg-white shadow-xl transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } z-40 md:translate-x-0`}
        >
          <SideBar toggleSidebar={toggleSidebar} />
        </div>
        <div className="flex-1 md:ml-64 w-screen transition-opacity duration-300">
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <div className="p-10 h-screen overflow-y-auto">{children}</div>
        </div>
      </div>
    </UserCourseListContext.Provider>
  );
}

export default DashboardLayout;
