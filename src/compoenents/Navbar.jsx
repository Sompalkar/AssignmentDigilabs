import React, { useState } from "react";
import logo from "../assets/Vector.svg";
import { IoExitOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col bg-white w-full mt-4">
      <div className="m-auto  w-full flex gap-6 pb-2">
        <div className=" pl-4 m-auto flex align-middle text-center  gap-6">
          <div className="  bg-slate-100 border-2 p-1 px-4 m rounded-full text-center align-middle ">
            Announcement
          </div>
          <div>We are happy to announce that we raised $2 Million in Seed Funding</div>
        </div>
      </div>

      <div className="flex flex-row justify-around items-center w-full mt-4 pb-4  text-black">
        <div className="">
          <img src={logo} alt="ModeUI" />
        </div>
        <div
          className={`flex text-bold text-black gap-6 md:hidden ${showMenu ? "flex flex-col" : "hidden"}`}
        >
          <p>Card access <span> <RiArrowDropDownLine/> </span></p>
          <p>Banking</p>
          <p>Processing</p>
          <p>About</p>
          <p>Carrier</p>
          <p>Contact</p>
        </div>
        <div className="hidden text-bold text-black gap-4 md:flex justify-between md:w-[450px]">
          <p>Card access</p>
          <p>Banking</p>
          <p>Processing</p>
          <p>About</p>
          <p>Carrier</p>
          <p>Contact</p>
        </div>
        <div>
          <button className="bg-slate-100  text-black text-bold p-2 w-40 text-center rounded-lg align-middle text-bold">
            <p className="flex justify-between text-center text-xl">
              Login
              <span>
                <IoExitOutline size={25} />
              </span>
            </p>
          </button>
        </div>
        <div className="md:hidden">
          <button
            className="bg-slate-100 p-2 text-center rounded-lg"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
