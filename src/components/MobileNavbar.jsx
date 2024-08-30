import React, { useState } from "react";

function MobileNavbar() {

    const [mobileMenu, setMobileMenu] = useState(true);

    const handleClick = () => {
        setMobileMenu(!mobileMenu);
        
    }

  return (
    <>
      <div className="flex  justify-between items-center align-middle py-2 px-4">
        <div className="text-lg font-semibold mt-2">
          <a href="/">
            <h1 className="">
              <span className="text-[#FFA62F] group-hover:text-black">@</span>
              sidhant
            </h1>
          </a>
        </div>

        <div className={`${mobileMenu ? "" : 'rotate-45 transition ease-linear duration-100'}`}>
            <button onClick={handleClick} ><img height={30} width={30} src="./mobileMenu.svg" alt="" /></button>
        </div>
      </div>

      <div className={`bg-white h-screen w-screen fixed z-40 flex font-bold text-zinc-700 flex-col gap-10 py-20 items-center ${mobileMenu ? 'hidden' : 'block'}`}>
            <div>
                <button><a href="">Home</a></button>
            </div>
            <div>
                <button><a href="">Skills</a></button>
            </div>
            <div>
                <button><a href="">Projects</a></button>
            </div>
            <div>
                <button><a href="">About</a></button>
            </div>
      </div>
    </>
  );
}

export default MobileNavbar;
