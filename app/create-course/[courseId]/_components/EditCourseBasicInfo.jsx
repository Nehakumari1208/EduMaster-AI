import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function EditCourseBasicInfo({ course, refreshData }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(course?.courseOutput?.course?.name || "");
    setDescription(course?.courseOutput?.course?.description || "");
  }, [course]);

  const onUpdateHandler = async () => {
    course.courseOutput.course.name = name;
    course.courseOutput.course.description = description;

    try {
      const response = await fetch(`/api/courses/${course?.courseId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId: course?.courseId,
          courseOutput: course?.courseOutput,
        }),
      });
      const result = await response.json();
      if (result.success) {
        refreshData(true);
      }
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <HiPencilSquare />
        </DialogTrigger>
        <DialogContent className="p-4 sm:px-6 mx-auto overflow-x-hidden w-4/5">
          <DialogHeader>
            <DialogTitle>Edit Course Title & Description</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col mt-3 space-y-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Course Title</label>
                  <Input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-1 w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="h-40 mt-1 w-full"
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button onClick={onUpdateHandler} className="w-full sm:w-auto">
                Update
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditCourseBasicInfo;
