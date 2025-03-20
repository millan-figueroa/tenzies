import Main from "../components/Main";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-8 text-slate-200">Tenzies Game</h1>
      <Main />
    </div>
  );
}
