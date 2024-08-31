import { RegisterEmail } from "./_lib/RegEmail";
import { RegisterName } from "./_lib/RegName";
import { RegisterBread } from "./_lib/Bread";
import { Handshake } from "lucide-react";

export default function RegisterUser() {
  return (
    <>
      <RegisterBread />
      <main className="w-full h-full px-6 py-8 flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 ">
        <h1 className="w-full text-center text-2xl text-gray-700 leading-snug font-semibold mb-6">
          Just a moment before getting you started.
        </h1>
        <div className="w-full text-md font-normal flex gap-2 items-center justify-center leading-tight text-emerald-500 text-center "> 
          <Handshake/> 
          <span>Help us identify you.</span>
        </div>

        <div className="w-full lg:w-1/2 xl:w-1/3 shadow-md rounded-lg flex flex-col gap-6">
          <RegisterName />
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 shadow-md rounded-lg flex flex-col gap-6">
          <RegisterEmail />
        </div>
      </main>
    </>
  );
}
