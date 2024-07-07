"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const email = sessionStorage.getItem("email");
    if (!email) router.push("/Login");
    else router.push("/Home");
  }, []);
}
