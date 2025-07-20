"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "contact-overlay") {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblkdlda", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("❗ Something went wrong.");
    }

    setTimeout(() => {
      onClose();
      setFormSubmitted(false);
      setStatus("");
    }, 2000);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="contact-overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[90%] max-w-lg p-6 rounded-2xl border border-purple-500/40 bg-[#1a1a2b]/90 shadow-2xl"
          >
            <button
              className="absolute top-3 right-4 text-2xl font-bold text-gray-400 hover:text-red-500"
              onClick={onClose}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="p-2 rounded bg-[#1a1a2b] text-white border border-purple-500"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="p-2 rounded bg-[#1a1a2b] text-white border border-purple-500"
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows={4}
                className="p-2 rounded bg-[#1a1a2b] text-white border border-purple-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                {formSubmitted ? "Sending..." : "Send"}
              </button>

              {status && (
                <p
                  className={`text-sm text-center mt-2 ${
                    status.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
