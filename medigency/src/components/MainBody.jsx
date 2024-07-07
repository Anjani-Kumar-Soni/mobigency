"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainBody = () => {
  return (
    <>
      <Header />
      <div
        className="flex justify-center h-screen"
        style={{ backgroundColor: "rgb(224, 251, 226)" }}
      >
        <h1 className="font-bold text-white">Welcome to our website</h1>
      </div>
      <Footer />
    </>
  );
};

export default MainBody;
