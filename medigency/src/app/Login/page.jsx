"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Page = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.status == 200) {
      console.log(res);
      sessionStorage.setItem("email", data.email);
      toast.success(res.message);
      router.push("/Home");
    } else {
      // console.log(res.message);
      toast.error(res.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[50%]">
        <h1 className="font-bold">Mobigency</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vero
          at vel facilis nesciunt fugit error excepturi, sit aspernatur.
          Tenetur.
        </p>
      </div>
      <div className="p-3 bg-white max-w-md w-full rounded-lg border border-t-2 border-primary">
        <h1 className="font-bold text-3xl my-4 text-center text-gray-600 uppercase">
          Login
        </h1>
        <form>
          <div className="px-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <div className="flex justify-center mt-5">
              <p className="text-gray-500">{"Don't"} have an account?</p>
              <span>
                <Link
                  href="/SignUp"
                  className="ml-1 font-bold cursor-pointer text-blue-600 mr-1"
                >
                  Sign Up
                </Link>
              </span>
              <span className="text-gray-500"> now</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
