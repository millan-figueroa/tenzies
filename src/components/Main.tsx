import React, { useState, useEffect, useRef } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

/**
 * Challenge:
 * Make it so when the game is over, the "New Game" button
 * automatically receives keyboard focus so keyboard users
 * can easily trigger that button without having to tab
 * through all the dice first.
 *
 * Hints:
 * 1. Focusing a DOM element with the DOMNode.focus() method
 *    requires accessing the native DOM node. What tool have
 *    we learned about that allows us to do that?
 *
 * 2. Automatically calling the .focus() on a DOM element when
 *    the game is won requires us to synchronize the local
 *    `gameWon` variable with an external system (the DOM). What
 *    tool have we learned about that allows us to do that?
 */

export default function Main() {
  const [dice, setDice] = React.useState(() => generateAllNewDice());

  let gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  // Using useEffect to focus the button when the game is won
  const newGameButtonRef = React.useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (gameWon && newGameButtonRef.current) {
      newGameButtonRef.current.focus();
    }
  }, [gameWon]);

  // Function to generate an array of 10 new dice objects
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  // Function to roll the dice (update the values of the dice that are not held)
  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  }

  // Function to toggle the hold state of a die
  function hold(id: string) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die
      )
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      id={dieObj.id}
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)} // Pass the hold function to the Die component with id param
    />
  ));

  return (
    <main className="bg-slate-200 h-full flex flex-col justify-center items-center rounded-b-lg">
      {gameWon && <ReactConfetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <div className="grid grid-cols-5 gap-5 px-10 py-12 font-[Karla]">
        {diceElements}
      </div>
      <button
        ref={newGameButtonRef}
        className="px-15 py-3 mb-7 bg-gradient-to-bl from-violet-500 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-700 active:scale-95 transition-all duration-200 text-white rounded-lg font-bold text-2xl"
        onClick={gameWon ? () => setDice(generateAllNewDice()) : rollDice}
      >
        {gameWon ? "🎲 New Game" : "🤞🏼 Roll Dice"}
      </button>
    </main>
  );
}
