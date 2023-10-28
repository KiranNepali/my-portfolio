import React from "react";
import MovieImg from "../assets/movie.png";
import EcommerceImg from "../assets/ecommerce.png";
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
                <a href="">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Demo
                  </button>
                </a>
                <a href="">
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
                <a href="">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Demo
                  </button>
                </a>
                <a href="">
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
                <a href="">
                  <button className="text-center px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg rounded-lg">
                    Demo
                  </button>
                </a>
                <a href="">
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
