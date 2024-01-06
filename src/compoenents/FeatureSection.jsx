import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import worldsvg from "../assets/Bigicons.svg";
import locksvg from "../assets/locksvg.svg";
import KeySvg from "../assets/keysvg.svg";

function FeatureSection() {
  return (
    <div>
      <div className="">
        <div className=" flex justify-between items-center m-auto flex-col mt-24  pb-8 max-w-[548px] text-center gap-8">
          <p className=" text-black text-4xl ">
            Elevating Card Programs with Cutting-Edge Technology{" "}
          </p>
          <p className=" text-black text-lg ">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <p className="   text-center flex  gap-6 items-center text-[#582066] text-lg">
            Compare all Pro features{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </p>
        </div>
        <div className="  md:flex  max-w-[1216px]  justify-between items-center text-center m-auto ">
          <div className=" flex  max-w-96 mt-12 gap-6 flex-col m-auto  items-center ">
            <img src={worldsvg} alt=" Pic1" />
            <p className=" text-xl text-bold ">Globally Accepted</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className=" flex  max-w-96 mt-12 gap-6 flex-col m-auto  items-center ">
            <img src={KeySvg} alt=" Pic1" />
            <p className=" text-xl text-bold ">Biometric Integrated</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className=" flex  max-w-96 mt-12 gap-6 flex-col m-auto  items-center ">
            <img src={locksvg} alt=" Pic1" />
            <p className=" text-xl text-bold ">Fully Secured</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
