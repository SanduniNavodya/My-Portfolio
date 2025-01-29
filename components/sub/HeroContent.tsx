"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = '/Sanduni Navodya - Resume.pdf'; 
    link.download = 'Sanduni Navodya - Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Data Science Undergraduate Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="block">Hello! I am</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Sanduni Navodya
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] text-justify"
        >
          I&apos;m a Data Science undergraduate with a strong foundation in machine learning,
          statistical analysis, and data visualization. I have experience working with real-world datasets
          to derive insights and build predictive models. Explore my projects and skills in data analysis,
          machine learning, and data-driven decision-making.
        </motion.p>

        {/* Download Resume Button */}
        <motion.button
          variants={slideInFromLeft(1)}
          onClick={handleDownload}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px]"
        >
          Download My Resume
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image src="/mainIconsdark.svg" alt="work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
