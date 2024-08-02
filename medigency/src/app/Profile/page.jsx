"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const fetchUserData = async (email) => {
    const res = await fetch("/api/users/fetchData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    if (res.ok) {
      const response = await res.json();
      setData(response.data);
      // console.log(response.data);
    } else console.log(res.message);
  };
  useEffect(() => {
    const email = sessionStorage.getItem("email");
    if (email) {
      fetchUserData(email);
    } else router.push("/Login");
  }, []);

  return (
    <div className="py-5">
      <h1 className="text-center">Profile</h1>
      <div>Username : {data["userName"]}</div>
    </div>
  );
};

export default Profile;
