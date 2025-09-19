import Hero from "@/Components/Hero/Hero";
import HeroTwo from "@/Components/Hero2/Hero2";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
      </div>

      {/* <div className="max-w-[1920px] hero min-h-[100vh] px-4 md:px-[100px] lg:px-[260px] mx-auto items-center flex ">
        <HeroTwo />
      </div> */}
    </>
  );
}
