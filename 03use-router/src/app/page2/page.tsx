"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Aside = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-2xl">
      <h1>Welcome to the page two</h1>
      <button
        onClick={() => router.back()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      >
        Previous Page
      </button>
    </div>
  );
};

export default Aside;
