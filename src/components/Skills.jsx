import React from "react";
import HTMLImage from "../assets/html-5.png";
import ReactImg from "../assets/react.png";
import CSSImg from "../assets/css.png";
import JavascriptImg from "../assets/javascript.png";
import GithubImg from "../assets/github.png";
import TailwindImg from "../assets/tailwind.png";

export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#201e2a] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full flex justify-center flex-col ">
        <div>
          <p className="text-4xl text-white font-bold  inline border-b-4 border-red-300">
            Skills
          </p>
          <p className="py-4 text-[#9DB2BF]">
            // Technologies that I'm familiar with.
          </p>
        </div>
        {/* images */}
        <div className="w-full text-center grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={HTMLImage} alt="" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={CSSImg} alt="" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={ReactImg} alt="" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={JavascriptImg} alt="" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="mx-auto my-4 w-24" src={TailwindImg} alt="" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={GithubImg} alt="" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}
