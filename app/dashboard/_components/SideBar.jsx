"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { FaPowerOff } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { UserCourseListContext } from "@/app/_context/UserCourseList";

function SideBar({ toggleSidebar }) {
  const { userCourseList } = useContext(UserCourseListContext);
  const Menu = [
    { id: 1, name: "Home", icon: <HiOutlineHome />, path: "/dashboard" },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    { id: 4, name: "Logout", icon: <FaPowerOff />, path: "/dashboard/logout" },
  ];
  const path = usePathname();

  return (
    <div className="h-full w-full p-5 bg-white">
      <Image src={"/logo.png"} width={200} height={50} alt="Logo" />
      <hr className="my-5" />
      <ul>
        {Menu.map((item) => (
          <Link key={item.id} href={item.path} onClick={toggleSidebar}>
            <div
              className={`flex items-center gap-3 text-gray-600 p-4 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                item.path === path ? "bg-gray-100 text-black" : ""
              }`}
            >
              <div className="text-4xl">{item.icon}</div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>
      <div className="absolute bottom-14 w-[80%]">
        <Progress value={(userCourseList?.length / 5) * 100} />
        <h2 className="text-sm my-2">
          {userCourseList?.length} out of 5 courses created
        </h2>
        <h2 className="text-xs text-gray-500">
          Upgrade your plan for unlimited course generation
        </h2>
      </div>
    </div>
  );
}

export default SideBar;
