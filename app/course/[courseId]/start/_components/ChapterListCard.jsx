import React from "react";
import { LuClock3 } from "react-icons/lu";

function ChapterListCard({ chapter, index }) {
  return (
    <div className="flex p-4 gap-3 sm:p-5 items-stretch border-b border-purple-200 h-ful">
      <div className="flex justify-center">
        <h2 className="p-1 bg-primary w-8 h-8 rounded-full text-white text-center">
          {index + 1}
        </h2>
      </div>
      <div className="flex-1">
        <h2 className="font-medium text-base sm:text-lg">{chapter?.name}</h2>
        <h2 className="flex items-center gap-2 text-sm sm:text-base text-primary">
          <LuClock3 /> {chapter?.duration}
        </h2>
      </div>
    </div>
  );
}

export default ChapterListCard;
