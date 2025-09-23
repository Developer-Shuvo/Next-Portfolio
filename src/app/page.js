import Experience from "@/Components/Experience/Experience";
import Hero from "@/Components/Hero/Hero";
import MarqueeDemo from "@/Components/Slider/Slider";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Experience />

        <MarqueeDemo />
      </div>
    </>
  );
}
