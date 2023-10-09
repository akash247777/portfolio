import React, { useState } from "react";
import { useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import ice1 from "../Assets/ai.svg";
import ice2 from "../Assets/python.svg";
import ice3 from "../Assets/java.svg";
import ice4 from "../Assets/mysql.svg";

const SLIDES = [ice1, ice2, ice3, ice4];

const Skills = ({ slides = [ice1, ice2, ice3, ice4] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const transitions = useTransition([activeIndex], {
    from: { x: -110, opacity: 0, display: "none" },
    enter: { x: 0, opacity: 1, display: "block" },
    leave: { x: 0, display: "none" },
    config: { duration: 1000 },
  });

  return (
    <>
      <div className="text-center mt-20 mb-10 text-xl font-bold flex justify-center items-center">
        <span className=" text-indigo-500">Skills</span>
        <span className=" text-indigo-500">&</span>
        <span>Attributes</span>
      </div>

      <div className="flex justify-around mt-10 mb-16">
        <div className="mt-10">
          <button
            className="bg-indigo-400 p-1 rounded-md hover:bg-indigo-600 text-white font-bold shadow-lg"
            onClick={previousSlide}
          >
            &lt;
          </button>
        </div>

        <div className="h-36 w-32 shadow-lg">
          {transitions((styles, index) => (
            <animated.div
              style={{
                ...styles,
              }}
            >
              <img src={`${slides[index]}`} />
            </animated.div>
          ))}
        </div>

        <div className="mt-10">
          <button
            className="bg-indigo-400 hover:bg-indigo-600 p-1 rounded-md font-bold text-white shadow-md"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Skills;
