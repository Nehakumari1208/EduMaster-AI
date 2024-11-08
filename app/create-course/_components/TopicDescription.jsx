import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext } from "react";

function TopicDescription() {
  const { userCourseInput, setCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-44">
      <div className="mt-5 ">
        <label className="block text-lg font-semibold">
          💡Write the topic for which you want to generate a course
        </label>
        <Input
          placeholder={"Topic"}
          className="h-14 text-xl mt-2 w-full"
          onChange={(e) => handleInputChange("topic", e.target.value)}
          defaultValue={userCourseInput?.topic}
        />
      </div>
      <div className="mt-5">
        <label className="block text-lg font-semibold">
          📝Tell us more about your course, what you want to include in the
          course (Optional)
        </label>
        <Textarea
          placeholder="About your course"
          className="h-24 text-xl mt-2 w-full"
          onChange={(e) => handleInputChange("description", e.target.value)}
          defaultValue={userCourseInput?.description}
        />
      </div>
    </div>
  );
}

export default TopicDescription;
