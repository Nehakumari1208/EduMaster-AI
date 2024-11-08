"use client";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import React, { useContext, useEffect, useState } from "react";
import CourseCard from "../_components/CourseCard";
import { Button } from "@/components/ui/button";
import { UserCourseListContext } from "@/app/_context/UserCourseList";

function Explore() {
  const [courseList, setCourseList] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { userCourseList } = useContext(UserCourseListContext);
  useEffect(() => {
    GetAllCourses();
  }, [pageIndex]);

  const GetAllCourses = async () => {
    setLoading(true);
    const result = await db
      .select()
      .from(CourseList)
      .limit(9)
      .offset(pageIndex * 9);
    setCourseList(result);
    console.log(result);
    setLoading(false);
  };
  return (
    <div>
      <h2 className="font-bold text-3xl mb-3">Explore More Projects</h2>
      <p className="text-slate-500 text-lg">
        Explore more project build with AI by other users
      </p>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[200px]"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courseList?.map((course, index) => (
            <div key={index}>
              <CourseCard course={course} displayUser={true} />
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-between mt-5">
        {pageIndex > 0 && (
          <Button onClick={() => setPageIndex(pageIndex - 1)}>
            Previous Page
          </Button>
        )}
        {pageIndex < userCourseList?.length && (
          <Button onClick={() => setPageIndex(pageIndex + 1)}>Next Page</Button>
        )}
      </div>
    </div>
  );
}

export default Explore;
