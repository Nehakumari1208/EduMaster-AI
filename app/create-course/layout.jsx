"use client";
import React, { useState } from "react";
import Header from "../dashboard/_components/Header";
import { UserInputContext } from "../_context/UserInputContext";

function CreateCourseLayout({ children }) {
  const [userCourseInput, setCourseInput] = useState([]);
  return (
    <div className>
      <UserInputContext.Provider value={{ userCourseInput, setCourseInput }}>
        <>
          <Header/>
          {children}
        </>
      </UserInputContext.Provider>
    </div>
  );
}

export default CreateCourseLayout;
