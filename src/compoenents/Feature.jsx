import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import pic1 from '../assets/Image ( 592_490 ) (1).png';
import pic2 from '../assets/Image ( 592_490 ).png';


function Feature() {
  return (
    <div className=" flex justify-between flex-col  ">
      <div>
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
      </div>

      <div className=" md:flex   m-auto justify-around gap-20 mt-12  ">
            <div className="m-auto  w-[500px] h-[490px]" ><img className=" " src={pic1} alt=""/></div>
            <div className="m-auto w-[500px] h-[490px] " ><img className=" " src={pic2} alt=""/></div>

      </div>
    </div>
  );
}

export default Feature;
