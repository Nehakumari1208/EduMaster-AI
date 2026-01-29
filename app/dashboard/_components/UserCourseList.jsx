"use client";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { UserCourseListContext } from "@/app/_context/UserCourseList";

function UserCourseList() {
  const [courseList, setCourseList] = useState([]);
  const { userCourseList, setUserCourseList } = useContext(
    UserCourseListContext,
  );
  const { user } = useUser();
  useEffect(() => {
    user && getUserCourses();
  }, [user]);
  const getUserCourses = async () => {
    try {
      const response = await fetch(
        `/api/courses?createdBy=${user?.primaryEmailAddress?.emailAddress}`,
      );
      const result = await response.json();
      if (result.success) {
        setCourseList(result.data);
        setUserCourseList(result.data);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-10 ">
      <h2 className="text-xl font-medium">My AI Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courseList?.length > 0
          ? courseList?.map((course, index) => (
              <CourseCard
                course={course}
                key={index}
                refreshData={() => getUserCourses()}
              />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[200px]"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default UserCourseList;
