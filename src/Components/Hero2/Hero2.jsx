import Image from "next/image";
import React from "react";
import image from "@/assets/Hero-img/OBJECTS.png";

const HeroTwo = () => {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between">
        {/* Text section */}
        <div className="flex flex-col">
          <h1 className="text-[#1A1A1A] text-4xl md:text-6xl font-bold leading-[40px] md:leading-[70px]">
            Great Products <br />
            Are Built by <br />
            <span className="text-[#F60]">Great People</span>
          </h1>

          <p className="text-[#6A6664] text-md md:text-lg mt-3">
            Welcome to the Huipsov Career Hub
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <button
              className="text-white  text-sm md:px-4 px-2 py-2 md:py-3 rounded-lg bg-[#F60] 
           md:w-[230px] w-[200px] mt-10"
            >
              Apply through workable
            </button>
          </div>
        </div>

        {/* image */}
        <Image
          className="max-w-[300px] max-h-[200px] md:max-w-full md:max-h-full"
          width={600}
          height={430}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroTwo;
