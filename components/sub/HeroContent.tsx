"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      {/* Main Hero Section */}
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
              Fullstack Developer Portfolio
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project exprience
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            HI, I&apos;m Arman Husain 👋 — a passionate Full Stack Developer currently pursuing my B.Tech.

            I love crafting clean, interactive, and modern web interfaces with tools like React, Tailwind CSS, and Next.js.
            I constantly strive to learn new technologies and contribute to meaningful projects.
          </motion.p>

          <motion.button
            variants={slideInFromLeft(1)}
            className="h-[50px] w-[200px] bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
            onClick={() => setShowModal(true)}
          >
            Learn More!
          </motion.button>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>

      {/* Modal Popup with outside click */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-[90%] max-w-lg p-6 rounded-2xl border border-purple-500/40 bg-[#1a1a2b]/80 shadow-2xl"
            >
              <button
                className="absolute top-3 right-4 text-2xl font-bold text-gray-400 hover:text-red-500 transition duration-200"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                About Me
              </h2>
              <p className="text-sm leading-6 text-gray-300">
                Hi, I'm <strong>Arman Husain</strong> 👋
                <br />
                <br />
                I’m a second-year B.Tech Computer Science student with a strong passion for web development and open-source collaboration. Over the past few months,
                I’ve been learning full stack development, starting with HTML, CSS, and JavaScript — and now exploring React and backend technologies.

                I enjoy building real-world projects that help me apply what I learn and solve practical problems.
                I'm also preparing to contribute to open-source communities and actively working toward participating in Google Summer of Code (GSoC).

                In the coming months, I’ll be focusing more on Data Structures & Algorithms to sharpen my problem-solving skills and prepare for future internships and placements.

                Currently Exploring:
                • Full Stack Web Development
                • Git, GitHub, Version Control
                • Open Source Projects & Communities

                Looking Forward To:
                • Contributing to GSoC organizations
                • Internship opportunities in frontend/web development
                • Collaborating with other developers and learning through real-world work

                If you're working on something exciting or looking to collaborate, feel free to connect!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroContent;
