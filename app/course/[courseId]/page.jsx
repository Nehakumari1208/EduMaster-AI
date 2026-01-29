"use client";
import Header from "@/app/_components/Header";
import ChapterList from "@/app/create-course/[courseId]/_components/ChapterList";
import CourseBasicInfo from "@/app/create-course/[courseId]/_components/CourseBasicInfo";
import CourseDetail from "@/app/create-course/[courseId]/_components/CourseDetail";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Course({ params }) {
  const [course, setCourse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (params) {
      GetCourse();
    }
  }, [params]);

  const GetCourse = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/courses/${params?.courseId}`);
      const result = await response.json();
      if (result.success && result.data.length > 0) {
        const fetchedCourse = result.data[0];

        // If user is the creator, redirect to edit page
        if (
          fetchedCourse?.createdBy === user?.primaryEmailAddress?.emailAddress
        ) {
          router.replace(`/create-course/${params?.courseId}`);
          return;
        }

        setCourse(fetchedCourse);
        console.log(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch course:", error);
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
        ) : (
          <>
            <CourseBasicInfo course={course} edit={false} />
            <CourseDetail course={course} />
            <ChapterList course={course} edit={false} />
          </>
        )}
      </div>
    </div>
  );
}

export default Course;
