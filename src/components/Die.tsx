type DieProps = {
  value: number;
};

export default function Die({ value }: DieProps) {
  return (
    <button
      className="h-[50px] w-[50px] shadow-md rounded-lg border-none bg-slate-200 font-inter text-[1.75rem] font-bold cursor-pointer"
      value={value}
    >
      {value}
    </button>
  );
}
