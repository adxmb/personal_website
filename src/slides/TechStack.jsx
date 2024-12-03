import React from "react";
import { IconCloud } from "../components/IconCloud";

const TechStack = () => {
  const iconSlugs = [
    "apache",
    "c",
    "css3",
    "git",
    "github",
    "hibernate",
    "html5",
    "java",
    "javascript",
    "junit5",
    "mathworks",
    "nodedotjs",
    "npm",
    "openai",
    "perl",
    "postgresql",
    "python",
    "r",
    "react",
    "typescript",
    "visualstudiocode",
    "wireshark",
  ];

  return (
    <div>
      <a>Tech Stack, Tools, and Technologies</a>
      <IconCloud iconSlugs={iconSlugs} />
    </div>
  );
};

export default TechStack;
