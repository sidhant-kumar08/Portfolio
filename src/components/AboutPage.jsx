import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-5/6 md:w-1/2">
        <ul className="">
          <li>
            <span>✈ </span>
            <a href="/" className="underline">
              New Delhi , India
            </a>
          </li>
          <li className="">
            <span>👩‍💻 </span>Mainly working with{" "}
            <span className="text-[#FFA62F] font-semibold">MERN</span>
          </li>
          <li className="">
          <span>🤟 </span>Currently Exploring{" "}
          <span className="text-[#FFA62F] font-semibold">Next.Js </span>
          &
          <span className="text-[#FFA62F] font-semibold"> TypeScript</span>
          </li>
        </ul>
        <div className="mt-2 text-gray-600">
          <h1>
            Hey Coders, I'm <span className="text-[#FFA62F] font-semibold">Sidhant Kumar</span> a 19 YR old programmer. I am a final-year B.C.A student at MDU University, with a passion
            for{" "}
            <span className="text-[#FFA62F] font-semibold">
              Software development
            </span>
            .
            <div className="mt-2">My primary expertise lies in building dynamic and responsive
            websites using{" "}
            <span className="text-[#212121ce] font-bold">React</span> and{" "}
            <span className="text-[#212121ce] font-bold">Tailwind</span>, paired
            with robust backend solutions using{" "}
            <span className="text-[#212121ce] font-bold">Express</span>,{" "}
            <span className="text-[#212121ce] font-bold">Node</span> and{" "}
            <span className="text-[#212121ce] font-bold">MongoDB</span>.
            <div className="mt-2">You can
            explore some of the projects I've developed with these technologies
            in the <span className="text-[#FFA62F] font-semibold"><Link to='/projects'>"Projects"</Link></span> section.</div></div>
            <div className="mt-2">In addition to the MERN stack, I am currently exploring Next.js and TypeScript to expand my skill set and stay up-to-date with the latest trends in web development.</div>
            <div className="mt-2">My journey as a developer is driven by a continuous desire to learn and innovate, tackling challenging projects that push my technical boundaries.</div>

            <div className="mt-2">Feel free to check out the "Projects" section to see some of the applications I've developed. Each project showcases my commitment to coding best practices, modern design principles, and a strong focus on user experience. Let's connect and collaborate to build something amazing!</div>
          </h1>
        </div>

        
      </div>
    </div>
  );
}

export default AboutPage;
