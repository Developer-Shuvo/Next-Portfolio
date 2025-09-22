// components/Experience.jsx
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: "/icons/icon1.png", // replace with your actual icons
  },
  {
    id: 2,
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: "/icons/icon2.png",
  },
  {
    id: 3,
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: "/icons/icon3.png",
  },
  {
    id: 4,
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: "/icons/icon4.png",
  },
];

const Experience = () => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-0">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative p-6 rounded-2xl shadow-lg text-white
              bg-gradient-to-br from-[#130428] via-[#251043] via-[#38126D] via-[#261045] to-[#190634]
              overflow-hidden"
          >
            {/* Radial background effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-60 pointer-events-none"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)",
              }}
            ></div>

            {/* Card content */}
            <div className="relative z-10 flex flex-col items-start space-y-4">
              <Image
                src={card.img}
                alt={card.title}
                width={60}
                height={60}
                className="object-contain"
              />
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.desc}</p>
              <button className="px-5 py-2 rounded-full border border-white/50 hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
