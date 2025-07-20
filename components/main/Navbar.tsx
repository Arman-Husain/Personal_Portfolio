"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = ({ setShowModal }: { setShowModal: (val: boolean) => void }) => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo + Label */}
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Portfolio
          </span>
        </a>

        {/* Navigation Links */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-sm md:text-base">
            <a href="#about-me" className="cursor-pointer hover:text-cyan-400 transition">About me</a>
            <a href="#skills" className="cursor-pointer hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="cursor-pointer hover:text-cyan-400 transition">Projects</a>
            <a href="#experience" className="cursor-pointer hover:text-cyan-400 transition">Experience</a>
            <button
              onClick={() => setShowModal(true)}
              className="text-white hover:text-cyan-400 transition"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Image src={social.src} alt={social.name} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
