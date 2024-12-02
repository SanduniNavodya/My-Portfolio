import React from "react";
import HeroContent from "../sub/HeroContent";
import { StarField } from "../main/StarField";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Star Field Effect */}
      <div className="absolute inset-0 z-[2]">
        <StarField />
      </div>

      {/* Hero Content */}
      <div className="relative z-[3]">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;