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

  const diceElements = dice.map((num) => <Die value={num} />);

  return (
    <main className="bg-slate-50 h-full flex flex-col justify-center items-center rounded-b-lg">
      <div className="grid grid-cols-5 gap-5 px-10 py-30 font-[Karla]">
        {diceElements}
      </div>
      <button
        className="bg-blue-600 text-white p-5"
        onClick={generateAllNewDice}
      >
        Roll
      </button>
    </main>
  );
}
