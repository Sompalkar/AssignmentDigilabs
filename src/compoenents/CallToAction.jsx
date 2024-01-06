import React from "react";
import { IoMdCard } from "react-icons/io";
import { RiCustomerServiceLine } from "react-icons/ri";
function CallToAction() {
  return (
    <div>
      <div className=" flex justify-center items-center text-center flex-col pt-48 max-w-[704px] m-auto gap-12">
        <div className=" text-5xl md:px-4 ">
          <p>Unlock Limitless Possibilities with Our New Card Solutions</p>
        </div>
        <div className=" md:flex  justify-center items-center text-center gap-6  ">
          <div className="bg-[#582066] flex  gap-8  items-center text-center px-4 py-2 rounded-lg text-white   ">
            Unlock your card
            <span>
              <IoMdCard />
            </span>
          </div>
          <br></br>
          <div className=" bg-[#EEEFEF] flex justify-center items-center text-center  gap-8 px-4 py-2 rounded-lg ">
            Customer support
            <span>
              <RiCustomerServiceLine />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
