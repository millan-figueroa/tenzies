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
      className={`h-[50px] w-[50px] shadow-md rounded-lg border-none font-inter text-[1.75rem] font-bold cursor-pointer ${
        isHeld ? "bg-green-400" : "bg-slate-200"
      }`}
    >
      {value}
    </button>
  );
}
