"use client";
import React from "react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#121212] text-white p-6 rounded-lg w-[90%] max-w-lg shadow-xl relative">
        <button
          className="absolute top-3 right-3 text-xl font-bold text-gray-400 hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-3 text-gradient bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-sm leading-6 text-gray-300">
          Hi, I&apos;m <strong>Arman Husain</strong> 👋 — a passionate Frontend Developer currently pursuing my B.Tech.
          I love building beautiful, responsive user interfaces using modern technologies like React, Tailwind CSS, and Next.js.
          <br />
          <br />
          I&apos;m always eager to learn new tools and contribute to meaningful projects.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
