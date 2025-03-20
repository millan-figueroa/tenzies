import Main from "../components/Main";

type DieProps = {
  value: number;
};

export default function Home() {
  return (
    <div className="h-100% w-100% max-h-[500px] max-w-[500px] bg-gray-900 rounded-t-lg ">
      <h1 className="text-4xl font-bold p-4 mt-4 text-slate-200">Tenzies</h1>
      <Main value={0} />
    </div>
  );
}
