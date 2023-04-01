import React from "react";
import Sparkles from "../Animations/Sparkles";
import StarAnimation from "../Animations/StarAnimation";

const Welcome = ({ onClick }: { onClick: () => void }) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <div
      id="Welcome"
      className="grid place-content-center h-screen w-screen p-4 "
    >
      <h1 className=" text-white text-7xl font-bold tracking-wide">
        Welcome{" "}
        <Sparkles>
          <span className=" relative bg-gradient-to-r to-purple-600 from-yellow-500 via-pink-500 text-transparent bg-clip-text ">
            Aditya Kumar
            {/* <StarAnimation /> */}
          </span>{" "}
        </Sparkles>
        !
      </h1>
      <div className="grid place-content-center mt-20 ">
        <button
          className="flex bg-neutral-500 rounded-md animate-bounce hover:animate-none"
          onClick={handleOnClick}
        >
          <span className="flex rounded-md bg-white px-3 py-2 font-semibold -translate-y-2 active:translate-y-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
