"use client"; //ফ্রেমার মোশন ব্যবহারের জন্য এটি লাগে

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import icon1 from "@/assets/Experience-img/star (2).png";
import icon2 from "@/assets/Experience-img/cup.png";
import icon3 from "@/assets/Experience-img/drop.png";
import icon4 from "@/assets/Experience-img/light.png";

const cards = [
  {
    id: 1,
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: icon1,
  },
  {
    id: 2,
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: icon2,
  },
  {
    id: 3,
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: icon3,
  },
  {
    id: 4,
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: icon4,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-10">
      {/* Section Title */}
      <h1 className="text-3xl md:text-5xl flex text-center justify-center md:justify-start text-white font-normal mt-12 mb-6 md:mt-[60px] md:mb-[40px] prv">
        Experience
      </h1>

      {/* Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-0">
        {cards.map((card, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, amount: 0.2 }); 

          return (
            <motion.div


              ref={ref}
              key={card.id}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.08 }}
              className="relative p-4 rounded-2xl shadow-lg text-white
                bg-gradient-to-br from-[#130428] via-[#251043] via-[#38126D] via-[#261045] to-[#190634]
                overflow-hidden border-[#4F228D] border-t-4 cursor-pointer  "
            >
              {/* Radial background effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-60 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)",
                }}
              />

              {/* Card content */}
              <div className="relative z-10 flex py-6 gap-8 items-start space-y-4">
                <div>
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={115}
                    height={115}
                    className="object-contain flex items-center justify-center"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="text-xs text-gray-300">{card.desc}</p>
                  <button
                    className="mt-3 px-5 py-2 rounded-xl 
                      bg-[#2C1250] border border-[#693B93] 
                      text-white font-medium
                      transition-all duration-300 ease-in-out
                      hover:bg-white/5 hover:text-white 
                      hover:backdrop-blur-md hover:shadow-[0_0_15px_rgba(105,59,147,0.7)] 
                      hover:border-[#a678d2]"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
