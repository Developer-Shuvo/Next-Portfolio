"use client"; // ✅ required for Framer Motion if needed

import { IconCloud } from "../ui/icon-cloud"; // ✅ relative path to avoid alias issue

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function AnimationTechnology() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex flex-col w-full  h-[450px] md:h-[450px] lg:h-[600px] items-center justify-center overflow-hidden">
      <IconCloud images={images} />
          <h1 className="text-stone-300 prv ">Technology Meets Creativity</h1>
    </div>
  );
}

export default AnimationTechnology;
