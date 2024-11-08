"use client";
import { UserCourseListContext } from "@/app/_context/UserCourseList";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useContext } from "react";

function AddCourse() {
  const { user } = useUser();
  const { userCourseList } = useContext(UserCourseListContext);

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="mb-5 md:mb-0">
        <h2 className="text-2xl">
          Hello, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Create new course with AI, share with friends and earn from it.
        </p>
      </div>
      <Link
        href={
          userCourseList.length >= 5 ? "/dashboard/upgrade" : "/create-course"
        }
      >
        <Button className="p-5 text-lg mr-14">+ Create AI Course</Button>
      </Link>
    </div>
  );
}

export default AddCourse;
