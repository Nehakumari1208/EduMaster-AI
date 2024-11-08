import React from "react";
import { HiOutlineChartBar } from "react-icons/hi2";
import { LuClock3 } from "react-icons/lu";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

function CourseDetail({ course }) {
  return (
    <div className="border p-6 rounded-xl shadow-sm mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex gap-2 items-center">
          <HiOutlineChartBar className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Skill Level</h2>
            <h2 className="font-medium text-lg">
              {course?.courseOutput?.course?.level}
            </h2>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <LuClock3 className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Duration</h2>
            <h2 className="font-medium text-lg">
              {course?.courseOutput?.course?.duration}
            </h2>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <IoBookOutline className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">No. Of Chapters</h2>
            <h2 className="font-medium text-lg">
              {course?.courseOutput?.course?.noOfChapters}
            </h2>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <FaRegCirclePlay className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Video Included</h2>
            <h2 className="font-medium text-lg">
              {course?.includeVideo ? "Yes" : "No"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
