import Image from "next/image";
import React from "react";
import Button from "./button";
import logo from "@/../public/image/image 1.png";

const Herosection = () => {
  return (
    <div className="grid grid-flow-col gap-x-9">
      <div className="flex flex-col  h-[full] w-[full]   m-auto mt-3 ">
        <p className="font-bold ms-[80px] mt-14  text-white text-[30px] ">
          Building stellar
          <br /> websites for early <br /> startups
        </p>
        <p className="flex ms-[80px] text-white">
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt.
        </p>
        <div>
          <Button text="View our work" className="w-fit ms-20 mt-5  " />
          <Button
            text="View Pricing"
            isOutLine
            className="text-white text-sm border-none "
          />
        </div>
      </div>
      <div>
        <Image
          src={logo}
          width={500}
          height={500}
          alt="logo"
          className=" flex text-2xl mt-10  "
        />
      </div>
    </div>
  );
};

export default Herosection;
