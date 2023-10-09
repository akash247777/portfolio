import React from "react";
import insta from "../Assets/insta.svg";
import github from "../Assets/github.svg";
import facebook from "../Assets/facebook.svg";
import { useTransition, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const Landing = () => {
  const DATA = [
    "I am into AI & ML",
    "I am into python Tkinter GUI",
    "I am into MySQL ",
  ];
  const [colors, setColors] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % DATA.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setColors(DATA[activeIndex]);
    setTimeout(() => {
      setColors([]);
    }, 1800);
  }, [activeIndex]);

  const transitions = useTransition(colors, {
    from: { opacity: 0, transform: "perspective(600px) rotateX(360deg)" },
    enter: { opacity: 1, transform: "perspective(600px) rotateX(0deg)" },
    leave: { opacity: 0, transform: "perspective(600px) rotateX(180deg)" },
    config: { duration: 500 },
  });

  return (
    <>
      <div className="font-bold m-6 text-blue-900 text-4xl select-none">
        <h1 className="p-2 mt-10">Hi There,</h1>
        <h1 className="mt-5 m-2">I Am Akash S.G</h1>
        <h1 className="mt-5 m-2 text-yellow-500 text-2xl -mb-10">
          Python Developer
        </h1>
      </div>

      <div className="transition-container m-3 text-yellow-600">
        <span>
          <br></br>
          {transitions((styles, item) => (
            <animated.div
              className="font-light p-5 text-2xl"
              style={{
                ...styles,
                // transform: styles.opacity.to((opacity) => `scale(${opacity})`),
              }}
            >
              {item}
            </animated.div>
          ))}
        </span>
      </div>

      <div className="m-6">
        <button className="text-lg font-bold text-white p-1 m-2 rounded-md shadow-xl bg-blue-500">
          <a
            href="https://drive.google.com/drive/folders/1T790sGdI0Vs2P-5R0BZXxKQKvW9G9Zkw"
            target="_blank"
          >
            Certificates
          </a>
        </button>
        <div className="flex">
          <a href="https://instagram.com/akash24777?igshid=NzZlODBkYWE4Ng=="target="_blank">
            <img src={insta} className="h-10 mt-10 m-2 w-8"  />
          </a>

          <a href="https://github.com/akash247777" target="_blank" >
            <img src={github} className="h-10 mt-10 m-2 w-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-s-g-746622264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <img src={facebook} className="h-10 mt-10 m-2 w-10" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
