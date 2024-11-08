import Image from "next/image";
import React, { useEffect } from "react";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaEllipsisVertical } from "react-icons/fa6";
import DropdownOption from "./DropdownOption";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CourseCard({ course, refreshData, displayUser = true }) {
  const router = useRouter();

  const handleOnDelete = async () => {
    const resp = await db
      .delete(CourseList)
      .where(eq(CourseList.id, course?.id))
      .returning({ id: CourseList?.id });
    if (resp) {
      refreshData();
    }
  };

  return (
    <div className="shadow-sm rounded-lg border hover:border-primary p-4 cursor-pointer mt-4 transition-transform transform hover:scale-105">
      <Link href={"/course/" + course?.courseId}>
        <Image
          src={course?.courseBanner}
          width={300}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
          alt={`Banner for ${course?.courseOutput?.course?.name}`}
        />
      </Link>
      <div className="p-2">
        <h2 className="flex justify-between items-center font-medium text-lg">
          {course?.courseOutput?.course?.name}
          {displayUser && (
            <DropdownOption handleOnDelete={() => handleOnDelete()}>
              <FaEllipsisVertical className="ml-2 cursor-pointer" />
            </DropdownOption>
          )}
        </h2>
        <p className="text-sm text-gray-400 my-1">
          {course?.courseOutput?.course?.category}
        </p>
        <div className="flex items-center justify-between flex-wrap">
          <h2 className="flex gap-2 items-center p-2 bg-purple-100 text-primary text-sm rounded-sm">
            <HiOutlineBookOpen />
            {course?.courseOutput?.course?.noOfChapters} Chapters
          </h2>
          <h2 className="text-sm p-2 bg-purple-100 text-primary rounded-sm">
            {course?.courseOutput?.course?.level}
          </h2>
        </div>
        {displayUser && (
          <div className="flex gap-2 items-center mt-2">
            <Image
              src={course?.userProfileImage}
              width={35}
              height={35}
              className="rounded-full"
              alt={`${course?.userName}'s profile`}
            />
            <h2 className="text-sm">{course?.userName}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
