import { ArrowRightCircle } from "lucide-react";
import React from "react";
import {Link} from 'react-router-dom'

function HomeProjects() {
  return (
    <>
      <div className="title">
        <div className="flex justify-center gap-2 items-center group">
          <h1 className="text-xl font-semibold text-black font-[geist]">
            Projects
          </h1>

          <div className="group">
            <img
              className="group-hover:rotate-45 ease-linear transition duration-100"
              height={20}
              width={20}
              src="./check.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="projects-box flex justify-center font-mono p-2 mt-6">
        <div className="center-box w-full md:w-1/2 flex flex-col gap-2">
          {/* start project list */}
          <div className="project  border border-[#ffa52fad] rounded-lg p-6">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="font-bold font-[geist] text-nowrap text-2xl">
                  Rojgaar
                </h1>
              </div>

              <div className="flex gap-2">
                <a
                  target="blank"
                  className="hover:scale-110 hover:"
                  href="https://rojgaar.vercel.app/"
                >
                  <img height={30} width={30} src="./link.svg" alt="" />
                </a>
                <a
                  target="blank"
                  className="hover:scale-110 "
                  href="https://github.com/sidhant-kumar08/Rojgaar"
                >
                  <img height={30} width={30} src="./github.svg" alt="" />
                </a>
              </div>
            </div>

            <div>
              <p className="tracking-tighter">
                Rojgaar is a job portal built on the MERN stack, connecting job
                seekers with employers.
              </p>
            </div>

            <div className="proj-tech mt-3 flex flex-wrap gap-1">
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                ReactJS
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                NodeJS
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                ExpressJS
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                MongoDB
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                Redux
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                Shadcn
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                Tailwind
              </button>
            </div>
          </div>

          <div className="project  border border-[#ffa52fad] rounded-lg p-6">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="font-bold font-[geist] text-nowrap text-2xl">
                  Jammix
                </h1>
              </div>

              <div className="flex gap-2">
                <a
                  target="blank"
                  className="hover:scale-110 hover:"
                  href="https://jammix.vercel.app/"
                >
                  <img height={30} width={30} src="./link.svg" alt="" />
                </a>
                <a
                  target="blank"
                  className="hover:scale-110 "
                  href="https://github.com/sidhant-kumar08/Jammix"
                >
                  <img height={30} width={30} src="./github.svg" alt="" />
                </a>
              </div>
            </div>

            <div>
              <p className="tracking-tighter">
                Jammix is a playlist-sharing platform that allows users to share
                their favorite playlists from Spotify and YouTube.
              </p>
            </div>

            <div className="proj-tech mt-3 flex flex-wrap gap-1">
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                ReactJS
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                NodeJS
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                ExpressJS
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                MongoDB
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                Tailwind
              </button>
            </div>
          </div>

          <div className="project  border border-[#ffa52fad] rounded-lg p-6">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="font-bold font-[geist] text-nowrap text-2xl">
                  Lock-It
                </h1>
              </div>

              <div className="flex gap-2">
                <a
                  target="blank"
                  className="hover:scale-110 hover:"
                  href="https://lockit-one.vercel.app/"
                >
                  <img height={30} width={30} src="./link.svg" alt="" />
                </a>
                <a
                  target="blank"
                  className="hover:scale-110 "
                  href="https://github.com/sidhant-kumar08/Lock-It"
                >
                  <img height={30} width={30} src="./github.svg" alt="" />
                </a>
              </div>
            </div>

            <div>
              <p className="tracking-tighter">
                Lockit is a secure password management tool designed to help
                users store and manage their passwords effortlessly.
              </p>
            </div>

            <div className="proj-tech mt-3 flex flex-wrap gap-1">
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                ReactJS
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                NodeJS
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                ExpressJS
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                MongoDB
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                Tailwind
              </button>
              <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                JWT auth
              </button>
            </div>
          </div>


          <div className="flex justify-center tracking-tighter">
          <Link to='/projects'><button className="hover:opacity-80 flex justify-center items-center gap-2 py-1 text-black bg-[#ffa52fad]  font-semibold text-lg cursor-pointer px-4 rounded-xl border border-gray-50">See More Projects <ArrowRightCircle /></button></Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default HomeProjects;
