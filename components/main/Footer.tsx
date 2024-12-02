import React from "react";
import Link from "next/link";
import Image from "next/image";

// Socials array with links and icon sources
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

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-8 border-gradient-to-r from-purple-500 to-cyan-500">
              <Image
                src="/Sanduni.jpeg"
                alt="Sanduni Navodya"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 font-semibold text-lg">Sanduni Navodya</h2>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Education</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Image
                  src="/school.png"
                  alt="H/Theraputtal National School"
                  width={40}
                  height={40}
                  className="mr-4"
                />
                <div>
                  <p className="font-semibold text-white">H/Theraputtal National School</p>
                  <p className="text-gray-400 text-sm">2012 - 2021</p>
                </div>
              </li>
              <li className="flex items-center">
                <Image
                  src="/diploma.png"
                  alt="ICBT Southern Campus"
                  width={40}
                  height={40}
                  className="mr-4"
                />
                <div>
                  <p className="font-semibold text-white">ICBT Southern Campus</p>
                  <p className="text-gray-400 text-sm">2022</p>
                </div>
              </li>
              <li className="flex items-center">
                <Image
                  src="/uni.png"
                  alt="SLIIT"
                  width={40}
                  height={40}
                  className="mr-4"
                />
                <div>
                  <p className="font-semibold text-white">SLIIT</p>
                  <p className="text-gray-400 text-sm">2022 - Current</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Social Media</h3>
            <ul className="space-y-4">
              {Socials.map((social) => (
                <li key={social.name}>
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center space-x-3 group">
                      <Image
                        src={social.src}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span className="text-gray-300 group-hover:text-purple-500">
                        {social.name}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <Link href="mailto:sanduninavodya01@gmail.com">
                  <p className="text-gray-300 hover:text-purple-500">
                  Hire Me
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <p className="text-gray-300 hover:text-purple-500">Learn About Me</p>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <p className="text-gray-300 hover:text-purple-500">Share Your Ideas With Me</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-10 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Sanduni Navodya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
