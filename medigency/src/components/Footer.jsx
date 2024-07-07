import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-5 py-6 text-gray-600">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm">© 2024 Mobigency. All Rights Reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61560885792240&mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebookF className="hover:text-primary cursor-pointer w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/mobigency?igsh=MWg0bjJydzNnMnhuMg=="
            target="_blank"
          >
            <AiOutlineInstagram className="hover:text-primary cursor-pointer w-6 h-6" />
          </a>
          <a href="https://wa.me/message/HIGS5L4IS54PG1" target="_blank">
            <BsWhatsapp className="hover:text-primary cursor-pointer w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
