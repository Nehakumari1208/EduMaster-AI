"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import React from "react";

function Header({ toggleSidebar, isSidebarOpen }) {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-between items-center shadow-sm bg-purple-100 border-b p-4 h-20">
      <Link href={"/dashboard"}>
        <Image src={"/logo.png"} width={300} height={20} className="ml-4" />
      </Link>

      <div className="flex items-center">
        {isSidebarOpen ? (
          <ImCross
            onClick={toggleSidebar}
            className="cursor-pointer h-8 w-8 mr-4 md:hidden text-white rounded-md bg-primary p-1"
          />
        ) : (
          <TiThMenu
            onClick={toggleSidebar}
            className="cursor-pointer h-9 w-8 mr-4 md:hidden text-white rounded-md bg-primary p-1"
          />
        )}

        <div className="hidden md:flex">
          <Button className="p-6 text-lg" onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
