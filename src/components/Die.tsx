type DieProps = {
  id: string;
  value: number;
  isHeld: boolean;
  hold: () => void;
};

const diceFaces: Record<number, boolean[][]> = {
  1: [
    [false, false, false],
    [false, true, false],
    [false, false, false],
  ],
  2: [
    [true, false, false],
    [false, false, false],
    [false, false, true],
  ],
  3: [
    [true, false, false],
    [false, true, false],
    [false, false, true],
  ],
  4: [
    [true, false, true],
    [false, false, false],
    [true, false, true],
  ],
  5: [
    [true, false, true],
    [false, true, false],
    [true, false, true],
  ],
  6: [
    [true, false, true],
    [true, false, true],
    [true, false, true],
  ],
};

export default function Die({ value, isHeld, hold }: DieProps) {
  const face = diceFaces[value] ?? [];

  return (
    <button
      onClick={hold}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, 
            ${isHeld ? "held" : "not held"}`}
      className={`h-[50px] w-[50px] shadow-md rounded-lg  hover:border-1 hover:border-gray-900  cursor-pointer ${
        isHeld
          ? "bg-gradient-to-bl from-violet-600 to-fuchsia-300"
          : "bg-gradient-to-bl from-slate-100 to-slate-300"
      }`}
    >
      <div className="grid grid-rows-3 gap-1 w-full h-full p-1">
        {diceFaces[value].map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-between">
            {row.map((dot, colIndex) => (
              <div
                key={colIndex}
                className={`w-2.5 h-2.5 rounded-full ${
                  dot ? "bg-gray-900" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </button>
  );
}
