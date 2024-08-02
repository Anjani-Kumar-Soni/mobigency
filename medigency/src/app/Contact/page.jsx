"use client";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    heading: "",
    description: "",
    email: "",
  });
  const [emailPresent, setEmailPresent] = useState(false);
  useEffect(() => {
    const curr_email = sessionStorage.getItem("email");
    if (curr_email) {
      setData({ ...data, email: curr_email });
      setEmailPresent(true);
    }
  }, []);

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
            {!emailPresent && (
              <div className="mb-4">
                <label
                  htmlFor="emailID"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email ID
                </label>
                <input
                  type="text"
                  id="emailID"
                  name="email"
                  value={data.email}
                  placeholder="Write your email id here"
                  onChange={handleChange}
                  className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            )}
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
              onClick={handleSubmit}
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

export default Contact;
