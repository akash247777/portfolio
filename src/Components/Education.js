import React from "react";
import nieit from "../Assets/nieit.png";
const Education = () => {


  return (
    <>
      <div className="
      text-center mt-10 mb-10 text-xl font-bold flex justify-center items-center">
        <span className=" text-indigo-500">My</span>
        <span>Education</span>
      </div>

      <div className="flex justify-center items-center ">
      <div className="max-w-sm m-6 rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={nieit}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-indigo-500">NIEIT</div>
          <p className="text-gray-700 text-base">
          I am Akash S.G, currently enrolled in a BE program in the ISE stream at NIEIT College, with a strong focus on pursuing a career in IT.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #BE
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #ISE
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #IT
          </span>
        </div>
      </div>
      </div>
    </>
  );
};

export default Education;
