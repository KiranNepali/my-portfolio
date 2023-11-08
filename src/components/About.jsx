import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#201e2a] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid gap-8 grid-cols-2">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-300 ">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5">
          <div>
            <p className="sm:text-right text-3xl font-bold text-gray-300">
              Hi, I'm Kiran Nepali. Nice to meet you. Please take a look around
              .
            </p>
          </div>
          <div>
            <p className="text-[#9DB2BF]">
              I'm a determined and highly motivated person with a strong desire
              to succeed in the information technology field. I'm passionate
              about creating useful web applications and believe in the
              importance of teamwork and collective progress. I've improved the
              efficiency of customizing, implementing, and testing user-friendly
              designs through my personal and academic projects. I'm eager to
              continue learning and gaining more programming experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
