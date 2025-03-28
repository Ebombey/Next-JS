"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-2xl">
      <h1>Welcome to the page one</h1>
      <button
        onClick={() => router.push("/page2")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      >
        Next Page
      </button>
    </div>
  );
};

export default Main;
