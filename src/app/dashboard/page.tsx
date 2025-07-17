"use client";
import Navbars from "@/components/ui/Navbars";
export default function dashboard() {
  return (
    <>
      {/* <Navbars></Navbars> */}
      <main className="max-w-2xl m-auto  h-screen grid grid-cols-4 text-white bg-black gap-6">
        <div className="mt-20 m-2 rounded-2xl col-span-4">
          <div className="text-xl font-bold">Learn Baybayin</div>
          <div className=" rounded p-2 mt-2 h-[100%] ">k</div>
        </div>
        <div className="border-zinc-800 m-2 rounded-2xl col-span-4">
          <div className="text-xl font-bold">Games</div>
          <div className=" rounded p-2 mt-2 h-[100%] ">k</div>
        </div>
      </main>
    </>
  );
}
