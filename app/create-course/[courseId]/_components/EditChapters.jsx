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

function EditChapters({ course, index, refreshData }) {
  const Chapters = course?.courseOutput?.course?.chapters;
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    setName(Chapters[index]?.name || "");
    setAbout(Chapters[index]?.about || "");
  }, [course, index]);

  const onUpdateHandler = async () => {
    course.courseOutput.course.chapters[index].name = name;
    course.courseOutput.course.chapters[index].about = about;
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
        <DialogContent className="max-w-md mx-auto w-4/5">
          <DialogHeader>
            <DialogTitle>Edit Chapter</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col mt-3">
                <label className="text-sm font-medium">Chapter Title</label>
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={about}
                  onChange={(event) => setAbout(event.target.value)}
                  className="h-40 mt-1"
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button onClick={onUpdateHandler}>Update</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditChapters;
