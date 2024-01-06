import React from "react";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/svg2.svg";
import svg3 from "../assets/svg3.svg";
import svg4 from "../assets/svg4.svg";
import svg5 from "../assets/svg5.svg";
import svg6 from "../assets/svg6.svg";
import svg7 from "../assets/svg7.svg";

function LogoCloud() {
  const svgImages = [svg1, svg2, svg3, svg4, svg5, svg6, svg7]; // add all your SVGs to this array

  return (
    <div className="mt-24">
      <div className="flex flex-wrap justify-center  ">
        {svgImages.map((svg, index) => (
          <img
            key={index}
            src={svg}
            alt={`svg-${index + 1}`}
            className="my-2 mx-6 w-28 "
          />
        ))}
      </div>
    </div>
  );
}

export default LogoCloud;



