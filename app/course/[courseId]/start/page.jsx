"use client";
import React, { useEffect, useState } from "react";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";
import { ImCross } from "react-icons/im";

function CourseStart({ params }) {
  const [course, setCourse] = useState();
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, selectChapterContent] = useState();
  const [isChapterListOpen, setIsChapterListOpen] = useState(false);

  useEffect(() => {
    GetCourse();
  }, []);

  const GetCourse = async () => {
    try {
      const response = await fetch(`/api/courses/${params?.courseId}`);
      const result = await response.json();
      if (result.success && result.data.length > 0) {
        setCourse(result.data[0]);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const GetSelectedChapterContent = async (chapterId) => {
    try {
      const response = await fetch(
        `/api/chapters?chapterId=${chapterId}&courseId=${course?.courseId}`,
      );
      const result = await response.json();
      if (result.success && result.data.length > 0) {
        selectChapterContent(result.data[0]);
      }
    } catch (error) {
      console.error("Error fetching chapter:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <button
        className="md:hidden bg-primary text-white p-2 mb-2 text-xl font-semibold"
        onClick={() => setIsChapterListOpen((prev) => !prev)}
      >
        {isChapterListOpen ? "" : "Show Chapters"}
      </button>
      <div
        className={`fixed md:w-72 w-full md:h-screen h-auto border-r shadow-sm transition-all duration-500 ease-in-out transform ${
          isChapterListOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-100%]"
        } md:opacity-100 md:translate-x-0`}
      >
        <div className="flex bg-primary items-center justify-between">
          <h2 className="font-medium text-xl p-4 text-white ">
            {course?.courseOutput?.course?.name}
          </h2>
          <ImCross
            className="cursor-pointer h-4 w-4 mr-4 md:hidden text-white"
            onClick={() => setIsChapterListOpen(false)}
          />
        </div>
        <div className="overflow-y-auto max-h-screen">
          {course?.courseOutput?.course?.chapters.map((chapter, index) => (
            <div
              key={index}
              className={`cursor-pointer bg-white hover:bg-purple-50 ${
                selectedChapter?.name === chapter?.name ? "bg-purple-300" : ""
              } ${
                index === course.courseOutput.course.chapters.length - 1
                  ? "mb-40"
                  : ""
              }`}
              onClick={() => {
                setSelectedChapter(chapter);
                GetSelectedChapterContent(index);
                setIsChapterListOpen(false);
              }}
            >
              <ChapterListCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="md:ml-72 flex-1">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
      </div>
    </div>
  );
}

export default CourseStart;
