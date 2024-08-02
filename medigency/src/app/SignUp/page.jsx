"use client";
import Link from "next/link";
import React, { useState } from "react";
import Form1 from "../../components/Form1";
import Form2 from "../../components/Form2";
import Form3 from "../../components/Form3";
import Form4 from "../../components/Form4";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    userName: "",
    contact: "",
    homeAdd: "",
    dob: new Date(),
    emergency: {
      userName: "",
      contact: "",
      relation: "",
    },
    bloodGroup: "",
    bloodPressure: "Normal",
    haemoglobin: 14,
    familyDiabetic: [],
    allergy: [],
    bloodDonated: [{ bankName: "", bankAdd: "" }],
    familyCancer: [],
    operated: [],
    medication: {
      medName: [],
      vaccName: "",
    },
    problems: {
      TB: {
        organName: "",
      },
      hasTyphoid: false,
      injury: [
        {
          headInjury: false,
        },
      ],
      diabetes: {
        isDiabetic: false,
      },
    },
  });

  const [formIndex, setFormIndex] = useState(1);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(e.target.name+" "+e.target.value)
  };

  const increment = () => {
    if (formIndex < 4) setFormIndex(formIndex + 1);
  };
  const decrement = () => {
    if (formIndex > 1) setFormIndex(formIndex - 1);
  };

  const getForm = () => {
    switch (formIndex) {
      case 1:
        return (
          <Form1
            data={data}
            handleChange={handleChange}
            increment={increment}
          />
        );
      case 2:
        return (
          <Form2
            data={data}
            handleChange={handleChange}
            increment={increment}
            decrement={decrement}
            setData={setData}
          />
        );
      case 3:
        return (
          <Form3
            data={data}
            setData={setData}
            increment={increment}
            decrement={decrement}
          />
        );
      case 4:
        return (
          <Form4
            data={data}
            handleChange={handleChange}
            setData={setData}
            decrement={decrement}
          />
        );
      default:
        return (
          <Form1
            data={data}
            handleChange={handleChange}
            decrement={decrement}
          />
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[100vh] my-2">
      <div className="p-3 bg-white max-w-lg w-full rounded-lg border border-t-2 border-primary">
        {getForm()}
        <div className="flex justify-center mt-5">
          <p className="text-gray-500">Already have an account?</p>
          <Link
            href="/Login"
            className="ml-1 font-bold cursor-pointer text-blue-600 mb-3"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
