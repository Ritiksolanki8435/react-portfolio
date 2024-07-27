/** @format */
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="text-3xl">𝓡𝓢</h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ritik-solanki-9200a3210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ritiksolanki8435/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/me._hrithik__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/+918435943098"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsappSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
