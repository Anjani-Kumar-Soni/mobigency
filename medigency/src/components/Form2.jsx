import { Bebas_Neue } from "next/font/google";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Form2 = ({ data, handleChange, increment, decrement, setData }) => {
  return (
    <div>
      <form>
        <h3 className={`font-bold text-center ${bebas.className} text-lg`}>Personal Details</h3>
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
            <label htmlFor="dob" className="leading-7 text-sm text-gray-600 mr-2">
              Date Of Birth
            </label>
            <DatePicker
              className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              selected={data.dob}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => setData({ ...data, dob: date })}
              maxDate={new Date()}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="w-auto bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
            onClick={() => decrement()}
          >
            Previous
          </button>
          {data.userName === "" ||
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
        <div className="text-center text-sm text-blue-900">Page: 2 of 4</div>
      </form>
    </div>
  );
};

export default Form2;
