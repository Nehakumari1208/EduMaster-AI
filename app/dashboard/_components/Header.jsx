import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center px-11 shadow-sm bg-purple-100 ">
      <Link href={"/dashboard"}>
        <Image src={"/logo.png"} width={200} height={50} />
      </Link>
      <UserButton />
    </div>
  );
}

export default Header;
