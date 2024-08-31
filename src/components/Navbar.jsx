import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center items-center py-4">
    <div className="flex justify-between w-4/5 p-6">
        <div className="text-lg font-semibold hover:scale-105 transition ease-linear duration-100 group">
            <Link to="/"><h1 className="group-hover:text-[#FFA62F]"><span className="text-[#FFA62F] group-hover:text-black">@</span>sidhant</h1></Link>
        </div>

        <div className="font-semibold underline text-orange-400 hover:scale-105">
          <Link target="blank" to="https://mail.google.com/mail/u/1/#inbox?compose=jrjtXLFVCCSvrFxXdZmmwtrXbbHVRkQClrVvpSvRzxzjkWtLJjqSkKJxdwlMZcVVSbPdtJvg">Hire Me</Link>
        </div>

        <div className="links">
        <ul className="flex gap-8">
              <NavLink to="/" className={({isActive}) => `hover:text-[#FFA62F] ${isActive ? 'text-[#FFA62F]' : ""} hover:scale-110 font-semibold transition ease-linear duration-100`}><li>Home</li></NavLink>
              <NavLink to="/about" className={({isActive}) => `hover:text-[#FFA62F] ${isActive ? 'text-[#FFA62F]' : ""} hover:scale-110 font-semibold transition ease-linear duration-100`}><li>About</li></NavLink>
              <NavLink to="/contact" className={({isActive}) => `hover:text-[#FFA62F] ${isActive ? 'text-[#FFA62F]' : ""} hover:scale-110 font-semibold transition ease-linear duration-100`}><li>Contact</li></NavLink>
              <NavLink to="/projects" className={({isActive}) => `hover:text-[#FFA62F] ${isActive ? 'text-[#FFA62F]' : ""} hover:scale-110 font-semibold transition ease-linear duration-100`}><li>Projects</li></NavLink>
              <button className="bg-[#FFA62F] font-semibold px-4 rounded-xl text-white hover:scale-105 transition duration-100 ease-linear hover:bg-white hover:text-black hover:border-[#FFA62F] hover:border"><NavLink to="https://drive.google.com/file/d/1eZsW2l5oHyo4njCWMnt_IUGIchfXBYLr/view?usp=sharing"><li>Resume</li></NavLink></button>
            </ul>
        </div>
    </div>
    
    
    
    </div>
  );
}

export default Navbar;
