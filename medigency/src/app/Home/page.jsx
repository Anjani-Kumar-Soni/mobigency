'use client'
import React, { useEffect } from "react";
import MainBody from "../../components/MainBody";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const email = sessionStorage.getItem("email");
    if (!email) router.push("/Login");
  }, []);

  return <MainBody />;
};

export default Page;
