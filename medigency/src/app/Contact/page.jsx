"use client";
import React, { useState } from "react";

const Page = () => {
  const [data, setData] = useState({
    heading: "",
    description: "",
    email: "rishabhkumarsharma2002@gmail.com",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const res = await response.json(); // parses JSON response into native JavaScript objects
    console.log(res);
  };
  return (
    <div className="grid place-items-center h-screen bg-slate-600">
      <div className="p-3 bg-white max-w-md w-full rounded-lg border border-t-2 border-primary">
        <h1 className="font-bold text-xl my-4 text-center text-gray-600">
          Any doubt? Contact us
        </h1>
        <form>
          <div className="px-4">
            <div className="mb-4">
              <label
                htmlFor="heading"
                className="leading-7 text-sm text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="heading"
                name="heading"
                value={data.heading}
                placeholder="Write your query title here"
                onChange={handleChange}
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="desc" className="leading-7 text-sm text-gray-600">
                Query
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Write your query description here"
                value={data.description}
                onChange={handleChange}
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              // onSubmit={handleSubmit}
              className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
