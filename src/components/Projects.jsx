import React from "react";
import EcommerceImg from "../assets/ecommerce.png";
import RecipeApp from "../assets/find-recipe.png";
import YoutubeClone from "../assets/youtube-clone.png";
import PortfolioImg from "../assets/portfolio.png";
import "../index.css";

export default function Projects() {
  return (
    <div name="projects" className="w-full md:h-screen bg-[#201e2a] text-white">
      {/* container  */}
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full flex justify-center flex-col">
        {/* heading / */}
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold  inline border-b-4 border-red-300">
            Projects
          </p>
          <p className="py-4 text-[#9DB2BF]">// Projects that I had done.</p>
        </div>
        {/* grid  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid container  */}
          <div
            style={{
              backgroundImage: `url(${EcommerceImg})`,
            }}
            className="shadow-lg shadow-[#040c16] container flex  justify-center items-center mx-auto rounded-md group content-div"
          >
            {/* hover effect  */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold tracking-wider text-white ">
                Ecommerce
              </span>
              <div className="pt-8 text-center ">
                <a href="https://compassion-candles.vercel.app/">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/KiranNepali/compassion-candles">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            {/* hover end  */}
          </div>
          <div
            style={{
              backgroundImage: `url(${RecipeApp})`,
            }}
            className="shadow-lg shadow-[#040c16] container flex  justify-center items-center mx-auto rounded-md group content-div"
          >
            {/* hover effect  */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold tracking-wider text-white ">
                Find Recipe
              </span>
              <div className="pt-8 text-center ">
                <a href="https://find-recipe-seven.vercel.app/">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/KiranNepali/find-recipe">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            {/* hover end  */}
          </div>
          <div
            style={{
              backgroundImage: `url(${YoutubeClone})`,
            }}
            className="shadow-lg shadow-[#040c16] container flex  justify-center items-center mx-auto rounded-md group content-div"
          >
            {/* hover effect  */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold tracking-wider text-white ">
                Youtube clone
              </span>
              <div className="pt-8 text-center ">
                <a href="https://youtube-clone-delta-ecru.vercel.app/">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/KiranNepali/youtube-clone">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            {/* hover end  */}
          </div>
          {/* Close the div for Youtube clone project */}
          {/* Portfolio project */}
          <div
            style={{
              backgroundImage: `url(${PortfolioImg})`, // Adjust with your actual image variable
            }}
            className="shadow-lg shadow-[#040c16] container flex  justify-center items-center mx-auto rounded-md group content-div"
          >
            {/* hover effect  */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold tracking-wider text-white ">
                Portfolio
              </span>
              <div className="pt-8 text-center ">
                <a href="https://youtube-clone-delta-ecru.vercel.app/">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/KiranNepali/my-portfolio">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            {/* hover end  */}
          </div>
        </div>
      </div>
    </div>
  );
}
