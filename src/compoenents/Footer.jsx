import React from "react";
import logo from "../assets/Vector.svg";
import Socials from "../assets/Content.svg";

function Footer() {
  return (
    <div className="pt-24 max-w-[1216px] m-auto">
      <div className="flex justify-center flex-col gap-10 items-center text-center">
        <div className="text-start pl-12 md:flex flex-col justify-center items-center gap-4 max-w-[512px]">
          <p className="mb-4">
            <img src={logo} alt="Logo" />
          </p>
          <p>
            Mode UI is a comprehensive design system that empowers designers and
            developers to create cohesive and visually stunning user interfaces
            across various platforms and devices
          </p>
        </div>
      </div>

      <div className="justify-center gap-9 pt-12 md:flex items-center text-center max-w-[1216px]">
        {[
          {
            title: "Company",
            links: ["About us", "Pricing", "Contact Us", "Features"],
          },
          {
            title: "Products",
            links: [
              "Figma design system",
              "Ios kit",
              "Android kit",
              "Wireframe",
            ],
          },
          {
            title: "Resources",
            links: [
              "Templates",
              "Landing Pages",
              "Documentation",
              "Comp Library",
            ],
          },
          {
            title: "Legal",
            links: [
              "Privacy Policy",
              "Terms Conditions",
              "Disclaimer",
              "Affiliate program",
            ],
          },
          {
            title: "Support",
            links: ["Help center", "Raise ticket", "Report", "Refund"],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="w-[208px] items-start pl-12 mt-6 flex flex-col md:items-start"
          >
            <p className="text-black font-bold text-lg">{section.title}</p>
            {section.links.map((link, linkIndex) => (
              <p key={linkIndex}>{link}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="pl-12 mt-12 md:flex justify-center flex-col items-center gap-5">
        <p className="w-36">
          <img src={Socials} alt="Socials" />
        </p>
        <br />
        <p>© 2023 Mode UI Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
