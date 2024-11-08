import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

function LoadingDialog({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="mx-3 py-4 px-2 md:h-1/3 md:w-4/12 lg:h-1/3 lg:w-3/12 w-6/12 h-6/12 rounded-xl">
        <AlertDialogHeader>
          <AlertDialogDescription>
            <div className="flex flex-col items-center p-3 px-1">
              <Image
                src={"/loader.gif"}
                width={100}
                height={100}
                alt="Loading"
              />
              <h2 className="text-base sm:text-lg md:text-xl text-center mt-4">
                Please wait... AI is working on your course
              </h2>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LoadingDialog;
