import React from "react";
import { LuClock3 } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import EditChapters from "./EditChapters";

function ChapterList({ course, refreshData, edit = true }) {
  return (
    <div className="mt-3">
      <h2 className="font-medium text-2xl md:text-3xl">Chapters</h2>
      <div className="mt-2">
        {course?.courseOutput?.course?.chapters.map((chapter, index) => (
          <div
            key={index}
            className="border p-5 rounded-lg mb-3 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex gap-5 items-start w-full md:w-auto">
              <h2 className="bg-primary h-10 w-10 text-white rounded-full text-center p-2 flex-none">
                {index + 1}
              </h2>
              <div className="flex-1">
                <h2 className="font-medium text-lg flex gap-2 items-center">
                  {chapter?.name}
                  {edit && (
                    <EditChapters
                      course={course}
                      index={index}
                      refreshData={refreshData}
                    />
                  )}
                </h2>
                <p className="text-sm text-gray-500">{chapter?.about}</p>
                <p className="flex gap-2 text-primary items-center">
                  <LuClock3 />
                  {chapter?.duration}
                </p>
              </div>
            </div>
            <FaRegCheckCircle className="text-4xl text-gray-300 flex-none mt-2 " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
