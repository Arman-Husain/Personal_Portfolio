"use client";

import React, { useState } from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import ContactModal from "@/components/shared/ContactModal";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar setShowModal={setShowModal} />
      {children}
      <Footer setShowModal={setShowModal} />
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default ClientLayout;
