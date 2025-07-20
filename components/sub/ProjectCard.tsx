"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-[1.02] transition-transform duration-300 bg-white/5 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-64 object-cover rounded-t-lg"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {title}
          </h1>
          <p className="mt-2 text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
