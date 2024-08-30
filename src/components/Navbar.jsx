import React from "react";

function Navbar() {
  return (
    <div className="flex justify-center items-center py-4">
    <div className="flex justify-between w-4/5 p-6">
        <div className="text-lg font-semibold hover:scale-105 transition ease-linear duration-100 group">
            <a href="/"><h1 className="group-hover:text-[#FFA62F]"><span className="text-[#FFA62F] group-hover:text-black">@</span>sidhant</h1></a>
        </div>

        <div className="font-semibold underline text-orange-400 hover:scale-105">
          <a target="blank" href="https://mail.google.com/mail/u/1/#inbox?compose=jrjtXLFVCCSvrFxXdZmmwtrXbbHVRkQClrVvpSvRzxzjkWtLJjqSkKJxdwlMZcVVSbPdtJvg">Hire Me</a>
        </div>

        <div className="links">
        <ul className="flex gap-8">
              <a href="" className="hover:text-[#FFA62F] hover:scale-110 font-semibold transition ease-linear duration-100"><li>Home</li></a>
              <a href="" className="hover:text-[#FFA62F] hover:scale-110 font-semibold transition ease-linear duration-100"><li>About</li></a>
              <a href="" className="hover:text-[#FFA62F] hover:scale-110 font-semibold transition ease-linear duration-100"><li>Contact</li></a>
              <a href="" className="hover:text-[#FFA62F] hover:scale-110 font-semibold transition ease-linear duration-100"><li>Projects</li></a>
            </ul>
        </div>
    </div>
    
    
    
    </div>
  );
}

export default Navbar;
