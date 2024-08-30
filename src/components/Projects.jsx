import React from "react";

function Projects() {
  return (
    <>
      <section>
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
            <div className="project  border border-[#ffa52fad] rounded-lg p-6">
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="font-bold font-[geist] text-nowrap text-2xl">
                    PORTFOLIO
                  </h1>
                </div>

                <div className="flex gap-2">
                  <a
                    target="blank"
                    className="hover:scale-110 hover:"
                    href="/"
                  >
                    <img height={30} width={30} src="./link.svg" alt="" />
                  </a>
                  <a target="blank" className="hover:scale-110 " href="/">
                    <img height={30} width={30} src="./github.svg" alt="" />
                  </a>
                </div>
              </div>

              <div>
                <p className="tracking-tighter">
                  Portfolio website for me to showcase my skills and projects
                  i've made.
                </p>
              </div>

              <div className="proj-tech mt-2 flex gap-4">
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  React
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
                    TODO APP
                  </h1>
                </div>

                <div className="flex gap-2">
                  <a
                    target="blank"
                    className="hover:scale-110 hover:"
                    href="https://proj5-todo-redux.vercel.app/"
                  >
                    <img height={30} width={30} src="./link.svg" alt="" />
                  </a>
                  <a
                    target="blank"
                    className="hover:scale-110 "
                    href="https://github.com/sidhant-kumar08/proj5-todo-redux"
                  >
                    <img height={30} width={30} src="./github.svg" alt="" />
                  </a>
                </div>
              </div>

              <div>
                <p className="tracking-tighter">
                  A modern Todo application built with React, Redux, and
                  Tailwind CSS. This app provides a clean and responsive
                  interface for managing tasks with ease.
                </p>
              </div>

              <div className="proj-tech mt-2 flex gap-4">
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  React
                </button>
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  Tailwind
                </button>
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  Redux
                </button>
              </div>
            </div>
            <div className="project  border border-[#ffa52fad] rounded-lg p-6">
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="font-bold font-[geist] text-nowrap text-2xl">
                    NOTEY
                  </h1>
                </div>

                <div className="flex gap-2">
                  <a
                    target="blank"
                    className="hover:scale-110 hover:"
                    href="https://proj4-notey-react.vercel.app/"
                  >
                    <img height={30} width={30} src="./link.svg" alt="" />
                  </a>
                  <a target="blank" className="hover:scale-110 " href="https://github.com/sidhant-kumar08/proj4-notey-react">
                    <img height={30} width={30} src="./github.svg" alt="" />
                  </a>
                </div>
              </div>

              <div>
                <p className="tracking-tighter">
                  Notey is a simple, yet effective note-taking application built
                  using React. It allows users to create, and delete notes.
                </p>
              </div>

              <div className="proj-tech mt-2 flex gap-4">
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  React
                </button>
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  CSS
                </button>
              </div>
            </div>
            <div className="project  border border-[#ffa52fad] rounded-lg p-6">
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="font-bold font-[geist] text-nowrap text-2xl">
                    CRUD APP
                  </h1>
                </div>

                <div className="flex gap-2">
                  <a
                    target="blank"
                    className="hover:scale-110 hover:"
                    href="https://proj3-crud-app-node.vercel.app/"
                  >
                    <img height={30} width={30} src="./link.svg" alt="" />
                  </a>
                  <a target="blank" className="hover:scale-110 " href="https://github.com/sidhant-kumar08/proj3-crud-app-node">
                    <img height={30} width={30} src="./github.svg" alt="" />
                  </a>
                </div>
              </div>

              <div>
                <p className="tracking-tighter">
                  Crud app made using Node.js and Express.js & Mongo DB to store
                  the data. EJS is used to create frontend for this project.
                </p>
              </div>

              <div className="proj-tech mt-2 flex gap-4">
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  Node
                </button>
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  Express
                </button>
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  MongoDB
                </button>
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  EJS
                </button>
              </div>
            </div>
            <div className="project  border border-[#ffa52fad] rounded-lg p-6">
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="font-bold font-[geist] text-nowrap text-2xl">
                    TIC TAC TOE
                  </h1>
                </div>

                <div className="flex gap-2">
                  <a
                    target="blank"
                    className="hover:scale-110 hover:"
                    href="https://test2-tictactoe.netlify.app/"
                  >
                    <img height={30} width={30} src="./link.svg" alt="" />
                  </a>
                  <a target="blank" className="hover:scale-110 " href="https://github.com/sidhant-kumar08/proj2-tic-tac-toe">
                    <img height={30} width={30} src="./github.svg" alt="" />
                  </a>
                </div>
              </div>

              <div>
                <p className="tracking-tighter">
                  Tic Tac Toe game made using Javascript & HTML, CSS. Game logic
                  is made using javascript, Added a Game counter to detect how
                  many games user have played.
                </p>
              </div>

              <div className="proj-tech mt-2 flex gap-4">
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  JavaScript
                </button>
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  CSS
                </button>
                <button className="px-2 rounded-xl border border-gray-50 bg-[#ffa52fad]">
                  Html
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
