import React, { useState } from "react";
import Die from "./Die";

type DieProps = {
  value: number;
};

export default function Main() {
  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map((dieObj) => <Die value={dieObj.value} />);

  return (
    <main className="bg-slate-200 h-full flex flex-col justify-center items-center rounded-b-lg">
      <div className="grid grid-cols-5 gap-5 px-10 py-15 font-[Karla]">
        {diceElements}
      </div>
      <button
        className="px-15 py-4 mb-5 bg-gradient-to-bl from-violet-500 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-700 active:scale-95 transition-all duration-200 text-white rounded-lg font-bold text-2xl"
        onClick={rollDice}
      >
        Roll
      </button>
    </main>
  );
}
