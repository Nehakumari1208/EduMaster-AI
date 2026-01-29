"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import LoadingDialog from "../_components/LoadingDialog";
import service from "@/configs/service";
import { useRouter } from "next/navigation";

function CourseLayout({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    params && GetCourse();
  }, [params, user]);

  const GetCourse = async () => {
    try {
      const response = await fetch(`/api/courses/${params?.courseId}`);
      const result = await response.json();
      if (result.success) {
        setCourse(result.data[0]);
        console.log(result.data);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };
  const GenerateChapterContent = () => {
    setLoading(true);
    const chapters = course?.courseOutput?.course?.chapters;
    chapters.forEach(async (chapter, index) => {
      const PROMPT =
        "Explain the concept in Detail on Topic:" +
        course?.name +
        ",Chapter:" +
        chapter?.name +
        " , in JSON Format with list of array with field as title,explanation on given chapter in detail, Code Example if applicable";
      console.log(PROMPT);
      try {
        let videoId = "";
        service.getVideos(course?.name + ":" + chapter?.name).then((resp) => {
          console.log(resp);
          videoId = resp[0]?.id?.videoId;
        });
        const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
        console.log(result.response?.text());
        const content = JSON.parse(result?.response?.text());

        // Send chapter data to API
        const chapterResponse = await fetch("/api/chapters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chapterId: index,
            courseId: course?.courseId,
            content: content,
            videoId: videoId,
          }),
        });

        const chapterResult = await chapterResponse.json();
        if (!chapterResult.success) throw new Error(chapterResult.error);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }

      // Update course to published
      try {
        await fetch(`/api/courses/${course?.courseId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseId: course?.courseId,
            publish: true,
          }),
        });
      } catch (error) {
        console.error("Error publishing course:", error);
      }

      router.replace("/create-course/" + course?.courseId + "/finish");
      //  }
    });
  };
  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44 ">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>
      <LoadingDialog loading={loading} className="h-10 w-10" />
      <CourseBasicInfo course={course} refreshData={() => GetCourse()} />
      <CourseDetail course={course} />
      <ChapterList course={course} refreshData={() => GetCourse()} />
      <Button className="my-10" onClick={GenerateChapterContent}>
        Generate Course Content
      </Button>
    </div>
  );
}

export default CourseLayout;
