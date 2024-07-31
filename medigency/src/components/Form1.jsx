import React, { useState } from "react";
import { Checkmark } from "react-checkmark";

const Form1 = ({ data, handleChange, increment }) => {
  const [emailVerified, setEmailVerified] = useState(false);
  const handleEmailVerification = async () => {
    const response = await fetch("/api/getOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.email),
    });
    const res = await response.json();
    console.log(res);
    setEmailVerified(true);
  };
  return (
    <div>
      <form>
        <h3 className="font-bold text-center">Personal Details</h3>
        <div className="px-4">
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="leading-7 text-sm text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter you name"
              value={data.userName}
              onChange={handleChange}
              required
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={data.email}
                onChange={handleChange}
                required
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {/* <div className="flex items-center">
                {!emailVerified ? (
                  data.email !== "" ? (
                    <button
                      type="button"
                      className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 h-auto"
                      onClick={handleEmailVerification}
                    >
                      Verify
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-blue-400 text-white font-bold py-2 px-4 rounded h-auto cursor-default"
                    >
                      Verify
                    </button>
                  )
                ) : (
                  <Checkmark size="medium" />
                )}
              </div> */}
            </div>
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
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              required
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact"
              className="leading-7 text-sm text-gray-600"
            >
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter your contact number"
              value={data.contact}
              onChange={handleChange}
              required
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="homeAdd"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              id="homeAdd"
              name="homeAdd"
              placeholder="Enter your Home Address"
              value={data.homeAdd}
              onChange={handleChange}
              required
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="leading-7 text-sm text-gray-600">
              Date Of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder="Enter your Home Address"
              value={data.dob}
              onChange={handleChange}
              required
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="flex justify-end">
          {data.userName === "" ||
          data.email === "" ||
          data.password === "" ||
          data.contact === "" ||
          data.homeAdd === "" ||
          data.dob === "" ? (
            <button
              type="button"
              className="w-auto bg-blue-400 text-white font-bold py-2 px-4 rounded hover:cursor-default"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="w-auto bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
              onClick={() => increment()}
            >
              Next
            </button>
          )}
        </div>
        <div className="text-center text-sm text-blue-900">Page: 1 of 3</div>
      </form>
    </div>
  );
};

export default Form1;
