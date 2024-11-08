"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { UserCourseListContext } from "@/app/_context/UserCourseList";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Logout = () => {
  const router = useRouter();
  const { setUserCourseList } = useContext(UserCourseListContext);
  const { signOut } = useClerk();

  const handleLogout = () => {
    setUserCourseList([]);
    signOut();
    router.push("/");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 p-4 z-50">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-red-500">
          You have been logged out
        </h1>
        <Button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 text-white rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default Logout;
