type DieProps = {
  value: number;
  isHeld: boolean;
};

export default function Die({ value, isHeld }: DieProps) {
  return (
    <button
      className={`h-[50px] w-[50px] shadow-md rounded-lg border-none font-inter text-[1.75rem] font-bold cursor-pointer ${
        isHeld ? "bg-green-400" : "bg-slate-200"
      }`}
    >
      {value}
    </button>
  );
}
