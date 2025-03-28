import React, { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function Main() {
  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: true,
    }));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function hold(id: string) {
    console.log("Holding die with id:", id);
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={false}
      hold={() => hold(dieObj.id)}
      id={dieObj.id}
    />
  ));

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
