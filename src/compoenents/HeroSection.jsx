import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import meshBackground from "../assets/Mesh.png";  

function HeroSection() {
  return (
    <div className=" pl-4 bg-[540px] flex align-middle justify-center m-auto mt-8">
      <div
        className="max-w-[832px] align-middle flex justify-center flex-col m-auto"
        style={{
          background: `url(${meshBackground})`,
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[832px] ">
          <div className="flex justify-center text-center flex-col">
            <p className="pt-2">Seamless experience</p>
          </div>
          <div className="flex justify-center text-center flex-col">
            <p className="pt-2 text-7xl">
              Unleashing the Next Generation of Card Solutions
            </p>
            <p className="pt-2 text-xl">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </p>
          </div>
          <div>
            <div className="flex gap-6 m-auto justify-center text-center mt-4 flex-col">
              <button className="m-auto pd-2 text-white rounded-lg p-4 px-6 bg-[#582066] max-w-96">
                <p className="flex justify-center gap-4 text-center items-center">
                  Unlock Your Card{" "}
                  <span>
                    <FaArrowRightLong />
                  </span>{" "}
                </p>
              </button>
              <p>*No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
