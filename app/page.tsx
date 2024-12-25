import Button from "./Components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-green-300 to-blue-300">
      <p className="text-6xl font-bold pb-6 font-zentry ">CHOOSE THE COLOR</p>
      <div className="bg-white px-12 py-8 rounded-2xl shadow-xl border-2 border-gray-200">
        <Button />
      </div>
      <p className="pt-3">Made by DevRohan</p>
    </div>
  );
}
