import { cn } from "@/lib/utils";
// import { Marquee } from "@/registry/magicui/marquee";
import { Marquee } from "@/Components/ui/marquee";
import img1 from "@/assets/Slider-img/grandfather.png";
import img2 from "@/assets/Slider-img/man (1).png";
import img3 from "@/assets/Slider-img/man.png";
import img4 from "@/assets/Slider-img/tax-inspector.png";
import img5 from "@/assets/Slider-img/young-man.png";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://i.postimg.cc/QNvJq9tF/grandfather.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://i.postimg.cc/mgs30v7R/man.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/tCPtvqZ2/tax-inspector.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/XYkK3sg5/young-man.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/QNvJq9tF/grandfather.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/XYkK3sg5/young-man.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
<figure
  className={cn(
    "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
    "border-white/20 backdrop-blur-md bg-gradient-to-br from-[#969696ca] via-[#e1dbdbc0] via-[rgb(55,71,79)] via-[#455A64] to-[#a0f0e1d9]"
  )}
>
  {/* Subtle Radial Glow Overlay */}
  <div
    className="absolute inset-0 rounded-xl pointer-events-none"
    style={{
      background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)",
    }}
  />

  <div className="flex flex-row items-center gap-2 relative z-10">
    <img
      height={32}
      width={32}
      className="rounded-full"
      alt=""
      src={img}
    />
    <div className="flex flex-col">
      <figcaption className="text-sm font-medium text-white">
        {name}
      </figcaption>
      <p className="text-xs font-medium text-stone-400">{username}</p>
    </div>
  </div>
  <blockquote className="mt-2 text-sm text-stone-200 relative z-10">
    {body}
  </blockquote>
</figure>

  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  mt-20 md:mt-42 ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4  "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>
    </div>
  );
}

export default MarqueeDemo;
