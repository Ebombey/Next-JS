import Link from "next/link";
import React from "react";

const Games = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Link href={"/games"}>Go to game</Link>
    </div>
  );
};

export default Games;
