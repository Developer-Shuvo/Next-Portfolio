import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Layout/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className=" w-full absolute top-0 z-[-2] 
        min-h-screen h-auto bg-[#11071f] "
      >
        <div className="w-full mx-auto overflow-hidden">
          <Navbar />
        </div>

        <div className="max-w-[1520px] mx-auto">
          <Hero />
        </div>
      </div>
    </>
  );
}
