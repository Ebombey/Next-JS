import React from "react";

interface IGameParams {
  params: {
    id: string;
  };
}

const Game = async ({ params }: IGameParams) => {
  const { id } = await params;
  return <div className="w-full h-screen text-6xl">Game: {id}</div>;
};

export default Game;
