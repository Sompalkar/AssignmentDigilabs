import React from "react";

function Stats() {
  return (
    <div>
      <div className="  md:flex justify-around items-center text-center m-auto max-w-[1440px] pt-28  gap-12 ">
        <div className="m-auto max-w-[248px] min-h-48  sm:w-full    ">
          <p className="pt-2 text-3xl  text-[#582066] min-h-14 items-center font-bold " >2 Million</p>
          <p className=" text-black font-bold  min-h-5 pt-2 " >Customers</p>
          <p className=" pt-6 text-[#5A6475]" >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt
            utconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
        <div className="m-auto max-w-[248px] min-h-48 sm:w-full    ">
          <p className="pt-2 text-[#582066] min-h-14 items-center font-bold text-3xl" >1k</p>
          <p className=" text-black  min-h-5 pt-2 font-bold " >Downloads</p>
          <p className=" pt-6 text-[#5A6475]" >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
        <div className="m-auto max-w-[248px] min-h-48  sm:w-full   ">
          <p className="pt-2 text-3xl text-[#582066] min-h-14 items-center font-bold " >$73 Million</p>
          <p className="pt-2 text-black font-bold  min-h-5  " >Transaction</p>
          <p className="pt-6 text-[#5A6475]" >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
        <div className="m-auto max-w-[248px] min-h-48  sm:w-full   ">
          <p className="pt-2 text-3xl  text-[#582066] min-h-14 items-center font-bold " >2.0</p>
          <p className="pt-2 text-black font-bold  min-h-5  " >Latest Version</p>
          <p className=" pt-6 text-[#5A6475]" >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
