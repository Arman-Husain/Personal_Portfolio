"use client";

import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Footer = ({ setShowModal }: { setShowModal: (val: boolean) => void }) => {

  return (
    <div className="w-full bg-[#030014cc] backdrop-blur-md border-t border-purple-500/20 text-gray-200 py-8 mt-10 shadow-inner shadow-purple-800/10">
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
       {/* About Section */}
<div className="text-center md:text-left">
  <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
    About
  </h3>
  <p className="mt-2 text-sm">Hi, I'm Arman Husain</p>
  <p className="text-sm">📞 +91 9057212878</p>
  <p className="text-sm">📧 armanhussain681@gmail.com</p>
  <p className="text-xs text-gray-400 italic mt-2">
    📩 To contact me, use the <span className="underline text-cyan-400">Contact</span> button in the top navbar.
  </p>
</div>


        {/* Social Icons Section */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Connect
          </h3>
          <div className="flex items-center justify-center gap-4">
            {Socials.map((social) => (
              <div
                key={social.name}
                className="p-2 rounded-full bg-[#1a1a2b] border border-purple-500/30 shadow-md hover:shadow-cyan-500/20 opacity-70 hover:opacity-100 transition-all duration-300 cursor-not-allowed"
                title={`${social.name} (click disabled)`}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
          <p className="text-xs mt-1 text-gray-400 italic">
            (Click disabled due to 3D background)
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-6 text-gray-400">
        &copy; 2025 Arman Husain. All rights reserved.
        <p>Made with ❤️ by Arman Husain</p>
      </div>
      
    </div>
  );
  
};

export default Footer;
