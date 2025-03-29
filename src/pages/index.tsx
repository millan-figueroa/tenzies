import Main from "../components/Main";

export default function Home() {
  return (
    <div className="h-full w-100% max-h-[500px] max-w-[500px] pt-2 bg-gray-900 rounded-t-lg">
      <div className="mx-4 my-4 p-2 rounded-lg text-center text-slate-200 border-1 border-slate-200">
        <h1 className="text-4xl py-2 font-bold ">Tenzies</h1>
        <p className="text-sm p-4 font-[Karla]">
          The goal is to roll all ten dice to the same number. Click/ tap on a
          die to hold it, and roll the remaining dice until you match all 10
          dice!
        </p>
      </div>
      <Main />
    </div>
  );
}
