import React, { useState } from "react";
import Die from "./Die";

type DieProps = {
  value: number;
};

export default function Main() {
  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6));
    }
    return newDice;
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map((num) => <Die value={num} />);

  return (
    <main className="bg-gray-100 h-full flex flex-col justify-center items-center rounded-b-lg">
      <div className="grid grid-cols-5 gap-5 px-10 py-15 font-[Karla]">
        {diceElements}
      </div>
      <button
        className="p-5 mb-5 bg-gradient-to-bl from-violet-500 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-700 active:scale-95 transition-all duration-200 text-white rounded-lg font-bold text-2xl"
        onClick={rollDice}
      >
        Roll
      </button>
    </main>
  );
}
