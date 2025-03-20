import Main from "../components/Main";

export default function Home() {
  return (
    <div className="flex flex-col align-middle items-center h-full bg-gray-950">
      <h1 className="text-4xl font-bold mt-4 text-slate-200">Tenzies</h1>
      <Main />
    </div>
  );
}
