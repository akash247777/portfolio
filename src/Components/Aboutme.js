import React from "react";
import about from "../Assets/about.svg";

const Aboutme = () => {
  const variable = {
    fontFamily: "Dancing Script, cursive",
    fontFamily: "Lobster, cursive",
  };

  return (
    <>
      <div className="text-center mt-20 text-xl font-bold flex justify-center items-center">
        <img src={about} className="h-20 w-20"></img>
        <span className="px-1 text-indigo-500">About</span>
        <span>Me</span>
      </div>

      <span >
        <p className="m-6 text-xl" style={variable}>
          As an information science engineering professional with a passion for
          technology and innovation, my objective is to secure a position that
          allows me to utilize my knowledge and skills to develop creative
          solutions that solve complex problems. With a strong foundation in
          python, and other programming, I am confident in my ability to provide
          value to any organization looking to enhance its
          technological capabilities
        </p>
      </span>
    </>
  );
};

export default Aboutme;
