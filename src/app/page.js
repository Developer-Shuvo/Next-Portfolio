import AnimationTechnology from "@/Components/Animation_Technology/Animation_Technology";
import Experience from "@/Components/Experience/Experience";
import Hero from "@/Components/Hero/Hero";
import MarqueeDemo from "@/Components/Slider/Slider";


import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[1920px] min-h-[100vh] mx-auto px-4 md:px-[40px] lg:px-[120px] xl:px-[200px]">
        <Hero />
        <AnimationTechnology/>
        <Experience />
      </div>
      <MarqueeDemo />
    </>
  );
}
