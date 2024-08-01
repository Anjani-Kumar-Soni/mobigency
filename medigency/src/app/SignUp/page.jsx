"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Form1 from "../../components/Form1";
import Form2 from "../../components/Form2";
import Form3 from "../../components/Form3";
import Form4 from "../../components/Form4";

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    userName: "",
    contact: "",
    homeAdd: "",
    dob: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const res = await response.json();
    // console.log(res)
    if (res.status == 200) {
      // console.log(res.message);
      sessionStorage.setItem("email", data.email);
      toast.success(res.message);
      router.push("/Home");
    } else {
      // console.error(res.message);
      toast.error(res.message);
    }
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
    <div className="flex items-center justify-center h-[100vh] my-2">
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

export default Page;
