type DieProps = {
  id: string;
  value: number;
  isHeld: boolean;
  hold: () => void;
};

export default function Die({ value, isHeld, hold }: DieProps) {
  return (
    <button
      onClick={hold}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, 
            ${isHeld ? "held" : "not held"}`}
      className={`h-[50px] w-[50px] shadow-md rounded-lg font-inter text-[1.75rem] font-bold hover:border-2 hover:border-gray-900  cursor-pointer ${
        isHeld
          ? "bg-gradient-to-bl from-violet-500 to-fuchsia-500  text-slate-200"
          : "bg-slate-200"
      }`}
    >
      {value}
    </button>
  );
}
