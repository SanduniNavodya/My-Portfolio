"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.png",
    url: "https://www.linkedin.com/in/sanduni-navodya-b3a370282",
  },
  {
    name: "GitHub",
    src: "/gitwhite.png",
    url: "https://github.com/SanduniNavodya",
  },
  {
    name: "Facebook",
    src: "/facebook.png",
    url: "https://www.facebook.com/profile.php?id=100078203752777",
  },
  {
    name: "Instagram",
    src: "/instagram.png",
    url: "https://www.instagram.com/sanduninavodya01/profilecard/?igsh=MWM2czFscmUwaHdjZg==",
  },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop - 65, // Subtract navbar height
      behavior: "smooth",
    });
  }
};

const NavLinks = [
  { name: "About me", href: "about-me" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-full flex flex-row items-center justify-between px-4 md:px-10">
        {/* Logo and Home Link */}
        <a 
          href="#about-me" 
          onClick={(e) => handleNavClick(e, 'about-me')}
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex w-auto h-full items-center justify-between md:mr-20">
          <div className="flex items-center justify-between h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 space-x-8">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="cursor-pointer hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Social Media Icons */}
        <div className="hidden md:flex flex-row gap-5">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-[#030014] border-t border-[#7042f861] md:hidden">
            <div className="flex flex-col p-4">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4 mb-4">
                {NavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.href}`}
                    className="text-gray-200 hover:text-white"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              {/* Mobile Social Media Icons */}
              <div className="flex flex-row gap-4 pt-4 border-t border-[#7042f861]">
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
