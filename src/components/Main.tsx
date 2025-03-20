import Die from "./Die";

type DieProps = {
  value: number;
};

export default function Main({ value }: DieProps) {
  return (
    <main className="bg-slate-50 h-full rounded-lg flex flex-col justify-center items-center">
      <div className="grid grid-cols-5 gap-5">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
      </div>
    </main>
  );
}
