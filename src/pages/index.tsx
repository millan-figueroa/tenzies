import Main from "../components/Main";
import React from "react";

export default function Home() {
  return (
    <div className="max-h-[500px] max-w-[500px] pt-2 bg-gray-900 rounded-t-lg overflow-hidden">
      <div className="mx-4 my-4 p-2 rounded-lg text-center text-slate-200">
        <h1 className="pb-3 text-4xl font-bold border-b-2 ">⭐ Tenzies ⭐</h1>
        <p className="text-sm p-4 font-[Karla]">
          Tap on a die to hold it. Roll all ten dice to the same value to win!
        </p>
      </div>
      <Main />
    </div>
  );
}
