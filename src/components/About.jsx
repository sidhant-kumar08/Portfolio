import React from "react";

function About() {
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
            I am a final-year B.C.A student at MDU University, with a passion
            for{" "}
            <span className="text-[#FFA62F] font-semibold">
              Software development
            </span>
            . My primary expertise lies in building dynamic and responsive
            websites using{" "}
            <span className="text-[#212121ce] font-bold">React</span> and{" "}
            <span className="text-[#212121ce] font-bold">Tailwind</span>, paired
            with robust backend solutions using{" "}
            <span className="text-[#212121ce] font-bold">Express</span>,{" "}
            <span className="text-[#212121ce] font-bold">Node</span> and{" "}
            <span className="text-[#212121ce] font-bold">MongoDB</span>. You can
            explore some of the projects I've developed with these technologies
            in the "Projects" section.
          </h1>
        </div>

        <div class=" flex flex-row gap-1 items-center my-2 group cursor-pointer w-fit">
          <a
            class=" font-bricolage font-semibold text-lg group-hover:underline transition-all "
            href="/about"
          >
            See more about me
          </a>
          <div class=" group-hover:-rotate-45 transition-all">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
