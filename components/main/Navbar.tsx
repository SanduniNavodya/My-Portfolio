
import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link for navigation

// Socials array with links and icon sources
const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.png",  // Path to the LinkedIn icon
    url: "https://www.linkedin.com/in/sanduni-navodya-b3a370282",  // URL for LinkedIn
  },
  {
    name: "GitHub",
    src: "/gitwhite.png",  // Path to the GitHub icon
    url: "https://github.com/SanduniNavodya",  // URL for GitHub
  },
  {
    name: "Facebook",
    src: "/facebook.png",  // Path to the Facebook icon
    url: "https://www.facebook.com/profile.php?id=100078203752777",  // URL for Facebook
  },
  {
    name: "Instagram",
    src: "/instagram.png",  // Path to the Instagram icon
    url: "https://www.instagram.com/sanduninavodya01/profilecard/?igsh=MWM2czFscmUwaHdjZg==",  // URL for Instagram
  },
];

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo and Home Link */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        {/* Navigation Links */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
