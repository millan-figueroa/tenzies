import Main from "../components/Main";
import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

type WindowSize = {
  width: number;
  height: number;
  gameWon: boolean;
};

export default function Home() {
  const { width, height } = useWindowSize(); // Get the current window size
  const [gameWon, setGameWon] = React.useState(false);
  return (
    <div className="h-full w-100% max-h-[500px] max-w-[500px] pt-2 bg-gray-900 rounded-t-lg">
      {gameWon ? <Confetti width={width} height={height} /> : null}
      <div className="mx-4 my-4 p-2 rounded-lg text-center text-slate-200 border-1 border-slate-200">
        <h1 className="text-4xl py-2 font-bold ">Tenzies</h1>
        <p className="text-sm p-4 font-[Karla]">
          The goal is to roll all ten dice to the same number. Click/ tap on a
          die to hold it, and roll the remaining dice until you match all 10
          dice!
        </p>
      </div>
      <Main />
    </div>
  );
}
