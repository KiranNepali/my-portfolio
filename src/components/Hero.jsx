import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Hero() {
  return (
    <div name="home" className="w-full h-screen bg-[#201e2a]">
      {/* container for our her osection  */}
      <div className="max-w-[1000px] mx-auto px-8 flex justify-center flex-col h-full">
        <p className="text-[#FFC436] ">Hi, My name is</p>
        <h1 className=" sm:text-7xl text-4xl font-bold text-gray-300">
          Kiran Nepali
        </h1>
        <h2 className="text-4xl sm:text-7xl  font-bold  text-gray-300">
          I'm Frontend Developer
        </h2>
        <p className="py-4 text-[#9DB2BF]">
          Dedicated and passionate about staying updated on industry best
          practices and coding standards!
        </p>
        <div>
          <button className=" text-gray-300 flex justify-center  items-center border-2 px-6 py-2 hover:bg-[#FFC436] hover:border-[#FFC436] group">
            View projects?
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
