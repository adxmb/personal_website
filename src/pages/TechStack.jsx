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
      <h1>Tech Stack, Tools, and Technologies</h1>
      <IconCloud iconSlugs={iconSlugs} />
    </div>
  );
};

export default TechStack;
