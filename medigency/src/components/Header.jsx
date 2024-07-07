"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const router = useRouter();
  const [display, setDisplay] = useState(false);
  const handleLogout = () => {
    sessionStorage.removeItem("email");
    router.push("/Login");
  };
  return (
    <header className="flex justify-between h-20 items-center sticky top-0 bg-white px-5">
      {/* for logo */}
      <Link href="/">
        <div className="text-2xl cursor-pointer">Mobigency</div>
      </Link>

      {/* for options */}
      <div className="hidden lg:flex space-x-5">
        <h1 className="hover:text-primary transition-all duration-300 cursor-pointer">
          Who we are?
        </h1>
        <h1 className="hover:text-primary transition-all duration-300 cursor-pointer">
          What we do?
        </h1>
        <Link href="/Contact">
          <h1 className="hover:text-primary transition-all duration-300 cursor-pointer">
            Contact Us
          </h1>
        </Link>
      </div>
      <div>
        <FaUserCircle
          className="text-3xl cursor-pointer"
          onMouseEnter={() => setDisplay(true)}
          onMouseLeave={() => setDisplay(false)}
        />
        {display && (
          <div
            className="bg-slate-400 text-white absolute right-10 top-12"
            onMouseEnter={() => setDisplay(true)}
            onMouseLeave={() => setDisplay(false)}
          >
            <Link href="/Profile">
              <div className="cursor-pointer">My Profile</div>
            </Link>
            <div className="cursor-pointer" onClick={handleLogout}>
              Log out
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
