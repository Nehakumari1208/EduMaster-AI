"use client";
import Header from "@/app/_components/Header";
import ChapterList from "@/app/create-course/[courseId]/_components/ChapterList";
import CourseBasicInfo from "@/app/create-course/[courseId]/_components/CourseBasicInfo";
import CourseDetail from "@/app/create-course/[courseId]/_components/CourseDetail";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

function Course({ params }) {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params) {
      GetCourse();
    }
  }, [params]);

  const GetCourse = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList?.courseId, params?.courseId));
      setCourse(result[0] || null);
    } catch (error) {
      console.error("Failed to fetch course:", error);
      setError("Failed to load course. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-6">
        {isLoading ? (
          <div className="flex flex-col space-y-4">
            <div className="bg-slate-200 h-40 md:h-60 lg:h-80 w-full rounded animate-pulse"></div>
            <div className="bg-slate-200 h-24 md:h-32 lg:h-28 w-full rounded animate-pulse"></div>
            <div className="bg-slate-200 h-20 w-full rounded animate-pulse"></div>
            <div className="bg-slate-200 h-20 w-full rounded animate-pulse"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <>
            {course ? (
              <>
                <CourseBasicInfo course={course} edit={false} />
                <CourseDetail course={course} />
                <ChapterList course={course} edit={false} />
              </>
            ) : (
              <div className="text-gray-500 text-center">Course not found.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Course;
