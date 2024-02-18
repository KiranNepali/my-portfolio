import React from "react";
import Logo from "../assets/my-logo.png";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaRegNewspaper,
} from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  // function to show menu when hamburger clicked(false to true and vice versa)
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[90px] bg-[#201e2a] flex justify-between items-center text-center text-white px-16   ">
      <div className="logo text-bold text-center ">
        <img src={Logo} className="w-20" alt="" />
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={600}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={600}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={600}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={600}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={600}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger  */}
      {/* if clicked then handClick function is triggered */}
      {/* if nav is false show FaBars icon else show FaTimes icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* modile menu  */}
      {/* if nav is false then then hidden else we show the ul items */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 h-screen w-full bg-[#201e2a] flex flex-col gap-10 justify-center items-center"
        }
      >
        <li className="py-3 text-3xl ">
          <Link onClick={handleClick} to="home" smooth={true} duration={600}>
            Home
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={600}>
            About
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={600}>
            Skills
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={600}
          >
            Projects
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={600}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px]flex justify-between items-cente ml-[-100px] hover:ml-[-10px] duration-300 bg-[#526D82] py-2">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/kiran-nepali-964067271/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px]flex justify-between items-cente ml-[-100px] hover:ml-[-10px] duration-300 bg-[#526D82] py-2">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/KiranNepali"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px]flex justify-between items-cente ml-[-100px] hover:ml-[-10px] duration-300 bg-[#526D82] py-2">
            <a className="flex justify-between items-center w-full" href="">
              Facebook
              <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px]flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#526D82] py-2">
            <a className="flex justify-between items-center w-full" href="">
              Resume
              <FaRegNewspaper size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
