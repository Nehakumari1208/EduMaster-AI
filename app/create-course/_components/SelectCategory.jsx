import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";
function SelectCategory() {
  const { userCourseInput, setCourseInput } = useContext(UserInputContext);
  const handleCategoryChange = (category) => {
    setCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };
  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5 bg-purple-200 text-center border-2 border-purple-400 rounded-md p-4">
        Select the Course Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mt-12">
        {CategoryList.map((item, index) => (
          <div
            className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-100 cursor-pointer ${
              userCourseInput?.category == item.name &&
              "border-primary bg-blue-50"
            } `}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} width={80} height={80} unoptimized />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
