import React from "react";
import ReactMarkdown from "react-markdown";
import YouTube from "react-youtube";

const opts = {
  height: "450",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

function ChapterContent({ chapter, content }) {
  return (
    <div className="p-5 md:p-10">
      <h2 className="font-medium text-3xl">{chapter?.name}</h2>
      <p className="text-gray-500">{chapter?.about}</p>
      <div className="flex justify-center my-6">
        <div className="w-full md:w-3/4 lg:w-2/3 aspect-video">
          <YouTube videoId={content?.videoId} opts={opts} />
        </div>
      </div>
      <div>
        {content?.content?.map((item, index) => (
          <div
            key={index}
            className="pt-0 bg-slate-200 mb-4 rounded-lg shadow-md"
          >
            <h2 className="font-medium text-xl border-2 border-purple-300 bg-purple-200 rounded-lg p-2 w-full">
              {item?.title}
            </h2>

            {item?.explanation && (
              <ReactMarkdown className="whitespace-pre-wrap p-4">
                {item.explanation}
              </ReactMarkdown>
            )}
            {item?.code && (
              <div className="p-4 bg-black text-white rounded-md mt-0 overflow-x-auto">
                <pre>
                  <code>{item.code.trim()}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent;
