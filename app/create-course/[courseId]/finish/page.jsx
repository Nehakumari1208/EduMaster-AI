"use client";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "../_components/CourseBasicInfo";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

function FinishScreen({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (params) GetCourse();
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseId),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setCourse(result[0]);
    console.log(result);
  };

  const handleCopy = async () => {
      const host = process.env.NEXT_PUBLIC_HOST_NAME || window.location.origin;
      const url = `${host}/course/view/${course?.courseId}`;
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-44 my-7">
      <h2 className="text-center font-bold text-2xl my-3 text-primary">
        Congrats! Your Course is Ready
      </h2>
      <CourseBasicInfo course={course} refreshData={() => console.log()} />
      <h2 className="mt-6 text-lg font-semibold inline-flex">
        Course URL:
        <HiOutlineClipboardDocumentCheck
          className="w-8 h-8 cursor-pointer hover:text-primary transition-colors mb-1"
          onClick={handleCopy}
          title="Copy URL"
        />
      </h2>
      <div className="text-sm md:text-lg">
        <h2 className="text-gray-400 border px-3 py-2 rounded-lg flex gap-2 justify-between items-center">
          <span
            className="text-sm md:text-lg text-center
          "
          >
            {process.env.NEXT_PUBLIC_HOST_NAME || window.location.origin}
            /course/view/{course?.courseId}
          </span>
        </h2>
      </div>
      {isCopied && (
        <div className="mt-3 text-green-500 text-center">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default FinishScreen;
